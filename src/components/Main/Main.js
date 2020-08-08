import React from "react";
import "../../css/Main/Main.css";
import URLShortener from "./URLShortener";
import URListing from "./URListing";
import AdvancedStatistic from "./AdvancedStatistic";
import BoostYourLinks from "./BoostYourLinks";
import ContextProvider from "./UrlShortenerProvider";
const Main = () => {
  return (
    <main className="flex flex-col items-center relative w-full main">
      <ContextProvider>
        <URLShortener />
        <URListing />
      </ContextProvider>
      <AdvancedStatistic />
      <BoostYourLinks />
    </main>
  );
};

export default Main;
