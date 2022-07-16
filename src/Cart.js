import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartProductLine from "./components/CartProductLine";
import ProductData from "./components/ProductData";

function Cart(props) {

    let cartLines = props.shoppingCart.map((item) => {
        let correctData
        ProductData.forEach((product)=> {
            if(product.id === item.id) {
                correctData = {...product}
            }
        })
        console.log(correctData);
        return(
            <CartProductLine
                qty={item.qty}
                img={correctData.img}
                name={correctData.name}
                price={correctData.price}
            />
        )
    })

    return (
        <div className="main-container">
            <Nav cartCount={props.cartCount} />
            <div className="cart-container">
                {cartLines}
            </div>
            <Footer />
        </div>
    )
}

export default Cart;