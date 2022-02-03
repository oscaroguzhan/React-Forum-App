import React from "react";
import logo from "../assets/ozzylogo.png";
import { StyledHeader } from "./styles/StyledHeader";
const Header = () => {
  return (
    <StyledHeader>
      <header>
        <img src={logo} alt="logo picture" />
        <h1> React Forum App</h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
