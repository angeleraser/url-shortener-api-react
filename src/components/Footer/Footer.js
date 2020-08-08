/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Footer/Footer.css";
import { appLogo, socialNetworkIcons } from "../../data";
const Footer = () => {
  return (
    <footer className="grid w-full footer">
      {/*Logo*/}
      <a className="inline-block logo bg-center bg-cover" href="#">
        {appLogo}
      </a>
      {/*Features*/}
      <ul className="text-lg grid">
        <h2 className="font-bold">Features</h2>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Link Shortening
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Branded Links
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Analytics
          </a>
        </li>
      </ul>
      {/*Resources*/}
      <ul className="text-lg grid">
        <h2 className="font-bold">Resources</h2>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Developers
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Support{" "}
          </a>
        </li>
      </ul>
      {/*Company*/}
      <ul className="text-lg grid">
        <h2 className="font-bold">Company</h2>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Our Team
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Careers
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <ul className="social flex items-center">
        {socialNetworkIcons.map(({ icon, link }) => (
          <li key={link}>
            <a rel="noopener noreferrer" target="_blank" href={link}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
