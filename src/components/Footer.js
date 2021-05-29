import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer_header_wrapper'>
                <h1 className='footer_header_text'>
                    Join OSBZincir's weekly newsletter to receive our best deals
                </h1>
            </div>
            <div className='footer_paragraph_wrapper'>
                <p className='footer_paragraph_text'>
                    You can unsubscribe at any time
                </p>
            </div>
            <div className='footer_form_wrapper'>
                <form className='footer_form'>

                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="footer-input"
                    />
                    
                    <Button buttonStyle='btn--outline'> Subscribe</Button>
                </form>
            </div>
            <div className='footer_links_wrapper'>
                <div className='column-1'>
                <h2> About Us</h2>
                <Link to='/' className='footer-links'> How it Works</Link>            
                <Link to='/' className='footer-links'> Careers</Link>
                <Link to='/' className='footer-links'> Terms of Service</Link>
                </div>
                <div className='column-2'>
                <h2> Contact Us</h2>
                <Link to='/' className='footer-links'> Contact</Link>
                <Link to='/' className='footer-links'> Customer Support </Link>
                <Link to='/' className='footer-links'> Sponsorships</Link>                
                </div>
                <div className='column-3'>
                <h2> Our Policies </h2>
                <Link to='/' className='footer-links'> Privacy Policy </Link>
                <Link to='/' className='footer-links'> Cookie Policy </Link>
                </div>

            </div>
            <div className='footer_social-media_wrapper'>

                <div className='footer_logo'>
                <Link to="/" className="footer-logo-link" >
                OSBZ|ncir
                    {/* S | TECH                      */}
                 <i className="fab fa-typo3"> </i>  
                </Link>
                </div>

                <div className='footer_rights'>
                    <small> OSBZincir © 2021 </small>
                </div>

                <div className='social_media_icons'>
                <Link
                    className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label="instagram"
                >
                <i className="fab fa-instagram"></i>
                </Link>
                <Link
                    className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="Facebook"
                >
                <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="Twitter"
                >
                <i className="fab fa-twitter"></i>
                </Link>
                <Link
                    className="social-icon-link linkedin"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                <i className="fab fa-linkedin"></i>
                </Link>
                </div>

            </div>
        </div>
    )
}

export default Footer
