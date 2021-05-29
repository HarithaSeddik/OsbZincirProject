import React from 'react'
import './HeroSection.css'
import welder from './videos/welder.gif';
import {Button} from './Button'
function HeroSection() {
    return (
        <div className='heroContainer'>
            <h1> 
            OSBZ|ncir
                {/* S| TECH                      */}
                 <i className="fab fa-typo3"> </i>   </h1>
            <p> COMING SOON </p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    SUBSCRIBE
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
