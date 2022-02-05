import styled from "styled-components";


export const StyledHomePage = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  .loading {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.body.homepage.white};

    .loading-icon {
      color: inherit;
    }
  }

  .cards-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100vh;
    gap: 10px;
  }
  .posts {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ theme }) => theme.colors.body.homepage.black};
    border-radius: 6px;
    margin-bottom: 10px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 1px 3px ${({ theme }) => theme.colors.body.homepage.black};
    padding: 10px;
    
    .post .title {
        color: ${({ theme }) => theme.colors.body.homepage.black};
        font-size: 1.3rem;
      }

    &:hover {
      opacity: 0.6;
    }
    .post {
      width: 350px;
      margin: 10px;
      padding: 10px;  
    }
  }
  
`;
