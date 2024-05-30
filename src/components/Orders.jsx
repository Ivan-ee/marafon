import {Block} from "./block.jsx";
import image from "../assets/Arrow 1.svg";
import image2 from "../assets/Arrow 1 (2).svg";
import starBlack from "../assets/star_black.svg";
import React, {useEffect, useState} from "react";
import GetCourseModal from "./GetCourse.jsx";


export const Orders = () => {



    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
    });

    const [showModal, setShowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);
        const diff = endOfDay - now;
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [count, setCount] = useState(9); // Начальное значение 9

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count > 5) {
                setCount(count - 1);
            }
        }, 60000); // Интервал 60000 миллисекунд (1 минута)

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, [count]);

    const formattedCount = count.toString().padStart(3, '0');

    return (
        <div style={{marginBottom: 180}}>
            <div className='main order'>
                <Block className="o-t">
                    <div className="image">
                        <p className='text-1'>
                            -88% до конца дня
                        </p>
                        <p className='timer'>
                            {`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}
                        </p>
                        <div className='last-price'>
                            3990 ₽
                        </div>
                        <p className='price'>
                            890 ₽
                        </p>
                    </div>
                </Block>
                <Block>
                    <div className="image2">
                        <div className="icon">
                            <img src={starBlack} className='star'/>
                        </div>
                        <div>
                            <div className='text'>
                                Начинаем учиться
                            </div>
                            <div className='desk'>
                                {formattedDate}
                            </div>
                        </div>
                    </div>
                </Block>
                <Block>
                    <div className="image3">
                        <div className="icon">
                            <img src={starBlack} className='star'/>
                        </div>

                        <div>
                            <div className='text'>
                                Свободно мест
                            </div>
                            <div className='desk'>
                                {formattedCount}
                            </div>
                        </div>
                    </div>
                </Block>
            </div>
            <GetCourseModal show={showModal} onClose={() => setShowModal(false)} />
            <button className='to-order' onClick={() => setShowModal(true)}>Записаться <img src={image2} className='star'/></button>
        </div>
    )
}