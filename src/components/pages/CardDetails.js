import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const CardDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <>
      <Card
        details={props.location.details || details}
        key={props.location.details.id}
      />
    </>
  );
};

export default CardDetails;
