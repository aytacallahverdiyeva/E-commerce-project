import React from 'react'
import {Link} from 'react-router-dom';
//? icons
import { GrClose } from 'react-icons/gr';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
//? component
import Button from '../components/Button';

const Cart = ({cart, setCart}) => {
    //? increment system
    const increment = (product) =>{
        const result = cart.find((e)=>{
            return e.id === product.id
        })
        setCart(cart.map((e)=>{
            return  e.id === product.id ? {...result, qty: result.qty + 1} : e
        }))
    }
    //? decrement system
    const decrement = (product) =>{
        const result = cart.find((e)=>{
            return e.id === product.id
        })
        setCart(cart.map((e)=>{
            return  e.id === product.id ? {...result, qty: result.qty - 1} : e
        }))
    }
    //? remove system
    const removeProduct = (product) =>{
        const result = cart.find((e)=>{
            return e.id === product.id
        })
        if(result.qty > 0) {
            setCart(cart.filter((e)=>{
                return  e.id !== product.id 
            }))
        }
    }
    //? total price system
    const totalPrice = cart.reduce((price, item) =>  price + item.qty * item.price, 0 )
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
                            <div className="jun-detail">
                            <h4>{e.cap}</h4>
                            <h3>{e.title}</h3>
                            <p>{e.price} $</p>
                            <div className="count">
                                <Button btn-type='increment' onClick={() => increment(e)}>+</Button>
                                <input type="number" name="" id="" value={e.qty} />
                                <Button btn-type='decrement' onClick={() => decrement(e)}>-</Button>
                            </div>
                            <h4 className='sub-price'>Sub total: {e.price * e.qty} $ </h4>
                            </div>
                            <div className="close-btn">
                                <Button onClick={() => removeProduct(e)} icon={<GrClose />} btn-type='close'></Button>
                            </div>
                        </div>
                    </div>
                )})}
        </div>
        {
            cart.length > 0 && 
            <div>
                <h2 className='total-price-products'>Total Price:{totalPrice}$</h2>
            </div>
        }
    </div>
    </>
    )
}

export default Cart