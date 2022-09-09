import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {useSelector, useDispatch} from "react-redux";
import {calculateTotals} from "./redux/slices/cart";

function RouteSwitch() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)

    React.useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems])


    // vaja eemaldada allolevad functionid ja lisada nad componentitesse
    

    return(
        <BrowserRouter basename="/react-shopping-cart">
            <Routes>
                <Nav />
                <Route path="/" element={<App addToCart={addToCart} />} />
                <Route path="/contact" element={<Contact  />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                <Route path="/shop/:productId" element={<ProductPage  addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart addToCart={addToCart} removeFromCart={removeFromCart} shoppingCart={shoppingCart}  />} />
                <Footer />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;