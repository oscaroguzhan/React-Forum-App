import styled from "styled-components";

export const StyledHeader = styled.header`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.header.bg};
    height: 100px;
   box-shadow: 1px 3px black;
    position: relative;

    img {
      position: fixed;
      top: 0;
      left: 0;
      height: 100px;
    }
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      height: 100px;
      flex-direction: row;
      font-size: 1rem;
    }
  }
`;
