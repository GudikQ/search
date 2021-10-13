import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";

import { SearchBar } from "./components/SearchBar";
import { CardList } from "./components/CardList";
import { getMovies } from "./utils";

export const DEFAULT_SEARCH_BY = "";

const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
`;

function App() {
  const [results, setResults] = useState([]);
  const [searchBy, setSearchBy] = useState(DEFAULT_SEARCH_BY);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const fetchData = async (queryParams) => {
    try {
      const { data } = await getMovies(queryParams);
      setResults(data);
    } catch (e) {
      setError(e.data?.error);
    }
  };

  useEffect(() => {
    getDebouncedResults.current(searchBy);
  }, [searchBy]);

  const getDebouncedResults = useRef(debounce(fetchData, 1000));

  return (
    <div>
        <Title>React Search</Title>
        <SearchBar onChangeText={setSearchBy} value={searchBy} />
        <CardList results={results} />
    </div>
  );
}

export default App;
