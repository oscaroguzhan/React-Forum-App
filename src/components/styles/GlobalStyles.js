import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.body.bg};
    font-size:1.2rem;
  }
  p {
    line-height: 1.5;
  }
  img {
    max-width: 100%;
    object-fit:cover;
  }

  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }

`;
export default GlobalStyles;
