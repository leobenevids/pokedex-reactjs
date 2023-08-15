import React from "react";
import { Container } from "./styles";

const GlobalContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalContainer;