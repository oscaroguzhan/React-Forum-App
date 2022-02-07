import styled from "styled-components";

export const StyledCard = styled.section`
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    min-height: 90vh;
    background: ${({ theme }) => theme.colors.body.card.bg};

    .card {
      position: relative;
      min-width: 100%;
      height: 900px;
      box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
        inset -5px -5px 5px rgba(255, 255, 255, 0.5),
        5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
      border-radius: 12px;
      margin: 25px;

      .box {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        background: ${({ theme }) => theme.colors.body.card.bg};
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
          padding: 20px;
          text-align: center;

          h2 {
            position: absolute;
            top: -40px;
            right: 10px;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.8);
            transition: 0.5s all ease-in;
            pointer-events: none;
          }
        }
      }
    }
  }
  .card-container .card:hover .box .content h2 {
    color: rgba(0, 0, 0, 0.5);
  }
  .card-container .card .box .content h3 {
    font-size: 3rem;
    z-index: 1;
    transition: 0.5;
  }
  .card-container .card .box .content p {
    font-size: 1.3rem;
    font-weight: 300;
    z-index: 1;
    transition: 0.5;
  }
  .card-container .card .box .content button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    margin: 10px auto;
    padding: 10px 20px;
    background: ${({ theme }) => theme.colors.body.bg};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.body.homepage.white};

    &:hover {
      opacity: 1.4;
      color: ${({ theme }) => theme.colors.body.homepage.black};
      font-weight: 800;
      transition: 0.5s ease-in;
    }
  }
  .card-container .card .box .content button span {
    font-size: 1.8rem;
  }

  .hide {
    display: none;
  }
  .active {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    box-shadow: 1px 3px black;
    font-size: 1.2rem;
    line-height: 1.3rem;
    cursor: pointer;

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px auto;
      color: rgba(0, 0, 0, 0.8);

      h6 strong {
        color: ${({ theme }) => theme.colors.body.bg};
      }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 1.2rem;

    span {
      color: ${({ theme }) => theme.colors.body.homepage.white};
      font-style: italic;
      font-weight: bold;
    }
  }
`;
