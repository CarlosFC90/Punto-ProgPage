import React from 'react';
import '../styles/Services.css';
import CardCarousel from '../CardCarousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imageZero3D from '../../images/zero3d.jpg';
import imageWeb1 from '../../images/web-development.jpg';
import imageWeb2 from '../../images/web-development.jpg';
import imageWeb3 from '../../images/web-development.jpg';

import imageTelomando from '../../images/telomando.png';
import imageMobile1 from '../../images/mobile-development.png';
import imageMobile2 from '../../images/mobile-development.png';
import imageMobile3 from '../../images/mobile-development.png';

const cardsWeb = [
    {
        id: 1,
        title: 'Zero3D',
        image: imageZero3D,
        url: 'https://zero3d.com.ar'
    },
    {
        id: 2,
        title: 'Proyecto 1',
        image: imageWeb1,
        url: 'https://google.com.ar'
    },
    {
        id: 3,
        title: 'Proyecto 2',
        image: imageWeb2,
        url: 'https://facebook.com.ar'
    },
    {
        id: 4,
        title: 'Proyecto 3',
        image: imageWeb3,
        url: 'https://instagram.com.ar'
    }
];

const cardsMobile = [
    {
        id: 1,
        title: 'Telomando Olavarría',
        image: imageTelomando,
        url: 'https://google.com.ar'
    },
    {
        id: 2,
        title: 'Proyecto 1',
        image: imageMobile1,
        url: 'https://google.com.ar'
    },
    {
        id: 3,
        title: 'Proyecto 2',
        image: imageMobile2,
        url: 'https://facebook.com.ar'
    },
    {
        id: 4,
        title: 'Proyecto 3',
        image: imageMobile3,
        url: 'https://instagram.com.ar'
    }
];

const Services = () => {

    let settingsWeb = {
        dots: true,
        infinite: true,
        scroll: true,
        //speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 424,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
                breakpoint: 310,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    }

    let settingsMobile = {
        dots: true,
        infinite: true,
        scroll: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 424,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

    return (
        <div className='container-services'>
            <div className='banner-container-services'>
                <img src="images/coding-photo.jpg" className="banner-img-services" alt="Banner-Img"/>
                <h1><i>Services</i></h1>
            </div>
            <div className='web-works'>
                <h1><u><i>Web</i></u></h1>
                <div className='container'>
                    <Slider {...settingsWeb}>
                        {
                            cardsWeb.map((card) => (
                                <div className='item' key={card.id}>
                                    <CardCarousel
                                        srcImage={card.image}
                                        title={card.title}
                                        url={card.url}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div className='mobile-works'>
                <h1><u><i>Mobile</i></u></h1>
                <div className='container'>
                <Slider {...settingsMobile}>
                        {
                            cardsMobile.map((cardMobile) => (
                                <div className='item' key={cardMobile.id}>
                                    <CardCarousel
                                        srcImage={cardMobile.image}
                                        title={cardMobile.title}
                                        url={cardMobile.url}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Services;