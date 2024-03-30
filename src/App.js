import Navbar from './components/Navbar';
import React from "react";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import Movies from './pages/Movies';
import Plans from './pages/Plans';
import Subs from './pages/Subs';
// import './App.css';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Search from './components/Search';
import Video from './pages/Video';
import UserProfile from './components/UserProfile';
import Catalog from './pages/Catalog';
import Users from './pages/Users';
import Modal from './components/Modal';
import SearchResults from './pages/SearchResults';
import Preview from './pages/MoviePreview';
import Pricing from './pages/Pricing';
import VideoBitrate from './pages/VideoBitrate';
import LanguageMovies from './components/LanguageMovies';
import GenreMovies from './components/GenreMovies';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/movies" element={<Movies />} />   */}
    <Route path="/plans" element={<Plans />} />    
    <Route path="/subs" element={<Subs />} />
    <Route path="/video" element={<Video />}/>
    <Route path="/profile" element={<UserProfile />}/>
    <Route path="/streaming" element={<MoviePreview />} />
    <Route path="/lang/:language" element={<LanguageMovies/>} />
    <Route path="/:genre" element={<GenreMovies/>} />
    <Route path="/search-results/:query" element={<SearchResults />} />
    <Route path="/modal" element={<Modal />} />
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
     
     <Route path="/vidbit" element={<VideoBitrate/>}/>
     <Route path="/movie/:id" element={<Preview />} />

   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
