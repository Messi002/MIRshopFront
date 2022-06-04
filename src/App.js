import React from 'react'
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound.jsx'
import Navbar from './f2/Navbar'
import {BrowserRouter as Router,Route,Routes, Navigate,Link} from 'react-router-dom'

function App() {
  const user = false
  return (
  <div>
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/products/:category" exact element={<ProductList/>} />
    <Route path="/product/:id" exact element={<Product/>} />
    <Route path="/cart" exact element={<Cart/>} />
    <Route path="/login" exact element={user ? <Navigate to="/" replace /> : <Login/>} />
    <Route path="/register" exact element={user ? <Navigate to="/" replace /> : <Register/>}/> 
    <Route path="*" exact element={<Navigate to="/" replace />} />

    </Routes>
  </Router>
  
  </div>
  )
}

export default App;
