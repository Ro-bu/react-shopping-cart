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
    })

    return(
        <div className="main-container">
            <Nav cartCount={props.cartCount} />
                <div className="shop-container">
                    {products}
                </div>
            <Footer />
        </div>
    )
}

export default Shop;