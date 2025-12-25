import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Programming from "./components/Programming.js";
import Speakers from "./components/Speakers.js";
import Location from "./components/Location.js";
import Sponsors from "./components/Sponsors.js";
import Footer from "./components/Footer.js";
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Programming />
      <Speakers />
      <Location />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
