import React from 'react'
import HeroSection from '../HeroSection'
import './Home.css'
import Cards from '../Cards'
import Footer from '../Footer'
function Home() {
    return (
        <div className='homeContainer'>
           <HeroSection/> 
           <Cards/>
           <Footer/>
        </div>
                 
    )
}

export default Home
