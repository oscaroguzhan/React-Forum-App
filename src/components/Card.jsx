import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { StyledCard } from "./styles/StyledCard";
import CommentIcon from "@material-ui/icons/Comment";
import CommentDetails from "./CommentDetails";

const Card = (props) => {
  //console.log(props);
  const [showComments, setShowComments] = useState(false);
  const { body } = props.details;
  //console.log(props.commentDetails);
  //console.log(props.location);

  const { id } = useParams();
  // console.log(email);

  // define toggle function to show comment details for the post
  const handleComments = () => {
    setShowComments(!showComments);
  };
  if (props.details) {
    return (
      <StyledCard>
        <div className="card-container">
          <div className="card">
            <div className="box">
              <div className="content">
                <div>
                  <h2> {`${id}`} </h2>
                  <h3> Post </h3>
                  <p>{body}</p>
                  <button onClick={handleComments}>
                    {showComments ? "User Comments" : "Read User Comments"}
                    <span>
                      <CommentIcon className="comment-icon" />
                    </span>
                  </button>
                </div>
                {showComments && (
                  <div>
                    {props.commentDetails.map((comment, i) => (
                      <CommentDetails comment={comment} key={i} />
                    ))}
                    <Link to="/">
                      <button>Go to Homepage</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <footer>
          Copyright@2022 CodeGuru <span> Ozzy</span>
        </footer>
      </StyledCard>
    );
  }
};

export default Card;
