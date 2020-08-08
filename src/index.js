import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/tailwind/tailwind.output.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const ROOT = document.getElementById("root");

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};


ReactDOM.render(<App />, ROOT);
