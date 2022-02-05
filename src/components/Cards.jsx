import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ post }) => {
  const { title, id } = post;
  return (
    <div className="post">
      <Link
        to={{
          pathname: `/post/${post.id}`,
          details: { ...post },
        }}
      >
        <h4 className="title"> {title} </h4>
      </Link>
    </div>
  );
};

export default Cards;
