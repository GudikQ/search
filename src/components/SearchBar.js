import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 20px 0;
  font-size: 17px;
  padding-left: 20px;
`;

export function SearchBar({ value, onChangeText }) {
  const handleChange = (e) => {
    const text = e.target.value;
    onChangeText(text);
  };
  return (
    <div>
      <Input
        id="search-input"
        type="text"
        placeholder="Search movies"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
