import React, { useContext } from "react";
import "../../css/Main/URListing.css";
import URL from "./URL";
import { MainContext } from "./UrlShortenerProvider";

const URListing = () => {
  const { urlList } = useContext(MainContext);
  return (
    <ul className="grid w-full url-listing">
      {urlList.map((url) => (
        <URL key={url.id} {...url} />
      ))}
    </ul>
  );
};

export default URListing;
