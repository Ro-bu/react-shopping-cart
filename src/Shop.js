import React from "react";
import ProductData from "./components/ProductData";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function Shop(props) {
    let products = ProductData.map((product) => {
        return (
            <ProductCard addToCart={props.addToCart} key={product.name} id={product.id} price={product.price} img={product.img} name={product.name} />
        )
    });

    return(
        <div className="main-container">
                <div className="shop-container">
                    {products}
                </div>
        </div>
    )
};

export default Shop;