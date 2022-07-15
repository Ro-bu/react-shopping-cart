import React from "react";
import {Link} from "react-router-dom";
import bag from "../img/cart-outline.png";

function Nav(props) {

    return (
        <nav>
            <Link to="/"><h1 className="logo">NOTFAKE</h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="nav-cart"><Link to="/cart" ><img className="cart-icon" src={bag} alt="shopping cart"></img><div className="cart-item-count">{props.cart}</div></Link></li>
            </ul>
        </nav>
    )
};

export default Nav