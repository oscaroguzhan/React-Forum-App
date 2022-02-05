import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header.bg};
  height: 100px;
  box-shadow: 1px 3px black;

  img {
    justify-content: flex-start;
    height: 100px;
  }
  h1 {
    margin: 0 auto;
  }

  // media query
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 100px;
    flex-direction: row;
    font-size: 1rem;
  }
`;
