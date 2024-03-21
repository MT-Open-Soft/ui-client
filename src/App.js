import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './components/Search';
import Video from './pages/Video';
import Profile from './components/Profile';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/video" element={<Video />}/>
    <Route path="/profile" element={<Profile />}
/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
