import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {FaBeer} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { Button } from './Button'
import './Navbar.css'
// imeport {Button} from './Button'
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton]= useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 900) {
          console.log("This is active");
          setButton(false);
        } else {
          console.log("That is active");
          setButton(true);
        }
        console.log(button);
      };

    useEffect( () => {
        showButton()
    },[])
    window.addEventListener('resize',showButton)
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">

                <div className ='logoDiv'>

                <Link to="/" className="navbar-logo" >
                    OSBZ|ncir
                    {/* S | TECH                      */}
                 <i className="fab fa-typo3"> </i>  
                </Link>
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    
                    <i className={click?  'fas fa-times': 'fas fa-bars'}/>
                    
                </div>
                

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {click? console.log("nav-menu active" ): console.log("nav-menu") }
                    {/* <div className='navItemContainer'> */}

                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className = 'nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/services' className = 'nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                        <div className='nav-item-link-wrapper'>
                                
                                </div>
                            <Link to='/about-us' className = 'nav-links'>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/sign-up' className = 'nav-links-mobile'>
                                Sign Up
                            </Link>
                            <div className='signUp-button-wrapper'>
                            {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
                            </div>
                        </li>
                    {/* </div> */}
                </ul>

            </div>

            
        </nav>
        </>
    )
}

export default Navbar
