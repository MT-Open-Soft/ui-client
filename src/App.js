import Navbar from './components/Navbar';
import React from "react";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Plans from './pages/Plans';
import Subs from './pages/Subs';
// import './App.css';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Search from './components/Search';
import Video from './pages/Video';
import Profile from './components/Profile';
import Catalog from './pages/Catalog';
import Users from './pages/Users';


import Pricing from './pages/Pricing';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />  
    <Route path="/plans" element={<Plans />} />    
    <Route path="/subs" element={<Subs />} />
    <Route path="/video" element={<Video />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/streaming" element={<MoviePreview />} />
    {/* <Route path="/dashboard" element={
          <>
            <Sidebar />
            <Dashboard />
          </>
        } /> */}
    {/* <Route path="/video" element={<Video />} */}
{/* /> */}
<Route path="/catalog" element={<Catalog />}/>
<Route path="/users" element={<Users />}/>
     <Route path="/Pricing" element={<Pricing />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
