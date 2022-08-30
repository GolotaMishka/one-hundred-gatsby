import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <StaticImage className="logo" alt="Logo" src="../../../images/icon.png" />
      <nav className="navigation">
        <a className="navigationLink" href="#about">
          About
        </a>
        <a className="navigationLink" href="#wishes">
          List wishes
        </a>
        <a className="navigationLink" href="#contacts">
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Header;
