import React, {useState, useContext} from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)
 
const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (Item, quantity) => {
      localStorage.setItem('prods', JSON.stringify(products));
        if (isInCart(Item.id)){
          setProducts(products.map(product => {
            return product.id === Item.id ? {...product, quantity: product.quantity + quantity} : product
          }));
        }else{
          setProducts([...products, {...Item, quantity}]);
        }
    }
    const totalPrice = () => {
      return products.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => products.reduce((accumulator,currentProduct) => accumulator + currentProduct.quantity, 0);

    const clearCart = () => setProducts([])

    const isInCart = (id) => {return products.find(product => product.id === id) ? true : false;}

    const removeProduct = (id) => setProducts(products.filter(product => product.id !== id))

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        products

    }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider
