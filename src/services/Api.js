import axios from "axios";

const Api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (name) => {
  return await Api.get(`/pokemon/${name}`);
};

export const getPokemons = async (limit) => {
  return await Api.get(`/pokemon?${limit}`);
};
