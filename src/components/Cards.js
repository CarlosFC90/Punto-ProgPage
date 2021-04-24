import React from 'react'
import CardItem from './CardItem'
import './styles/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check our Works</h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/web-development.jpg"
                            text="Explore our Web projects"
                            label="Web"
                            path="/services"
                        />
                        <CardItem 
                            src="images/mobile-development.png"
                            text="Explore our Mobile projects"
                            label="Mobile"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
