import React from "react";
import "./Cart.css"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
    const { products, clearCart, totalPrice, removeProduct } = useCartContext();
    const navegar = useNavigate()

    if (products.length === 0 ){
      return (

      <div className="cart_empty">
          <h2>No hay elementos en el carrito, haz click <Link to={"/"}>AQUI</Link> para ir a comprar</h2>
          
        </div>
      )
    }
    return (
        <>
        {
            
          <div>
            <h1 className="cart_tittle">Tu Carrito</h1>
            <div>
                {products.map((prod) => (
                    <div className="cart_div" key={prod.id}>
                        <img className="imgCart" src={prod.img} alt="Carrito" />
                        <h3>Producto: {prod.name}</h3>
                        <h3>${prod.price}</h3>
                        <h4>Cantidad: {prod.quantity}</h4>
                        <button className='btn_remove' onClick={() => removeProduct(prod.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="total">
                <h2 className="carritoh2">Total: ${totalPrice()}</h2>
                <button  className="btn_cart" onClick={()=> navegar('/checkout')}>Finalizar Compra</button>
                <button className="btn_catemp" onClick={clearCart}>Vaciar Carrito</button>
            </div>
            
        </div>
        }
        </>
       
    );
};

export default Cart;

