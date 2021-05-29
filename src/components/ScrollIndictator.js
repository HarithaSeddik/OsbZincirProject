import React, {useEffect, useState} from 'react'
import './ScrollIndicator.css';
// import Navbar from './Navbar'

function Scrollindictator() {

    const [scrollTop, setScrollTop] = useState(0)
    
    const onScroll =() => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height)*100;

        setScrollTop(scrolled)
    }

    useEffect( () => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })
    return (
        <>
        {/* <Navbar/> */}
        <div className= "ScrollIndicator" >
        
            <div className="progressMainWrapper">
                <div className="progressMainStyle" style={ {width: `${scrollTop}%`}}>
                </div>
            </div>
            {/* <p >Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test  Test  Test Test Test  Test Test Test Test  Test Test Test  Test Test Test </p> */}
        </div>
        </>
    )
}

export default Scrollindictator
