import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Favourites from './components/Favourites.js';
import Search from './components/Search.js';
import './App.css';
import '@fontsource/cherry-swash';

function App() {
  return (
    <div className="App">
      
      <Router>

        <Routes>
          <Route exact path="/" element={ <><Navbar /><Home /></> } />
          <Route exact path="/Favourites" element={ <><Navbar /><Favourites /></> } />
          <Route exact path="/Search" element={ <><Navbar /><Search /></> } />
        </Routes>

      </Router>

    </div>
  );
}

export default App;