import React from "react";
import {Link} from "react-router-dom";
import bag from "../img/cart-outline.png";
import {useSelector, useDispatch} from "react-redux";
import { calculateTotals } from "../redux/slices/cart";


function Nav() {
    const dispatch = useDispatch()
    const {count, cartItems} = useSelector((state) => state.cart)
    React.useEffect(() => {
        dispatch(calculateTotals())
    }, [cartItems, dispatch])

    return (
        <nav>
            <Link to="/"><h1 className="logo">NOTFAKE</h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="nav-cart"><Link to="/cart" ><img className="cart-icon" src={bag} alt="shopping cart"></img><div className="cart-item-count">{count}</div></Link></li>
            </ul>
        </nav>
    )
};

export default Nav