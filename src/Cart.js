import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartProductLine from "./components/CartProductLine";
import ProductData from "./components/ProductData";

function Cart(props) {

    let subtotal = 0;

    let cartLines = props.shoppingCart.map((item) => {
        let correctData
        ProductData.forEach((product)=> {
            if(product.id === item.id) {
                correctData = {...product}
            }
        })
        subtotal = subtotal + item.qty * correctData.price;
        return(
            <CartProductLine
                qty={item.qty}
                img={correctData.img}
                name={correctData.name}
                price={correctData.price}
                id={item.id}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
            />
        )
    })

    return (
        <div className="main-container">
            <Nav cartCount={props.cartCount} />
            <div className="cart-container">
                <h2 className="cart-title">YOUR CART</h2>
                {cartLines}
                <div className="cart-subtotal-and-buttons">
                    <p className="cart-subtotal">{"Total: $" + subtotal}</p>
                    <button type="button" className="main-button">CHECKOUT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;