import React, { useState, useEffect } from "react";
// make custom reusable Hook
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not succeed to fetch data");
          }
          return response.json();
        })
        .then((json) => setData(json));
      setIsLoading(false);
    }, 1000);
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
