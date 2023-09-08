import React from 'react';
import { Link } from 'react-router-dom';
//? products (8)
import HomeProducts from '../products/home-products';
// *icons
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck, FiDollarSign } from 'react-icons/fi';
import { CiDiscount1 } from 'react-icons/ci';
import { PiHeadphonesLight } from 'react-icons/pi';
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
//? component
import Button from '../components/Button';


const Home = ({detail, view, close, setClose, addtocart}) => {
  // const [homeProduct, setHomeProduct] = useState(HomeProducts)
  return (
    <>
        {
        close ? 
        <div className="product-detail-page">
        <div className="container">
            <Button onClick={()=>setClose(false)} icon={<GrClose />} btn-type='close'/>
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
                                <h4>{e.price}$</h4>
                                <Button btn-type='add-to-cart'>Add To Cart</Button>
                            </div>
                        </div>
                    )})}
        </div>
    </div> : null
    }
    {/* carousel slider ------------------------------------ */}
    <div className='top-banner'>
        <div className="container">
            <div className="detail">
                <h2>The Best Note Book Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
            </div>
            <div className='img-box'>
              <img src="./img/img.png" alt="sliderimg" />
            </div>
        </div>
    </div>
    {/* circle product types ------------------------------- */}
    <div className="product-type">
      <div className="container">
        <div className="box">
          <div className="img-box">
            <img src="./img/mobile-phone.png" alt="mobphone" />
          </div>
          <div className="detail">
            <p>23 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./img/headphones.png" alt="headphone" />
          </div>
          <div className="detail">
            <p>52 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./img/cpu heat.jpg" alt="cpuheat" />
          </div>
          <div className="detail">
            <p>63 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./img/smart watch.png" alt="watch" />
          </div>
          <div className="detail">
            <p>18 products</p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="./img/bluetooth headphone.png" alt="bluetoothheadphone" />
          </div>
          <div className="detail">
            <p>22 products</p>
          </div>
        </div>
      </div>
    </div>
    {/* about part ----------------------------------------- */}
    <div className="about">
      <div className="container">
        <div className="box">
          <div className="icon">
            <FiTruck/>
          </div>
          <div className="detail">
            <h3>Free Delivery</h3>
            <p>Orders from all item</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <FiDollarSign/>
          </div>
          <div className="detail">
            <h3>Return & Refund</h3>
            <p>Money back guarantee</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <CiDiscount1/>
          </div>
          <div className="detail">
            <h3>Member Discount</h3>
            <p>Onevery order over $140.00</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <PiHeadphonesLight/>
          </div>
          <div className="detail">
            <h3>Support 24/7</h3>
            <p>Contact us 24 hours a day</p>
          </div>
        </div>
      </div>
    </div>
    {/* 8 products ----------------------------------------- */}
    <div className="product">
      <h2>Trending Products</h2>
      <div className="container">
        { HomeProducts.map((e) =>{
            return (
              <div className="box" key={e.id}>
                <div className='img-box'>
                  <img src={e.img} alt={e.title} />
                  <div className='icon'> 
                  <li onClick={()=> addtocart(e)}><AiOutlineShoppingCart/></li>
                  <li onClick={()=> view(e)} ><AiOutlineEye/></li>
                  <li><AiOutlineHeart/></li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{e.cap}</p>
                  <h3>{e.title}</h3>
                  <h4>{e.price}$</h4>
                </div>
              </div>
            )})}
      </div>
    </div>
    {/* banner part ---------------------------------------- */}
    <div className="banner">
      <div className="container">
      <div className="detail">
        <h4>TABLET COLLECTION 2023</h4>
        <h3>Samsung Galaxy Tab S6, Wifi Tablet</h3>
        <p>$ 975.00</p>
        <Link to="./product" className='link'>Shop Now</Link>
      </div>
      <div className="img-box">
        <img src="./img/hp banner photo.png" alt="banner-photo" className='comp' />
        <img src="./img/banner-slider-offer.png" alt="banner-offer"  className='offer'/>
      </div> 
      </div>
    </div>
    </>
  )
}

export default Home