import { CircularProgress} from "@material-ui/core";
import React from "react";
import { StyledHomePage } from "../styles/StyledHomePage";
import Cards from "../Cards";
import useFetch from "../useFetch";

const HomePage = () => {
  // fetch the post by using the custom fetch hook from api 
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <StyledHomePage>
      {isLoading && (
        <div className="loading">
          <h1>Loading...</h1>
          <CircularProgress className="loading-icon" />
        </div>
      )}
      {data && (
        <div className="cards-container">
       
          {data.slice(0, 100).map((post, i) => (
            <div className="posts" key={i} >
              <Cards post={post} />
            </div>
          ))}
        </div>
      )}
    </StyledHomePage>
  );
};

export default HomePage;
