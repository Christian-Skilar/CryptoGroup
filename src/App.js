import React from 'react';
import { Navbar, Loader, Header, About, Team, Callers, Membership, Footer } from './components';
import './App.scss';
import { useState, useEffect } from "react";


const App = () => {

  const [loading, setLoading] = useState(true)
    useEffect(() => {
      setLoading(false)
  }, [])

  return (
        <div className="app">
          {
            loading ?
            <Loader />
            :
            <div>
              <Navbar />
              <Header />
              <About />
              <Team />
              <Callers />
              <Membership />
              <Footer />
            </div>
        }
      </div>
    );
  }

export default App;