import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export function CardList({ results }) {
  const data = results.Search || [];
  return (
    <List>
      {data.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </List>
  );
}
