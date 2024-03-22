import Navbar from './components/Navbar';
import React from "react";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Plans from './pages/Plans';
import Subs from './pages/Subs';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />  
    <Route path="/plans" element={<Plans />} />    
    <Route path="/subs" element={<Subs />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
