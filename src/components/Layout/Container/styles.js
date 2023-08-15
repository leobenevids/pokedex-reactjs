import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 0.5rem;

  h1 {
    -webkit-text-fill-color: #ffde00;
    -webkit-text-stroke: 4px #003a70;
    font-size: 5rem;
  }
`;
