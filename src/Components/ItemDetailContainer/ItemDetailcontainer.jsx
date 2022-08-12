
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import  ItemDetail  from '../ItemDetail/ItemDetail'
import { db } from '../../firebase/firebase';
import {doc, collection, getDoc} from "firebase/firestore"




export const ItemDetailcontainer = () => {
    const [products,setProducts] = useState({});
    const [loading, setLoading]=useState(true);
    const {id} = useParams();

    useEffect(() => {
      const productsCollection = collection(db, 'products');
      const refDoc = doc(productsCollection, id)
      getDoc(refDoc).then(result => {
          setProducts({
              id: result.id,
              ...result.data(),
          })
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <ItemDetail products={products}/>
  );
}
export default ItemDetailcontainer