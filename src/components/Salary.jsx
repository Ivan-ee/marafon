import imageSrc1 from '../assets/rub.svg';
import imageSrc2 from '../assets/hh.svg';
import imageSrc3 from '../assets/pointer.svg';
import imageSrc4 from '../assets/img2.svg';
import imageSrc5 from '../assets/img.svg';
import {useEffect, useState} from "react";

import image5 from "../assets/mini4.svg";
import image6 from "../assets/mini5.svg";

export const Salary = () => {

    const [currentImage1, setCurrentImage1] = useState(imageSrc4);
    const [currentImage2, setCurrentImage2] = useState(imageSrc5);

    useEffect(() => {

        const updateImage = () => {
            if (window.innerWidth <= 500) {
                setCurrentImage1(image5);
                setCurrentImage2(image6);
            } else {
                setCurrentImage1(imageSrc4);
                setCurrentImage2(imageSrc5);
            }
        };

        window.addEventListener('resize', updateImage);

        updateImage();

        return () => window.removeEventListener('resize', updateImage);
    }, []);

    return (
        <section className='salary'>
            <div className='salary-blocks'>
                <div className='salary-block-1'>
                    <img className='salary-icon' src={imageSrc1} alt='1'/>
                    <div className='salary-text'>
                        Средняя зарплата копирайтера — <br/>
                        <span>75 880 ₽</span>
                    </div>
                    <div className='salary-desk'>
                        Для сравнения, средняя зарплата
                        начинающего it-специалиста — <span>52 000 ₽</span>
                    </div>
                </div>

                <div className='salary-block-2'>
                    <img className='salary-icon' src={imageSrc2} alt='2'/>
                    <p className='salary-text'>
                        6773 компании<br/> ищут копирайтеров прямо сейчас
                    </p>
                </div>

                <div className='salary-block-3'>
                    <img className='pointer' src={imageSrc3} alt='3'/>
                </div>
            </div>

            <div className='salary-blocks'>
                <div className='salary-block-3'>

                </div>
                <div className='salary-block-4'>
                    <img src={currentImage1} alt='3'/>
                </div>
                <div className='salary-block-5'>
                    <img src={currentImage2} alt='3'/>
                </div>
            </div>

        </section>

    )
}