import Navbar from './components/Navbar';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Sidebar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Search from './components/Search';
import Video from './pages/Video';



function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/streaming" element={<MoviePreview />} />
    {/* <Route path="/dashboard" element={
          <>
            <Sidebar />
            <Dashboard />
          </>
        } /> */}
    {/* <Route path="/video" element={<Video />} */}
/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
