import React from 'react';
import { Navbar, Header, About, Team, Callers, Membership, Footer } from './components';
import './App.scss';

const App = () => {

  return (
        <div className="app">
        <Navbar />
        <Header />
        <About />
        <Team />
        <Callers />
        <Membership />
        <Footer />
      </div>
    );
  }

export default App;