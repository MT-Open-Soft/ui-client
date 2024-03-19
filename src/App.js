import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Search/>
      <Routes>
          <Route path="/abc" element={<Home />} />
   
      </Routes>
      <Footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"></Footer>
   </BrowserRouter>
  );
}

export default App;
