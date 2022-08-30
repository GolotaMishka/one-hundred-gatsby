import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.css";

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <h3 className="socialTitle">I'm social. Follow me:</h3>

      <div className="links">
        <a className="socialLink" href="#about">
          <StaticImage
            className="socialLogo"
            alt="Logo"
            src="../../../images/facebook.svg"
          />
        </a>
        <a className="socialLink" href="#wishes">
          <StaticImage
            className="socialLogo"
            alt="Logo"
            src="../../../images/twitter.svg"
          />
        </a>
        <a className="socialLink" href="#contacts">
          <StaticImage
            className="socialLogo"
            alt="Logo"
            src="../../../images/github.svg"
          />
        </a>
        <a className="socialLink" href="#contacts">
          <StaticImage
            className="socialLogo"
            alt="Logo"
            src="../../../images/linkedIn.svg"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
