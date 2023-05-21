import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/Navbar";

const styles = {
  nav: {
    color: "black",
  },
};

const Header = ({ handlePageChange }) => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div class="top text-light" id="title">
        Vlasic Profile
      </div>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      <nav style={styles.nav} class="container">
        <ul class="row">
          <button class="col-2">
            <Link to="/home" class="btn btn-warning">
              Home
            </Link>
          </button>
            <li class="col-2">
            <Link to="/aboutme" class="col">
              About Me
            </Link>
          </li>
          <li class="col-2">
            <Link to="/projects" class="col">
              Portfolio
            </Link>
          </li>
          <li class="col-2">
            <Link to="/social" class="col">
              Social
            </Link>
          </li>
          <li class="col-2">
            <Link to="/contact" class="col">
              Contact
            </Link>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
