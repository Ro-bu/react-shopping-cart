import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { increaseCount, reduceCount, removeProduct } from "../redux/slices/cart";



function CartProductLine(props) {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart)
    const currentItem = cartItems.find((item) => item.id === props.id);
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
                    <div onClick={() => {
                        if(currentItem.count ===1 ){
                            dispatch(removeProduct(props.id))
                        } else {
                            dispatch(reduceCount(props.id))
                        }
                        }}
                        className="cart-qty-triangle">
                        <div className="triangle-left"></div>
                    </div>
                    <div className="cart-product-line-qty-number">{currentItem.count}</div>
                    <div onClick={() => dispatch(increaseCount(props.id))} className="cart-qty-triangle">
                        <div className="triangle-right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductLine;