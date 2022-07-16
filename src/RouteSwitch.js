import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import Shop from "./Shop";
import ProductPage from "./ProductPage";
import Cart from "./Cart";

function RouteSwitch() {
    const [shoppingCart, setShoppingCart] = React.useState([]);
    const [cartCount, setCartCount] = React.useState(0)

    function updateCartCount() {
        let newCount = 0;
        shoppingCart.forEach((obj) => {
            newCount += obj.qty
        })
        setCartCount(newCount);
    }
    React.useEffect(() => {
        updateCartCount();
    }, [shoppingCart])

    function addToCart(productId) {
        let isInCart = shoppingCart.some((product) => {
            return product.id === productId;
        })
        if(isInCart) {
            setShoppingCart((prev) => {
                let newCart = []
                prev.forEach((obj) => {
                    if(obj.id === productId) {
                        newCart.push({qty: obj.qty+1, id: obj.id})
                    } else {
                        newCart.push(obj)
                    }
                })
                return([...newCart])
            })
        } else {
            setShoppingCart((prev) => {
                return (
                    [{qty: 1, id: productId},
                        ...prev
                    ]
                )
            })
        }
    }
    function removeFromCart(productId) {
        let isInCart = shoppingCart.some((product) => {
            return product.id === productId;
        })
        if(isInCart) {
            setShoppingCart((prev) => {
                let newCart = [];
                prev.forEach((obj) => {
                    if(obj.id === productId) {
                        if(obj.qty-1 > 0){
                            newCart.push({qty: obj.qty-1, id: obj.id});
                        }
                    } else {
                        newCart.push(obj);
                    }
                })
                return ([...newCart])
            })
        }
    }
    

    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<App addToCart={addToCart} cartCount={cartCount} />} />
                <Route path="/contact" element={<Contact cartCount={cartCount} />} />
                <Route path="/shop" element={<Shop cartCount={cartCount} addToCart={addToCart} />} />
                <Route path="/shop/:productId" element={<ProductPage cartCount={cartCount} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart addToCart={addToCart} removeFromCart={removeFromCart} shoppingCart={shoppingCart} cartCount={cartCount} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;