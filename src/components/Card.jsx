import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { StyledCard } from "./styles/StyledCard";
import CommentIcon from "@material-ui/icons/Comment";

const Card = (props) => {
  //console.log(props);
  const { body, userId } = props.details;
  const { id } = useParams();

  if (props.details) {
    return (
      <StyledCard>
        <div className="card-container">
          <div className="card">
            <div className="box">
              <div className="content">
                <h2> {`${id}`} </h2>
                <h3> Post </h3>
                <p>{body}</p>
                <a href="#">
                  Read Comments{" "}
                  <span>
                    <CommentIcon className="comment-icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Copyright@2022 CodeGuru <span> Ozzy</span>
        </footer>
      </StyledCard>
    );
  } else {
    <>
      <h1> Fetch data...</h1>
      <CircularProgress />
    </>;
  }
};

export default Card;
