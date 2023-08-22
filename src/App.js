import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rout from "./rout";
import ProductDetail from './products/products-detail';
// * components
import Header from "./components/Header";
import Footer from './components/Footer';
// import { useState } from 'react';


const App = () => {
  const [detail, setDetail]= useState([])
  // product filtering hook
  const [product, setProduct] = useState(ProductDetail)
  const btnsearch = (product)=>{
    const change = ProductDetail.filter((e) =>{
      return e.cap == product
    })
    setProduct(change)
  }
  return (
    <>
    <BrowserRouter >
    <Header btnsearch={btnsearch}/>
    <Rout product={product} setProduct={setProduct} detail={detail}/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
