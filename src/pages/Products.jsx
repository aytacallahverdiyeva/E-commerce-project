import React from 'react';
import ProductDetail from "../products/products-detail";
//? icons
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
//*Auth0
import { useAuth0 } from "@auth0/auth0-react";
// import ProductDetailPage from './ProductDetailPage';


const Products = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    //here is hook
    // const [product, setProduct] = useState(ProductDetail)
    const {loginWithRedirect, isAuthenticated } = useAuth0();

    const selectProduct = (product) =>{
        const updateProductFunc = ProductDetail.filter((e) => {
            return e.cap == product
            // console.log(e.cap)
        })
        setProduct(updateProductFunc)
    }
    return (
    <>
    {
        close ? 

        <div className="product-detail-page">
        <div className="container">
            <button onClick={()=>setClose(false)} className='closebtn'><GrClose /></button>
            {
            detail.map((e)=> {
                    // console.log(e)
                    return(
                        <div className="product-container">
                            <div className="img-box">
                                <img src={e.img} alt={e.title} />
                            </div>
                            <div className="detail">
                                <h5>{e.cap}</h5>
                                <h3>{e.title}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas esse dolorem. Illum facere temporibus tenetur maxime earum incidunt deserunt atque illo, in velit consequatur veritatis cupiditate perspiciatis nisi libero!</p>
                                <h4>{e.price}</h4>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
            }) 
        }
        </div>
    </div> : null
    }

    <div className='products'>
        <h2>Products</h2>
        <p>Home products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={()=>  selectProduct ("Phone")}>Phone</li>
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
                    {/* add for auth0 (use ternary) */}
                    {
                        isAuthenticated ? 
                        <li onClick={()=> addtocart(e)}><AiOutlineShoppingCart/></li>
                        : 
                        <li onClick={()=> loginWithRedirect()}><AiOutlineShoppingCart/></li>
                    }
                    {/* <li onClick={()=> addtocart(e)}><AiOutlineShoppingCart/></li> */}
                    <li onClick={()=> view(e) }><AiOutlineEye/></li>
                    <li><AiOutlineHeart/></li>
                    </div>
                </div>
                <div className='detail'>
                    <p>{e.cap}</p>
                    <h3>{e.title}</h3>
                    <h4>{e.price}$</h4>
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