import {Title} from "./Title.jsx";
import {Block} from "./block.jsx";
import image from '../assets/Arrow 1.svg';
import diamond from '../assets/diamond.svg';
import starBlack from '../assets/star_black.svg';
import starWhite from '../assets/star_white.svg';
import React, {useEffect, useState} from "react";

export const Main = () => {

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
    });

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
        <div className='main-block'>
            <Title/>

            <a href="#popup:pay" style={{pointerEvents: "auto"}}>rkbyr</a>
            <img className="diamond" src={diamond} alt='diamond'/>
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
                <div className='main-block-button'>
                    <div>Записаться</div>
                    <div>|</div>
                    <div><img src={image}/></div>
                </div>
            </Block>
            <Block className="t-t">
                <div className='text'>
                    За неделю научитесь писать тексты
                    для компаний и личного блога —
                    изучите всю основу по копирайтингу
                    и поймете, как найти первых клиентов.
                    Авторский марафон от ех-Главного
                    редактора УК Газпромбанк —
                    Марка Николаева.
                </div>

                <div className='text-2'>
                    Подходит для тех,
                    кто никогда не писал.
                </div>
            </Block>

            <Block className="t-3">
                <div className="image">
                    <div className="icon">
                        <img src={starBlack} className='star'/>
                    </div>

                    <div className='text'>
                        Марафон для тех, <br/>
                        кто хочет освоить
                        удаленную профессию
                    </div>
                </div>
                <div className="two">
                    <div className="icon">
                        <img src={starWhite} className='star'/>
                    </div>
                    <div className='text-1'>
                        Начинаем учиться
                    </div>
                    <div className='text-2'>
                        {formattedDate}
                    </div>
                </div>
                <div className="three">
                    <div className="icon">
                        <img src={starBlack} className='star'/>
                    </div>
                    <p className='text-1'>
                        Свободно мест
                    </p>
                    <p className='text-2'>
                        {formattedCount}
                    </p>
                </div>
            </Block>
        </div>
    )
}