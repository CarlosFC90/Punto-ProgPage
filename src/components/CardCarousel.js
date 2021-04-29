import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardCarousel.css'

function CardCarousel(props) {
    return (
        <div>
            <>
                <li className='cards_carousel_item'>
                    <Link className='cards_carousel_item_link' target='_blank'>
                        <figure className='cards_carousel_item_pic-wrap'>
                            <img src={props.src} alt='Work Img' className='cards_carousel_item_img'/>                        
                        </figure>
                        <div className='cards_carousel_item_info'>
                            <h5 className='cards_carousel_item_text'>{props.text}</h5>
                        </div>
                    </Link>
                </li>  
            </>
        </div>
    )
}

export default CardCarousel
