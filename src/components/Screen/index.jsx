import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import { GlobalContainer, GridContainer, PokemonContainer } from "./styles";
import { getPokemon } from "../../services/Api";
import { FaAngleDoubleUp } from "react-icons/fa";

const Screen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const spriteType = [
    { name: "dream_world", has_shiny: false },
    { name: "home", has_shiny: true },
  ];
  const [spriteIndex, setSpriteIndex] = useState(0);
  const [showShiny, setShowShiny] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const createPokemonObject = async (results) => {
    const pokemonPromises = results.map(async (pokemon) => {
      const { data } = await getPokemon(pokemon.name);
      return data;
    });

    const pokemonData = await Promise.all(pokemonPromises);
    setPokemons((currentList) => [...currentList, ...pokemonData]);
  };

  const getAllPokemons = async () => {
    try {
      const { data } = await axios.get(loadMore);

      setLoadMore(data.next);

      createPokemonObject(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeSpriteTypes = () => {
    setShowShiny(false);
    setSpriteIndex((prevIndex) => (prevIndex + 1) % spriteType.length);
  };

  const toggleShinyVisibility = () => {
    setShowShiny(!showShiny);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <GlobalContainer>
      <h1>Pokédex</h1>
      <button
        onClick={changeSpriteTypes}
        style={{ position: "fixed", top: 1, left: 20, zIndex: 1 }}
      >
        Switch sprites
      </button>
      {spriteType[spriteIndex].has_shiny && (
        <button
          onClick={toggleShinyVisibility}
          style={{ position: "fixed", top: 1, right: 20, zIndex: 1 }}
        >
          {showShiny ? "default colors" : "shiny colors"}
        </button>
      )}
      <PokemonContainer>
        <GridContainer>
          {pokemons.map((pokemon, index) => (
            <Card
              key={index}
              id={pokemon.id}
              image={
                showShiny
                  ? pokemon.sprites.other[spriteType[spriteIndex].name]
                      .front_shiny
                  : pokemon.sprites.other[spriteType[spriteIndex].name]
                      .front_default
              }
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </GridContainer>
        <button onClick={() => getAllPokemons()}>Load more</button>
        {showBackToTop && (
          <button
            style={{ position: "fixed", bottom: 10, right: 20, zIndex: 1 }}
            onClick={scrollToTop}
          >
            <span>scroll to top</span> <FaAngleDoubleUp />
          </button>
        )}
      </PokemonContainer>
    </GlobalContainer>
  );
};

export default Screen;
