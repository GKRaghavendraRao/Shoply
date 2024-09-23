import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instaIcon from '../assets/instagram_icon.png'
import pintIcon from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>SHOPLY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-conatiner">
                <img src={instaIcon} alt=''/>
            </div>
            <div className="footer-icons-conatiner">
                <img src={pintIcon} alt=''/>
            </div>
            <div className="footer-icons-conatiner">
                <img src={whatsapp} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
                <p>Copyright @2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer