import React, { useEffect, useState } from "react";
import Card from "../Card";
import GlobalContainer from "../Layout/Container";
import { GridContainer, LoadMorebtn, PokemonContainer } from "./styles";

const Screen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
        await pokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <GlobalContainer>
      <h1>Pokédex</h1>
      <PokemonContainer>
        <GridContainer>
          {pokemons.map((pokemonStats, index) => (
            <Card
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </GridContainer>
        <LoadMorebtn onClick={() => getAllPokemons()}>
          Load more
        </LoadMorebtn>
      </PokemonContainer>
    </GlobalContainer>
  );
};

export default Screen;
