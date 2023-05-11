import React from "react";
import { Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
// import ContactForm from "./components/ContactForm/index";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div class="flex-column justify-flex-start min-100-vh">
            <Header />
        <div className="ontainer">
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
      </Router>
    </ApolloProvider>
  );
}

export default App;
