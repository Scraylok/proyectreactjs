import './StyleItemDetail.css'
import React,{useState} from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ products }) => {
  
  const [goToCart,setGoToCart] = useState(0);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(quantity);
    addProduct({products,quantity});
  };

  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail-image' src={products.img} alt={products.name}/>
            <div className='content'>
                <h1>{products.name}</h1>
                <h2>{products.description}</h2>
                <h3>$ {products.price}</h3>
                <h4>Stock :{products.stock}</h4>
                {
                  goToCart === 0 ? (
                    <ItemCount initial={1} 
                    stock={products.stock} 
                    onAdd={onAdd}/>
                  ):<div className='container_purchase-options'>
                  <Link className='purchase_options' to="/Cart">Finalizar compra</Link>
                <Link className='purchase_options'  to="/">Hacer mas compras</Link>
                </div>
                }
                
            </div>
        </div>
    </div>
    
  )
}
export default ItemDetail