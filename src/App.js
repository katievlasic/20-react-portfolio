import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer/index";
import ContactForm from "./components/ContactForm/index";
import Resume from "./pages/Resume";

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
        <div>
          <ContactForm />
        </div>
        <div>
          <Resume />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
