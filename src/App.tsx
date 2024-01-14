import styled from "styled-components";
import "./App.css";
import { Header } from "./components/Header/Header";
import React from "react";
import { ShoeIndex } from "./components/ShoeIndex/ShoeIndex";
import { SortId } from "./components/ShoeIndex/sortid";

function App() {
  const [sortId, setSortId] = React.useState<SortId>("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
