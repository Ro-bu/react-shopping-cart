import React from "react";
import {Link} from "react-router-dom";

function CartProductLine(props) {

    return (
        <div className="cart-product-line">
            <img className="cart-product-line-img" src={props.img} alt={props.name} />
            <div className="cart-product-line-text-container">
                <h2 className="cart-product-line-title">{props.name}</h2>
                <p className="cart-product-line-price">{props.price + "$"}</p>
            </div>
            <div className="cart-product-line-qty">
                <div className="cart-qty-triangle">
                    <div className="triangle-left"></div>
                </div>
                <input type="number" name="qty" id="qty" value={props.qty}></input>
                <div className="cart-qty-triangle">
                    <div className="triangle-right"></div>
                </div>

            </div>
        </div>
    )
}

export default CartProductLine;