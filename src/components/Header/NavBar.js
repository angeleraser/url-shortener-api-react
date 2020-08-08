/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../css/Header/NavBar.css";
import BaseButton from "../BaseComponents/BaseButton";
const NavBar = () => {
  const [isHidden, setMenuClassName] = useState(true);
  return (
    <nav className="flex relative nav-bar w-full justify-between items-center">
      {/*Logo */}
      <a
        className="inline-block logo bg-no-repeat bg-center bg-contain"
        href="index.html">
        {""}
      </a>
      {/*Links*/}
      <ul
        className={`menu flex-col absolute flex items-center${
          !isHidden ? " displayed" : ""
        }`}>
        <li className="w-full text-center font-bold">
          <a href="#">Features</a>
        </li>
        <li className="w-full text-center font-bold">
          <a href="#">Pricing</a>
        </li>
        <li className="w-full text-center font-bold">
          <a href="#">Resources</a>
        </li>
        <li className="w-full login text-center font-bold">
          <a href="#">Login</a>
        </li>
        <BaseButton label={"Sign Up"} type="button" classes="sign-up" />
      </ul>
      {/*Menu Button*/}
      <button
        onClick={() => {
          setMenuClassName(!isHidden);
        }}
        className={`menu-button bg-center bg-no-repeat bg-contain`}
        type="button"></button>
    </nav>
  );
};

export default NavBar;
