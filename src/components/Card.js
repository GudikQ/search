import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 15px;
  text-align: center;
  padding: 20px;
  box-shadow: 8px 7px 13px 0 #dadada;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  cursor: pointer;
`;

export function Card({ movie }) {
  const { Poster, Title, Year } = movie;

  const isPoster =
    Poster !== "N/A"
      ? Poster
      : "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";
  return (
    <StyledCard>
      <img src={isPoster} alt={Title} width="400" />
      <h4>{Title}</h4>
      <span>{Year}</span>
    </StyledCard>
  );
}
