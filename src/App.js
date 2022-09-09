import React from "react";
import hero from "./img/hero.jpg";
import {Link} from "react-router-dom";
import ProductData from "./components/ProductData";
import ProductCard from "./components/ProductCard";

function App() {

  let products = ProductData.map((product) => {
    return (
        <ProductCard
          key={product.id}
          id={product.id}
          price={product.price}
          img={product.img}
          name={product.name}
          product={product}
        />
    )
  })
  let featuredProducts = products.slice(0,4);
  return (
    <div className="main-container">
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
              {featuredProducts}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
