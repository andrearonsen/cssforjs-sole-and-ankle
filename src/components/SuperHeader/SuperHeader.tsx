import styled from "styled-components";
import { COLORS } from "../../constants";
import SearchInput from "../SearchInput/SearchInput";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import { Icon } from "../Icon/Icon";

export const SuperHeader = () => (
  <Wrapper>
    <MarketingMessage>
      Free shipping on domestic orders over $75!
    </MarketingMessage>
    <SearchInput />
    <HelpLink href="/help">Help</HelpLink>
    <UnstyledButton>
      <Icon id="shopping-bag" strokeWidth={1} size={24} />
    </UnstyledButton>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  padding: 0 36px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  padding: 12px 0;
  width: 100%;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;
