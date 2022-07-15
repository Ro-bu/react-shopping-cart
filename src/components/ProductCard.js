import React from "react";
import {Link} from "react-router-dom";

function ProductCard (props) {

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
            <button onClick={() => props.addToCart(props.id)} type="button" className="main-button product-card-buton">ADD TO CART</button>
        </div>
    )
}

export default ProductCard;