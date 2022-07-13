import React from "react";
import Nav from "./components/Nav";
import hero from "./img/hero.jpg";
import {Link} from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="main-container">
      <Nav />
      <div className="hero-container">
        <img className="hero-img" src={hero} alt="flower bouquet"></img>
        <div className="hero-title-container">
          <h2 className="hero-title">NOTHING SAYS<span className="break">"I LOVE YOU"</span>LIKE A BOUQUET</h2>
        </div>
        <div className="hero-button-container">
          <Link to="/"><button type="button" className="main-button">SHOP NOW</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
