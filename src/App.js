import React from "react";
// import * as ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
// import ContactForm from "./components/ContactForm/index";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  return (
      <HashRouter>
      <div class="flex-column justify-flex-start min-100-vh">
            <Header />
        <div className="container">
          <Routes>
              <Route 
                path="/" 
                element={<AboutMe />} 
              />
              <Route 
                path="/" 
                element={<Resume />} 
              />
              <Route 
                path="/" 
                element={<Projects />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
  );
}

export default App;
