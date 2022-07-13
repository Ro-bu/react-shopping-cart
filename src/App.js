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
        <div className="hero-title-img">
          <div className="hero-title-container">
            <h2 className="hero-title">NOTHING SAYS<span className="break">"I LOVE YOU"</span>LIKE A BOUQUET</h2>
          </div>
          <img className="hero-img" src={hero} alt="flower bouquet"></img>
        </div>
        <div className="hero-button-container">
          <Link to="/"><button type="button" className="main-button">SHOP NOW</button></Link>
        </div>
        <div className="lander-featured-products">
          <h2 className="featured-products-title">FEATURED PRODUCTS</h2>
          <div className="featured-products-container">
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
