import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";

import mr1 from '../assets/mr1.png';
import mr2 from '../assets/mr2.png';
import mr3 from '../assets/mr3.png';
import mr4 from '../assets/mr4.png';

export const MySlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);


    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    useEffect(() => {
        const slides = document.querySelectorAll('.slick-slide');

        console.log(slides)
        slides.forEach(slide => {
            const childDiv = slide.querySelector('div');
            if (childDiv) {
                childDiv.classList.add('ct-flex');
            }
        });
    }, []);

    return (
        <div className='main slider'>
            <div className='title'>
                Как проходит
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
                        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
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
                    <h4>Second Slider</h4>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={1}
                        swipeToSlide={true}
                    >
                        <div className='slider-item'>
                            <div className='slider-title'>
                                Изучаете 8 уроков
                                в формате текстов и
                                видео.
                            </div>
                            <div className='slider-desc'>
                                Читайте и смотрите уроки в метро, кафе
                                или на улице в любое свободное время.
                            </div>
                            <button className='slider-btn'>
                                Смотереть разбор
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
                                Смотереть разбор домашки
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
                                Смотрите 3 вебинара
                                от Марка с разборами
                                текстов
                            </div>
                            <div className='slider-desc'>
                                Узнайте, какие ошибки делают
                                начинающие авторы и как их исправить.
                                Марк поделится советами, которые
                                использует в работе сам.
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

