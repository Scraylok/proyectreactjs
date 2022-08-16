import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Landing from './Components/Landing/Landing';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailcontainer from './Components/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CartProvider from './Context/CartContext';

export const Cartcontext = React.createContext('');

function App() {
  return (
  
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <div>
            <div className="App"><Landing Greeting="Bienvenido a" /></div><ItemListContainer />  
            </div>
            }/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/detail/:id' element={<ItemDetailcontainer/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
