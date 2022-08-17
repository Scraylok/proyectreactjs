import React from "react";
import shopping_cart from "../../Assests/shopping-cart.png";
import "./StylesCart.css";
import { useCartContext } from "../../Context/CartContext";


const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>
        <button className="cart-btn">
            <img src={shopping_cart} alt="Cart Icon" className="cart-widget"/>
            <p className="totalproducts">{totalProducts() || ''}</p>
        </button>
         </>

    )
}


export default CartWidget