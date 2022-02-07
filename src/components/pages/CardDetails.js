import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const CardDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!props.location.details) {
      console.log("There is no data found ");
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Could not fetch the data");
          }
          return resp.json();
        })
        .then((json) => {
          setDetails(json);
        });
    }
  }, []);

  // fetch the comments from the api
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);

  //console.log(comments);
  //console.log(props.location.details);
  return (
    <>
      <Card
        details={props.location.details || details}
        commentDetails={comments}
        key={
          props.location.details
            ? props.location.details.id
            : details
            ? details.id
            : ""
        }
        {...props}
      />
    </>
  );
};

export default CardDetails;
