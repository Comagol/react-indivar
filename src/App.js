import './App.css';
import { useState, createContext } from 'react'
import NavBar from './components/NavBar';
import ItemListCountenier from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCountainer';
import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Form from './components/Form/Form';
import ItemListFire from './components/fromFireBase/ItemListFire';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
      <CartContextProvider>
       <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListCountenier />} />
            <Route path='/category/:categoryId' element={<ItemListCountenier />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/fire' element={<ItemListFire/>}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
