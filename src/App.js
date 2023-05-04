import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <div class="container-fluid ">
        <div class="top">
          <div id="title">
            Vlasic Profile
            </div>
            <div>
              <Navbar />
          </div>
        </div>
        <div class="ab">
          <AboutMe />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
