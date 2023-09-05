import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rout from "./rout";
import ProductDetail from './products/products-detail';
// * components
import Header from "./components/Header";
import Footer from './components/Footer';
// import { useState } from 'react';


const App = () => {
  // add to cart system
  const [cart, setCart] = useState([])
  //product detail close system
  const [close, setClose] = useState(false)

  const [detail, setDetail]= useState([])
  // product filtering hook
  const [product, setProduct] = useState(ProductDetail)
  const btnsearch = (product)=>{
    const change = ProductDetail.filter((e) =>{
      return e.cap == product
    })
    setProduct(change)
  }
  // Product Detail
  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)
  }
  // Add to cart system
  const addtocart = (product) => { 
    const result = cart.find((e) => {
      return e.id === product.id
    })
    if(result){
      alert("This Product is already added to cart")
    } 
    else{
      setCart([...cart, {...product, count:1}])
      alert("Product is added to cart")
    }
}
console.log(cart)
  return (
    <>
    <BrowserRouter >
    <Header btnsearch={btnsearch}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
