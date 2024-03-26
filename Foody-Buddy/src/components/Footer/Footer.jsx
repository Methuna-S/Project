import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Enrich your life with tasty food</p>
            <div className="social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
             <h2>Contact</h2>
             <ul>
                <li>+1-212-432-5678</li>
                <li>tomato@gmail.com</li>
             </ul>
        </div>
       </div>
       <hr/>
       <p className='footer-copyryt'>Copyright 2024@ Tomato.com</p>
    </div>
  )
}

export default Footer