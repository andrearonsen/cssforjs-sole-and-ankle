import styled from "styled-components";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard/ShoeCard";

export const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
`;

export default ShoeGrid;