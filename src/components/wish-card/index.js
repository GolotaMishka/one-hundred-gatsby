import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cx from "classNames";
import "./styles.css";

const WishCard = ({ title, description }) => {
  return (
    <div className={cx("card")}>
      <StaticImage
        className="wishImage"
        alt={`Image ilustration of ${title} `}
        src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <h2 className="wishTitle">{title}</h2>
      <p className="wishDescription">{description}</p>
    </div>
  );
};

export { WishCard };
