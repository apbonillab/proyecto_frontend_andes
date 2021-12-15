import axios from "axios";

const api = "https://pokeapi.co/api/v2/";

export const Api= axios.create({
  baseURL:api
});
