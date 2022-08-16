import React from "react";
import CircleLoader from "react-spinners/CircleLoader"
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylesItemList.css'
import { useState, useEffect } from "react";
import ItemList from '../itemList/itemList';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = ({greeting}) => {
    
    const [productsList, setProductsList] =useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();
   

    useEffect(() => {
        
        const q = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products');
        
    getDocs(q)
        .then(result => {
            const list = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProductsList(list);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [categoryId]);
    
   
    return (
        <>
        <div>
            <span className= "greeting">{greeting}</span>
            <div className=""> {loading ? <CircleLoader color="hsla(23, 100%, 50%, 1)"  loading size={30} />
            : <ItemList productsList={productsList}/>} </div>
        </div>
        
        </>
    )
}

export default ItemListContainer    