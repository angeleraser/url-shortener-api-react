import React from "react";
import NavBar from "./NavBar";
import { Content } from "./Content";
const Header = () => {
  return (
    <header className="main-header w-full flex flex-col items-start">
      <NavBar />
      <Content />
    </header>
  );
};

export default Header;
