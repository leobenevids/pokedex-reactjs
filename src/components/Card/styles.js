import { styled, css } from "styled-components";
import openPokeball from "../../assets/openPokeball.png";
import closedPokeball from "../../assets/closedPokeball.png"

export const CardContainer = styled.div`
  background-color: ${({ type }) => css`var(--${type})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 25%);

  &:hover {
    animation: bounce 0.5s linear;
    cursor: url(${closedPokeball}), pointer;
  }

  .number {
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 120px;
    height: 120px;

    &:hover {
      transform: scale(1.3);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      cursor: url(${openPokeball}), pointer;
    }
  }

`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 0.2rem;
  -webkit-text-fill-color: #ffde00;
  -webkit-text-stroke: 0.8px #003a70;
  }

  small {
    text-transform: capitalize;
  }

  button {
    color: rgb(22, 22, 22);
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.185);
  }
`;
