import './App.css';
// React router dom
import { Routes, Route } from "react-router-dom";

import About from './Routes/About';
import Home from './Routes/Home';
import Navbar from './Components/Nav';
import MobileMenu from './Components/MobileMenu';

function App() {
  return (
    <div className="App">
      <MobileMenu/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}/>
    </Routes>
    </div>
  );
}

export default App;
