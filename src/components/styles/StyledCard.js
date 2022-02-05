import styled from "styled-components";

export const StyledCard = styled.section`
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    min-height: 80vh;
    background: #ebf5fc;

    .card {
      position: relative;
      min-width: 360px;
      height: 460px;
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
        background: #ebf5fc;
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
            color: rgba(0, 0, 0, 0.3);
            transition: 0.5s;
            pointer-events: none;
          }
        }
      }
    }
  }
  .card-container .card:hover .box .content h2 {
    color: rgba(255, 255, 255, 0.3);
  }
  .card-container .card .box .content h3 {
    font-size: 1.8rem;
    z-index: 1;
    transition: 0.5;
  }
  .card-container .card .box .content p {
    font-size: 1.1rem;
    font-weight: 300;
    z-index: 1;
    transition: 0.5;
  }
  .card-container .card .box .content a {
    position: relative;
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 10px;
    margin: 10px auto;
    padding: 10px 20px;
    background: ${({ theme }) => theme.colors.body.bg};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.body.homepage.white};

    &:hover {
        opacity: 1.4;
        color: black;
        font-weight:800;
        transition: 0.1 ease-in
    }
  }
  .card-container .card .box .content a span {
      font-size: 1.8rem;
      
  }
  footer {
      display:flex;
      justify-content:center;
      align-items:center;
      margin: 10px;
      font-size: 1.2rem;
      
      span {
          color:white;
          font-style:italic;
          font-weight:bold;
      }
  }
`;
