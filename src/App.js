import React from "react";
import { Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer/index";
import ContactForm from "./components/ContactForm/index";
import Resume from "./pages/Resume";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div class="container ">
        <div class="top container">
          <div class="col" id="title">
            Vlasic Profile
          </div>
          <div class="col">
            <Navbar />
          </div>
          <Routes>
              {/* Define routes to render different page components at different paths */}
              <Route 
                path="/" 
                element={<AboutMe />} 
              />
              </Routes>
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
      </Router>
      </ApolloProvider>
  );
}

export default App;
