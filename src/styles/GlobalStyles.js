import { createGlobalStyle } from "styled-components";
import animeFont from "../fonts/PocketMonk-15ze.ttf"
import gameFont from "../fonts/PokemonGb-RAeo.ttf"

const GlobalStyles = createGlobalStyle`
    body {
  margin: 0;
  font-family: 'PocketMonk-15ze';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "PokemonGb-RAeo";
  src: url(${gameFont});
}

@font-face {
  font-family: "PocketMonk-15ze";
  src: url(${animeFont});
}

:root {
  --grass: #78c850;
  --fire: #f08030;
  --water: #6890f0;
  --bug: #a8b820;
  --normal: #a8a878;
  --poison: #a040a0;
  --electric: #f8d830;
  --ground: #e0c068;
  --fairy: #ee99ac;
  --fighting: #c03028;
  --psychic: #f85888;
  --rock: #b8a038;
  --ghost: #705898;
  --ice: #98d8d8;
  --dragon: #7038f8;
  --steel: #b7b7ce;
  --dark: #705746;
  --flying: #f5f5f5;
}

@keyframes bounce {
  20% {
    transform: translateY(-6px);
  }
  40% {
    transform: translateY(0px);
  }

  80% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}
`;

export default GlobalStyles;
