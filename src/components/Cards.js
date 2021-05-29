import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import communication_cartoon from './images/communication_cartoon.png'
import warehouse_forklift from './images/warehouse_forklift.png'
import digital_tablet from './images/digital_tablet.png'
import robot_arm_earth from './images/robot_arm_earth.png'
import industrial_woman from './images/industrial_woman.png'

function Cards() {
    return (
        <div className='cards'>
            <h1> 
            OSBZincir Offers Many Services
                {/* STECH Offers Many Services! */}
                </h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={robot_arm_earth}
                        text='Revolutionizing R&D, one step at a time  '
                        label='Revolutionary'
                        path='/services'/>
                        <CardItem
                        src={communication_cartoon}
                        text='Connect with Manufacturers, only a few clicks away'
                        label='Communication'
                        path='/services'/>
                    </ul>
                    <ul className= 'cards__items'>

                    <CardItem
                        src={industrial_woman}
                        text='View Ratings Based on Real Customer Reviews'
                        label='Rating System'
                        path='/services'/>
                    <CardItem
                        src={digital_tablet}
                        text='With the Help of the Internet, you can Learn all about your Product before Ordering'
                        label='Research'
                        path='/services'/>
                    <CardItem
                        src={warehouse_forklift}
                        text='Track your Orders and Always Deliver your Projects on Time'
                        label='Schedueling'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
