import Navbar from './components/Navbar';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/abc" element={<Home />} />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
