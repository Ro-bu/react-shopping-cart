import React from "react";
import ProductData from "./components/ProductData";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function Shop() {
    let products = ProductData.map((product) => {
        return (
            <ProductCard key={product.name} id={product.id} price={product.price} img={product.img} name={product.name} />
        )
    })

    return(
        <div className="main-container">
            <Nav />
                <div className="shop-container">
                    {products}
                </div>
            <Footer />
        </div>
    )
}

export default Shop;