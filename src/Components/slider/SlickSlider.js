import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.css'


const NextArrow = (props) => {
    const { className, style, onClick, top, display } = props;

    return (

        <div
            className={className}
            style={{ ...style, display: display , top: top ,opacity: "0.9" , padding: "20px"  ,borderRadius: '50%'   }}
            onClick={onClick}
        />

    );
}

const PrevArrow = (props) => {
    const { className, style, onClick, top, display } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: display, zIndex : "1" , top: top ,opacity: "0.9" , padding: "20px"  ,borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="200px" display="block"/>,
    prevArrow: <PrevArrow top="200px" display="block"/>,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var AboutUssettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="130px" display="block"/>,
    prevArrow: <PrevArrow top="130px" display="block"/>,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1250,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var settingsMentorX = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="85px" display="block"/>,
    prevArrow: <PrevArrow top="85px" display="block"/>,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};
var settingsLogo = {
    centerMode: false,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="85px" display="none" />,
    prevArrow: <PrevArrow top="85px" display="none" />,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false
            }
        }
    ]
};
var blogSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    nextArrow: <NextArrow top="85px" display="block" />,
    prevArrow: <PrevArrow top="85px" display="block" />,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                variableWidth: false,
            }
        }
    ]
};

export const SlickSlider = ({ children }) => {
    return (
    
            <Slider className='adjust-width' {...settings}>
                    {children}
            </Slider>
      
    )
}

export const AboutUsSlickSlider = ({ children }) => {
    return (
    
            <Slider className='w-100' {...AboutUssettings}>
                    {children}
            </Slider>
      
    )
}

export const SlickMentorxSlider = ({ children }) => {
    return (
    
            <Slider className='w-100' {...settingsMentorX}>
                    {children}
            </Slider>
      
    )
}

export const SlickLogoSlider = ({ children }) => {
    return (
    
            <Slider className='w-100' {...settingsLogo}>
                    {children}
            </Slider>
      
    )
}

export const SlickBlogSlider = ({ children }) => {
    return (
    
            <Slider className='w-full' {...blogSettings}>
                    {children}
            </Slider>
      
    )
}