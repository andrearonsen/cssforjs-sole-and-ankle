import styled from "styled-components";
import { SortId } from "./sortid";
import { WEIGHTS } from "../../constants";
import { Select } from "../Select/Select";
import { Spacer } from "../Spacer/Spacer";
import { ShoeGrid } from "../ShoeGrid/ShoeGrid";
import { Breadcrumbs, Crumb } from "../Breadcrumbs/Breadcrumbs";
import { ShoeSidebar } from "../ShoeSidebar/ShoeSidebar";

export type ShoeIndexProps = {
  sortId: SortId;
  setSortId: (newSortId: SortId) => void;
};

export const ShoeIndex = ({ sortId, setSortId }: ShoeIndexProps) => (
  <Wrapper>
    <MainColumn>
      <Header>
        <Title>Running</Title>
        <Select
          label="Sort"
          value={sortId}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
            const value = ev.target.value as SortId;
            setSortId(value);
          }}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
        </Select>
      </Header>
      <Spacer size={34} />
      <ShoeGrid />
    </MainColumn>
    <LeftColumn>
      <Breadcrumbs>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/sale">Sale</Crumb>
        <Crumb href="/sale/shoes">Shoes</Crumb>
      </Breadcrumbs>
      <Spacer size={42} />
      <ShoeSidebar />
    </LeftColumn>
  </Wrapper>
);

const Wrapper = styled.div``;

const LeftColumn = styled.div``;

const MainColumn = styled.div``;

const Header = styled.header``;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;
