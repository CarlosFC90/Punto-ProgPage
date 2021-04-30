import React from 'react';
import './styles/CardCarousel.css'

function CardCarousel({title, srcImage, url}) {
    return (
        <div>
            <>
                <li className='cards_carousel_item'>
                    <div className='cards_carousel_item_link'>
                        <figure className='cards_carousel_item_pic-wrap'>
                            <img src={srcImage} alt='Work Img' className='cards_carousel_item_img'/>                        
                        </figure>
                        <div className='cards_carousel_item_info'>
                            <a href={url} target='_blank' style={{textDecoration: 'none'}}><h5 className='cards_carousel_item_text'>{title}</h5></a>
                        </div>
                    </div>
                </li>  
            </>
        </div>
    )
}

export default CardCarousel
