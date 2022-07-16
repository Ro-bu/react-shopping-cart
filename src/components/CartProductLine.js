import React from "react";
import {Link} from "react-router-dom";

function CartProductLine(props) {

    return (
        <div className="cart-product-line">
            <div className="cart-product-line-img-container">
                <Link to={"/shop/" + props.id}><img className="cart-product-line-img" src={props.img} alt={props.name} /></Link>
            </div>
            <div className="cart-product-line-text-and-qty">
                <div className="cart-product-line-text-container">
                    <Link to={"/shop/" + props.id}>
                        <h2 className="cart-product-line-title">{props.name}</h2>
                    </Link>
                    <p className="cart-product-line-price">{props.price + "$"}</p>
                </div>
                <div className="cart-product-line-qty">
                    <div className="cart-qty-triangle">
                        <div className="triangle-left"></div>
                    </div>
                    <div className="cart-product-line-qty-number">{props.qty}</div>
                    <div className="cart-qty-triangle">
                        <div className="triangle-right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductLine;