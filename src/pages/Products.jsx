import React from 'react';
import ProductDetail from "../products/products-detail";
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
// import ProductDetailPage from './ProductDetailPage';


const Products = ({product, setProduct, detail}) => {
    //here is hook
    // const [product, setProduct] = useState(ProductDetail)
    const selectProduct = (product) =>{
        const updateProductFunc = ProductDetail.filter((e) => {
            return e.cap ==product
            // console.log(e.cap)
        })
        setProduct(updateProductFunc)
    }
  return (
    <>
    <div className="product-detail-page">
        <div className="container">{
            detail.map((e)=> {
                    // console.log(e)
                    return(
                        <div className="product-container">
                            <div className="img-box">
                                <img src={e.img} alt="" />
                            </div>
                        </div>
                    )
            })
        }
        </div>
    </div>
    <div className='products'>
        <h2># Products</h2>
        <p>Home products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={()=> selectProduct ("Phone")}>Phone</li>
                        <li onClick={()=>  selectProduct ("Tablet")}>Tablet</li>
                        <li onClick={()=>  selectProduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={()=>  selectProduct ("Headphone")}>Headphone</li>
                        <li onClick={()=>  selectProduct ("HD Camera")}>HD Camera</li>
                        <li onClick={()=>  selectProduct ("Powerbank")}>Powerbank</li>
                        <li onClick={()=>  selectProduct ("Gaming")}>Gaming</li>
                        <li onClick={()=>  selectProduct ("Backpacks")}>Backpacks</li>
                        <li onClick={()=>  selectProduct ("Heat Pipes")}>Heat Pipes</li>
                    </ul>
                </div>
            </div>
            <div className="products-box">
                <div className="container-1">
                    {
                        // that is changed from ProductDetail to product
                        product.map((e) => {
                            return(
                                <>
                                <div className="box" key={e.id}>
                <div className='img-box'>
                  <img src={e.img} alt={e.title} />
                  <div className='icon'> 
                  <li><AiOutlineShoppingCart/></li>
                  <li><AiOutlineEye/></li>
                  <li><AiOutlineHeart/></li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{e.cap}</p>
                  <h3>{e.title}</h3>
                  <h4>{e.price}</h4>
                </div>
              </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products