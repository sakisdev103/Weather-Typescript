import axios from "axios";

const productionUrl = `https://api.openweathermap.org/data/2.5`;

export const customFetch = axios.create({
  baseURL: productionUrl,
});
