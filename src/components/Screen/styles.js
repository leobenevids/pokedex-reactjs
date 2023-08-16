import { styled } from "styled-components";

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 0.5rem;
  position: relative;

  h1 {
    -webkit-text-fill-color: #ffde00;
    -webkit-text-stroke: 4px #003a70;
    font-size: 4rem;
  }
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  button {
    span {
      display: none;
    }

    &:hover {
      span {
        display: inline;
      }
    }
  } 
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;