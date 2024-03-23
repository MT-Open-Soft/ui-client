import Navbar from './components/Navbar';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import MoviePreview from './pages/MoviePreview';
import Search from './components/Search';
import Video from './pages/Video';
import Profile from './components/Profile';
import Catalog from './pages/Catalog';
import Users from './pages/Users';



function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
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
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
