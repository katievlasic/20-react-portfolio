import React from 'react';
// import "../../styles/Navbar";

const styles = {
    nav: {
      color: "black"
    },
  };

const Header = () => {
    return (
      <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
         <div class="top container" id="title">
            Vlasic Profile
          </div>
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <nav style={styles.nav}>
      <a href="/" class="col">Home </a>
      <a href="/" class="col">Portfolio </a>
      <a href="/" class="col">About Me </a>
      <a href="/" class="col">Social </a>
      <a href="/" class="col">Contact </a>
    </nav>
          
        </div>
      </header>
    );
  };
  
  export default Header;
  