import React from "react";
import "../styles/Navbar.css";

const styles = {
  nav: {
    color: "black"
  },
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="/" class="col">Home </a>
      <a href="/" class="col">Portfolio </a>
      <a href="/" class="col">About Me </a>
      <a href="/" class="col">Social </a>
      <a href="/" class="col">Contact </a>
    </nav>
  );
}

export default Navbar;
