/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from "react";
import "../../css/Main/URL.css";
import "animate.css";
import { MainContext } from "./UrlShortenerProvider";

const URL = ({ destination, shortURL, id, copied }) => {
  const { updateList } = useContext(MainContext);

  const [isCopied, setCopyState] = useState(copied);

  const copyToClipboard = () => {
    !copied && updateList(id);
    navigator.clipboard.writeText(shortURL);
  };

  useEffect(() => {
    setCopyState(copied);
  }, [copied]);

  return (
    <div
      className={`flex flex-col w-full items-center url-item ${
        isCopied ? "animate__animated animate__headShake" : ""
      }`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={destination}
        className="w-full h2 font-medium">
        {destination}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block font-medium shortURL self-start"
        href={`${shortURL}`}>
        {shortURL}
      </a>
      <button
        onClick={copyToClipboard}
        className={`w-full font-bold flex items-center justify-center ${
          isCopied ? "is-copied" : ""
        }`}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default URL;
