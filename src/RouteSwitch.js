import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function RouteSwitch() {

    return(
        <BrowserRouter basename="/react-shopping-cart">
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<Contact  />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:productId" element={<ProductPage  />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;