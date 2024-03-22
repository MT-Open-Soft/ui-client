import Navbar from './components/Navbar';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Search from './components/Search';
import Video from './pages/Video';
import Catalog from './pages/Catalog';



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
{/* /> */}
<Route path="/catalog" element={<Catalog />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
