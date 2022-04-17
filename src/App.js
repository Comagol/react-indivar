import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar';
import ItemListCountenier from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCountainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
       <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListCountenier />} />
            <Route path='/category/:categoryId' element={<ItemListCountenier />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
