import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";

import mr1 from '../assets/Скриншот.svg';
import mr2 from '../assets/Скриншот2.svg';
import mr3 from '../assets/Скриншот3.svg';
import mr4 from '../assets/Скриншот4.svg';
import arrow from '../assets/Arrow 1 (Stroke).svg';
import arrowL from '../assets/Лево.svg';
import arrowR from '../assets/Право.svg';
import pol from '../assets/Polygon 1.svg';

export const MySlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    useEffect(() => {
        const slides = document.querySelectorAll('.slick-slide');

        console.log(slides);
        slides.forEach(slide => {
            const childDiv = slide.querySelector('div');
            if (childDiv) {
                childDiv.classList.add('ct-flex');
            }
        });

        const arrows = document.querySelectorAll('.main-slider .slick-arrow');
        arrows.forEach(arrow => arrow.remove());

        const arrows2 = document.querySelectorAll('.wrapper-slider .slick-arrow');
        arrows2.forEach(arrow => arrow.remove());
    }, []);

    const handleAfterChange = (current) => {
        setCurrentSlide(current);
    };

    const handlePrevClick = () => {
        if (sliderRef1.current) {
            sliderRef1.current.slickPrev();
        }
        if (sliderRef2.current) {
            sliderRef2.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef1.current) {
            sliderRef1.current.slickNext();
        }
        if (sliderRef2.current) {
            sliderRef2.current.slickNext();
        }
    };

    const totalSlides = 4;

    return (
        <div className='main slider'>
            <div className='title'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>Как</div>
                    <div>проходит</div>
                </div>
                марафон
            </div>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className='main-block'>
                <div className='main-slider'>
                    <div className='slider-image'>
                        <Slider
                            asNavFor={nav2}
                            ref={sliderRef1}
                            afterChange={handleAfterChange}
                        >
                            <div className='item'>
                                <img style={{borderRadius: 20}} src={mr1} alt='1'/>
                            </div>
                            <div className='item'>
                                <img style={{borderRadius: 20}} src={mr2} alt='1'/>
                            </div>
                            <div className='item'>
                                <img style={{borderRadius: 20}} src={mr3} alt='1'/>
                            </div>
                            <div className='item'>
                                <img style={{borderRadius: 20}} src={mr4} alt='1'/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className='wrapper-slider'>
                    <img src={arrow} alt='1' style={{height: 34, width: 34}}/>
                    <Slider
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={1}
                        swipeToSlide={true}
                        afterChange={handleAfterChange}
                    >
                        <div className='slider-item'>
                            <div className='slider-title'>
                                Изучаете 8 уроков <br/>
                                в формате текстов и
                                видео.
                            </div>
                            <div className='slider-desc'>
                                Читайте и смотрите уроки в метро, кафе
                                или на улице в любое свободное время.
                            </div>
                            <button className='slider-btn'>
                                Смотреть разбор из телеграмма <img src={pol} alt='1'/>
                            </button>
                        </div>
                        <div className='slider-item'>
                            <div className='slider-title'>
                                Выполняете
                                4 практических
                                домашних задания
                            </div>
                            <div className='slider-desc'>
                                Получите обратную связь на каждую
                                работу от практикующих редакторов.
                            </div>
                            <button className='slider-btn'>
                                Смотреть разбор домашки <img src={pol} alt='1'/>
                            </button>
                        </div>
                        <div className='slider-item'>
                            <div className='slider-title'>
                                Работаете
                                с куратором
                                индивидуально
                            </div>
                            <div className='slider-desc'>
                                Общайтесь с редакторами в личных
                                сообщениях. Они расскажут о работе,
                                помогут доработать текст, ответят
                                на конкретный вопрос.
                            </div>
                        </div>
                        <div className='slider-item'>
                            <div className='slider-title'>
                                Смотрите 3 вебинара <br/>
                                от Марка с разборами
                                текстов
                            </div>
                            <div className='slider-desc'>
                                Узнайте, какие ошибки делают <br/>
                                начинающие авторы и как их исправить.
                                Марк поделится советами, которые
                                использует в работе сам.
                            </div>
                        </div>
                    </Slider>
                    <div className='buttons'>
                        <button className='btn-icon' onClick={handlePrevClick}>
                            <img src={arrowL} alt="Previous"/>
                        </button>
                        <div className='slide-counter'>
                            {currentSlide + 1} / {totalSlides}
                        </div>
                        <button className='btn-icon' onClick={handleNextClick}>
                            <img src={arrowR} alt="Next"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
