import axios from "axios";

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "852fee2c"; //TODO: It should be deleted;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = (params) => {
  return axiosClient.get("/", {
    params: { s: params, i: "tt3896198", apiKey: API_KEY },
  });
};
