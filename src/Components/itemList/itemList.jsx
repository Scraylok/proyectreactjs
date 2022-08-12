import React from 'react';
import Item from '../Item/Item';
import './StyleItemList.css'

const ItemList = ({ productsList = [] }) => {
    
        return (
            <div className=''>
                 <h3>Lista de productos</h3>
                 <div className='card-container'>
                     {productsList.map(product => <Item key={product.id} product={product}/>)}
                 </div>
            </div>
        );
    
}

export default ItemList;