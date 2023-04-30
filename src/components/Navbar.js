import React from "react";
import "../styles/Navbar.css";

const styles = {
  nav: {
    background: "green",
    justifyContent: "flex-end",
  },
};

function Navbar() {
  return (
    <nav style={styles.nav} className="navbar">
      <a href="/">Home</a>
      <a href="/">Portfolio</a>
      <a href="/">About Me</a>
      <a href="/">Social</a>
      <a href="/">Contact</a>
    </nav>
  );
}

export default Navbar;
