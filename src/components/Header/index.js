import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const styles = {
  nav: {
    color: "black",
  },
};

const Header = () => {
  return (
    <header>
      <div class="container-fluid row">
      <div class="col-4" id="title">
        Vlasic Profile
      </div>
      <div className="col-8 d-flex justify-contents-end">
      <nav style={styles.nav} class="container">
        <ul class="">
            <li class="">
            <Link to="/aboutme" class="col">
              About Me
            </Link>
          </li>
          <li class="">
            <Link to="/projects" class="col">
              Projects
            </Link>
          </li>
          <li class="">
            <Link to="/contact" class="col">
              Contact
            </Link>
          </li>
          <li class="">
            <Link to="/resume" class="col">
              Resume
            </Link>
          </li>
        </ul>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
