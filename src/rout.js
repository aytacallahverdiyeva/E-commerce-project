import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
// import ProductDetailPage from './pages/ProductDetailPage';

const Rout = ({product, setProduct, detail}) => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Products product={product} setProduct={setProduct} detail={detail}/>}/>
      {/* <Route path='/product' element={<ProductDetailPage detail={detail}/>}/> */}
    </Routes>
    </>
  )
}

export default Rout
