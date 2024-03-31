import Navbar from "./components/Navbar";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Plans from './pages/Plans';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Search from './components/Search';
import Video from './pages/Video';
import UserProfile from './components/UserProfile';
import Catalog from './pages/Catalog';
import Users from './pages/Users';
import Modal from './components/Modal';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SearchResults from './pages/SearchResults';
import Preview from './pages/MoviePreview';
import LanguageMovies from './components/LanguageMovies';
import GenreMovies from './components/GenreMovies';
import Player from './pages/Player';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/DashBoard.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/streaming" element={<MoviePreview />} />
        <Route path="/lang/:language" element={<LanguageMovies />} />
        <Route path="/:genre" element={<GenreMovies />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search-results/:query" element={<SearchResults />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Dashboard/>
            {/* Placeholder for child routes */}
          </div>
        }/>
        <Route path="/catalog" element={
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <Catalog/>
            {/* Placeholder for child routes */}
          </div>
        }/>

      <Route path="/users" element={
        
          <div className="flex h-screen">
            <div className="flex-none w-64 h-full bg-gray-800"> {/* Adjust width (w-64) and background color (bg-gray-800) as needed */}
              <Sidebar />
            </div>
            <div className="flex-grow bg-gray-100"> {/* Adjust background color (bg-gray-100) as needed */}
              <Users />
            </div>
          </div>
        } />
      
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/player' element={<Player />} />
        <Route path="/movie/:id" element={<Preview />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

