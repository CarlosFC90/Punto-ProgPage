import React from 'react';
import '../styles/Services.css';
import CardCarousel from '../CardCarousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                        <div className='item'>
                            <CardCarousel
                                src="images/zero3d.jpg"
                                text="Zero3D"
                                url="https://www.google.com"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/web-development.jpg"
                                text="Explore our Web projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/web-development.jpg"
                                text="Explore our Web projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/web-development.jpg"
                                text="Explore our Web projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/web-development.jpg"
                                text="Explore our Web projects"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='mobile-works'>
                <h1><u><i>Mobile</i></u></h1>
                <div className='container'>
                    <Slider {...settingsMobile}>
                        <div className='item'>
                            <CardCarousel
                                src="images/telomando.png"
                                text="Telomando Olavarría"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/mobile-development.png"
                                text="Explore our Mobile projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/mobile-development.png"
                                text="Explore our Mobile projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/mobile-development.png"
                                text="Explore our Mobile projects"
                            />
                        </div>
                        <div className='item'>
                            <CardCarousel
                                src="images/mobile-development.png"
                                text="Explore our Mobile projects"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Services;