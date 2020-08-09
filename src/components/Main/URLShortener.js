import React, { useState, useContext } from "react";
import "../../css/Main/URLShortener.css";
import { MainContext } from "./UrlShortenerProvider";
const apiKey = "1ae5c063096c4c97af977e24ba2ba9ba";
const URLShortener = () => {
  const [shouldValidate, setValidation] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [failedMsg, displayFailedMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToList } = useContext(MainContext);
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
  const createNewShortURL = () => {
    getShortedLink(inputValue)
      .then((data) => {
        addToList({
          ...data,
          shortURL: `https://${data.shortURL}`,
          copied: false,
        });
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        displayFailedMsg(true);
        setLoading(false);
      });
  };
  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
    setValidation(false);
    displayFailedMsg(false);
  };
  const isValid = () =>
    inputValue.startsWith("https://") && inputValue.trim().length > 15;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValid()) {
          setLoading(true);
          setInputValue("");
          createNewShortURL();
        } else {
          setValidation(true);
        }
      }}
      className="flex-col w-full absolute items-center flex url-shortener">
      <input
        required={shouldValidate}
        placeholder={`Shorten a link here`}
        type="text"
        value={inputValue}
        className={`w-full ${shouldValidate ? "invalid" : ""}`}
        onChange={handleInputValue}
      />
      <p className="invalid-msg">
        {inputValue.length === 0
          ? "Please add a link"
          : !isValid() && shouldValidate && "Please add a valid link"}
      </p>
      {failedMsg && (
        <p className="failed-msg">
          Check your network connection and try again
        </p>
      )}
      <button
        disabled={loading}
        className={`w-full ${loading ? "loading" : ""}`}
        type="submit">
        {loading ? "Loading..." : "Shorten It!"}
      </button>
    </form>
  );
};

export default URLShortener;
