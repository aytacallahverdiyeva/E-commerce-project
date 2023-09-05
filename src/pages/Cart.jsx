import React from 'react'
import {Link} from 'react-router-dom';
//? icons
import { GrClose } from 'react-icons/gr';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';

const Cart = ({cart, setCart}) => {
  return (
    <>
    <div className="containerrr"> 
    {
        cart.length === 0 && 
        <div className="empty-box">
            <h2 className='empty-version'>Cart is empty, please add product.</h2>
            <div className="empty-junior-box">
            <Link to='/product' className='empty-shop-icon'><MdOutlineShoppingCartCheckout/></Link>
            <Link to='/product' className='empty-btn'>Shop Now</Link>
            </div>
        </div>
    }

        <div className="min-container">{
            // {cart.length === 0 && }
            cart.map((e) =>{
                return(
                    <div className="cart" key={e.id}>
                        <div className="img-box">
                            <img src={e.img} alt={e.title} />
                        </div>
                        <div className="detail">
                            <h4>{e.cap}</h4>
                            <h3>{e.title}</h3>
                            <p>{e.price}</p>
                            <div className="count">
                                <button className='increment'>+</button>
                                <h3>Total Price: {e.price * e.count} $</h3>
                            </div>
                            <button><GrClose/></button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    </>
    )
}

export default Cart