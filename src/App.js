import Navbar from './components/Navbar';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/streaming" element={<MovieDetail />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
