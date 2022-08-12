import React  from 'react';
import './StyleItem.css'
import { Link } from 'react-router-dom';
import {  useCartContext } from '../../Context/CartContext';



const Item = ({ product }) =>  {
    
    const {products} = useCartContext();
    
    const isInCart = products.some((prod)=> prod.id === product.id)    
        
    const { name, price, img, description, category} = product
   
        return (
            <section className='StyleCard'>

                <img className='thumbnail' src={img} alt={name} />

                <div className='StyleCard-body'>
                    <h1 className='StyleCard-tittle'>{name}</h1>
                    <p className='StyleCard-cat'>{category}</p>
                    <p className='StyleCard-text'>{description}</p><div>
                    <h3><span>${price}</span></h3>
                        <Link to={`/detail/${product.id}`} className='StyleCard-btn'>Ver detalle</Link>
                    </div>
                </div>
                {isInCart && <h2>Ya esta en el Carrito</h2>}
            </section>
        );
   
}

export default Item;
