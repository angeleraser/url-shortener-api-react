import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const apiKey = "1ae5c063096c4c97af977e24ba2ba9ba";
export const useFetchURL = (inputValue) => {
  const getShortedLink = async (site) => {
    const request = await fetch(
      `https://api.rebrandly.com/v1/links/new?apikey=${apiKey}&destination=${site}&domain[fullName]=rebrand.ly`
    );
    const { destination, shortURL, id } = await request.json();
    return {
      destination,
      shortURL,
      id,
    };
  };
  const [state, setState] = useState({
    data: null,
    loading: true,
  });
  useEffect(() => {
    getShortedLink(inputValue)
      .then((data) => {
        setState({
          data,
          loading: false,
        });
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
        });
      });
  }, [inputValue]);

  return state;
};
