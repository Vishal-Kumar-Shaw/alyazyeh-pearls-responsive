// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/commons/Navbar/Navbar";
import Corousal from './components/commons/Corousal/Corousal'
import Footer from "./components/commons/Footer/Footer";
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/services/Services';
import Jewellary from './components/Jewellary/Jewellary';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Enquire from './components/commons/Enquire/Enquire';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Corousal/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/jewellery" element={<Jewellary/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
      <Enquire/>
      <Footer/>
    </div>
  );
}

export default App;
