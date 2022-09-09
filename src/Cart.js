import React from "react";
import { useSelector } from "react-redux";
import CartProductLine from "./components/CartProductLine";
import ProductData from "./components/ProductData";


function Cart() {

    const {total, cartItems} = useSelector((state) => state.cart)

    let cartLines = cartItems.map((item) => {
        let correctData
        ProductData.forEach((product)=> {
            if(product.id === item.id) {
                correctData = {...product}
            }
        })
        return(
            <CartProductLine
                key={item.id}
                qty={item.qty}
                img={correctData.img}
                name={correctData.name}
                price={correctData.price}
                id={item.id}
            />
        )
    })
    return (
        <div className="main-container">
            <div className="cart-container">
                <h2 className="cart-title">YOUR CART</h2>
                {cartLines}
                <div className="cart-subtotal-and-buttons">
                    <p className="cart-subtotal">Total: $ {Math.floor(total*100)/100}</p>
                    <button type="button" className="main-button">CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;