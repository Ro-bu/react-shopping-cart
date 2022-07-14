import React from "react";

function ProductCard (props) {

    return (
        <div className="product-card">
            <div className="product-card-img-container">
                <img src={props.img} alt={props.name} />
            </div>
            <h2 className="product-card-title">{props.name}</h2>
            <p className="product-card-price">{props.price + "$"}</p>
            <button type="button" className="main-button product-card-buton">ADD TO CART</button>
        </div>
    )
}

export default ProductCard;