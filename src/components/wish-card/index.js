import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.css";

const WishCard = ({ title, description, className }) => {
  return (
    <div className="card">
      <StaticImage
        className={`wishImage ${className}`}
        alt={`Image ilustration of ${title} `}
        src="https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
      />

      <h2 className="wishTitle">{title}</h2>
      <p className="wishDescription">{description}</p>
    </div>
  );
};

export { WishCard };
