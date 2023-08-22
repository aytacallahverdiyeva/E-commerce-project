import React from 'react';
import { Link } from 'react-router-dom';
// * logo svg
import { LogoSVG } from '../SVG/svg';
// ? icons
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoVimeo } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import { HiOutlineLocationMarker} from 'react-icons/hi';


const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="about">
          <div className="logo">
            <Link to='/'><LogoSVG/></Link>
          </div>
          <div className="detail">
            <p>We are a team of designers and developers that create high quality WordPress</p>
            <div className='icon'>
              <li><BiLogoFacebook/></li>
              <li><BiLogoTwitter /></li>
              <li><BiLogoLinkedin /></li>
              <li><BiLogoVimeo /></li>
            </div>
          </div>
        </div>
        <div className="account">
          <h3>My Account</h3>
          <ul>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Wishlist</li>
            <li>My Account</li>
            <li>Order History</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className='information'>
          <h3>Information</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Latest News</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='talktous'>
          <h3>Talk to us</h3>
          <p>Got Questions? Call us</p>
          <li><Link to="tel:+994 055 379 37 88">+994 055 379 37 88</Link></li>
          <li><Link to="mailto:pepperr648@gmail.com"><RiMailSendLine /> pepperr648@gmail.com</Link></li>
          <li><Link to="#"><HiOutlineLocationMarker/>79 Sleepy Hollow St. <br /> Jamaica, New York 1432</Link></li>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer