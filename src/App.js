import React from "react";
import Route from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer/index";
import ContactForm from "./components/ContactForm/index";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <div class="container ">
        <div class="top container">
          <div class="col" id="title">
            Vlasic Profile
          </div>
          <div class="col">
            <Navbar />
          </div>
        <div class="ab">
          <AboutMe />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <Resume />
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
