import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap');

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #695cfe;
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
