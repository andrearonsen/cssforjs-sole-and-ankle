import styled from "styled-components";
import { formatPrice, isNewShoe, pluralize } from "../../utils";
import { Spacer } from "../Spacer/Spacer";
import { COLORS, WEIGHTS } from "../../constants";

export type ShoeCardProps = {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: Date;
  numOfColors: number;
};

export const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}: ShoeCardProps) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
        ? 'new-release'
        : 'default';

  const getVariantFlag = () => {
    if (variant === "on-sale") {
      return <SaleFlag>Sale</SaleFlag>;
    } else if (variant === "new-release") {
      return <NewReleaseFlag>Just Released!</NewReleaseFlag>;
    }
    return <></>;
  };

  const showSalePrice = variant === "on-sale" && salePrice;
  const displayPrice = () => {
    return showSalePrice ? (
      <OldPrice>{formatPrice(price)}</OldPrice>
    ) : (
      <Price>{formatPrice(price)}</Price>
    );
  };

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {getVariantFlag()}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          {displayPrice()}
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {showSalePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  width: 30%;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${COLORS.gray[700]};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const Flag = styled.div`
  position: absolute;
  right: -4px;
  top: 12px;
  z-index: 1;
  border-radius: 2px;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem;
  width: fit-content;
`;

const NewReleaseFlag = styled(Flag)`
  background: ${COLORS.secondary};
  color: white;
`;

const SaleFlag = styled(Flag)`
  background: ${COLORS.primary};
  color: white;
`;

export default ShoeCard;
