import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addProduct, increaseCount } from "../redux/slices/cart";



function ProductCard (props) {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart)

    return (
        <div className="product-card">
            <Link to={"/shop/" + props.id} >
                <div className="product-card-img-container">
                    <img src={props.img} alt={props.name} />
                </div>
            </Link>
            <Link to={"/shop/" + props.id} >
                <h2 className="product-card-title">{props.name}</h2>
            </Link>
            <p className="product-card-price">{props.price + "$"}</p>
            <button onClick={() => {
                if(!cartItems.find((item) => item.id === props.id)){
                    dispatch(addProduct((props.product)))
                } else {
                    dispatch(increaseCount(props.id))
                }
                }} type="button" className="main-button product-card-buton">ADD TO CART</button>
        </div>
    )
}

export default ProductCard;