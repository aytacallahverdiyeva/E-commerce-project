import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// *icons
import { FaTruckMoving } from 'react-icons/fa';
import { CiLogin, CiLogout } from 'react-icons/ci';
import {AiOutlineHeart,AiOutlineUser} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
// *logo
import {LogoSVG} from '../SVG/svg';
// *auth0
import { useAuth0 } from "@auth0/auth0-react";
//* component
import Button from '../components/Button';


const Header = ({btnsearch}) => {
    const [search, setSearch] = useState()
    // const btnsearch = (product)=>{}
    // that's for login & logout system
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
    <>
    <header>
    <div className='free'>
        <div className='icon'><FaTruckMoving/></div>
        <p>FREE Shipping when shoppping upto $570</p>
    </div>
    <div className='main-header'>
        <div className="container">
            <div className="logo">
                <Link href='#'><LogoSVG/></Link>
            </div>
            <div className='search-box'>
                <input type="text" name="" value={search} onChange={(e)=> setSearch(e.target.value)} id="" placeholder='Search for Products...' autoComplete='off'/>
                <Button onClick={()=> btnsearch(search)} btn-type='search'>Search</Button>
            </div>
            <div className="icon">
                {
                    isAuthenticated && (
                    <div className='account'>
                    <div className="user-icon">
                    <AiOutlineUser/>
                    </div>
                    <p>Hello, {user.name}</p>
                    </div>
                    )}
                    <div className="second-icon">
                        <Link to="/" className='link'><AiOutlineHeart/></Link>
                        <Link to="/cart" className='link'><BsBagCheck/></Link>
                    </div>
                </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className="nav">
            <ul>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/product' className='link'>Products</Link></li>
                <li><Link to='/about' className='link'>About</Link></li>
                <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
            </div>
            <div className="auth">
                {
                    isAuthenticated ? 
                    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} btn-type='login-logout'><CiLogout /></Button>
                    :
                    <Button onClick={ () => loginWithRedirect()} btn-type='login-logout'><CiLogin /></Button>
                }
            </div>
        </div>
    </div>
    </header>
    </>
    )}

export default Header