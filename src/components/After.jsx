import {Block} from "./block.jsx";
import starBlack from "../assets/star_black.svg";
import React, {useEffect, useRef, useState} from "react";
import image from "../assets/Arrow 1.svg";
import arrow from "../assets/Arrow 1 Stroke (1).svg";
import {Die} from "./Die.jsx";
import GetCourseModal from "./GetCourse.jsx";

export const After = () => {

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
        return {hours, minutes, seconds};
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='main after'>
            <div className='title'>
                Что будет <br/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>после</div>
                    <div>оплаты</div>
                </div>
            </div>
            <div className='title-mini'>
               <div style={{display: "flex", justifyContent: "space-between"}}>
                  <div>Что</div>
                  <div>будет</div>
               </div>
                <div>
                    <div>после</div>
                    <div style={{textAlign:"right"}}>оплаты</div>
                </div>
            </div>
            <Die style='die-after'>
                <div>💳</div>
                <div>👉🏼</div>
                <div>📱</div>
                <div>🤙🏼</div>
            </Die>
            <div className='blocks'>
                <div className='block-1'>
                    <div className="icon">
                        <img src={starBlack} className='star'/>
                    </div>
                    <div className='text'>
                        Мы добавим вас <br/>
                        в чат-бота в Телеграме, куда будем отправлять уроки и вебинары. <br/> Через него можно
                        связаться <br/>с редактором и <br/>получить ответ <br/> на любой вопрос. Учиться начнёте сразу,
                        как будет
                        удобно.
                    </div>
                </div>

                <GetCourseModal show={showModal} onClose={() => setShowModal(false)} />
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
                    <div className='main-block-button' onClick={() => setShowModal(true)}>
                        <div>Записаться</div>
                        <div>|</div>
                        <div><img src={image}/></div>
                    </div>
                </Block>
                <div className='block-arr'>
                    <img className='arrow-block' style={{height: 70, width: 70}} src={arrow} alt='1'/>
                </div>
            </div>
        </div>
    )
}