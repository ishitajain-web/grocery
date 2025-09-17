import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Products from './pages/Products'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/products' element={<Products />} ></Route>
          <Route path='/product/:id' element={<ProductDetail />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
        </Routes>
      </div>
    </div >
  )
}

export default App