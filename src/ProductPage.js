import React from "react";
import {useParams} from "react-router-dom";
import ProductData from "./components/ProductData";

function ProductPage(props) {
    const {productId} = useParams();
    const productDetails = ProductData.find((product) => product.id === productId);
    return (
        <div className="main-container">
            <div className="product-page">
                <div className="product-page-card">
                    <div className="product-page-image-container">
                        <img className="product-page-image" src={productDetails.img} alt={productDetails.name} />
                    </div>
                    <div className="product-page-text-container">
                        <h2 className="product-page-title">{productDetails.name}</h2>
                        <p className="product-page-price">{productDetails.price + "$"}</p>
                        <div className="product-page-button-container">
                            <button onClick={() => props.addToCart(productDetails.id)} type="button" className="main-button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;