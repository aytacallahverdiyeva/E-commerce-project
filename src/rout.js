import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
// import ProductDetailPage from './pages/ProductDetailPage';
const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
      <Route path='/product' element={<Products product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
      {/* <Route path='/product' element={<ProductDetailPage detail={detail}/>}/> */}
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
    </Routes>
    </>
  )
}

export default Rout
