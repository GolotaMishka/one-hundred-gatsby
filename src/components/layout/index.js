import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <main className="main">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export { Layout };
