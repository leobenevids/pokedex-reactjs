import { styled } from "styled-components";

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LoadMorebtn = styled.button`
 background: #f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x;
  border-radius: 2px;
  border: 1px solid #c6c6c6;
  color: #444;
  padding: 0.5rem 1.5rem;
  width: 25%;
  margin-top: 1rem;
  font-family: 'PokemonGb-RAeo';
  box-shadow: 1px 1.5px #999;

  &:hover{
  cursor: pointer;
  animation: bounce 0.06s linear;
}
`