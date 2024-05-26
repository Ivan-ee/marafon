import VideoModal from "./YouTube.jsx";
import prev1 from "../assets/123.png";
import React from "react";
import starBlack1 from "../assets/star_black.svg";
import telegram from "../assets/telegramm.svg";

export const Video2 = () => {
    return (

        <div className='video2-block'>
            <div className='video2'>
                <div className='text'>
                    <div className="icon">
                        <img src={starBlack1} className="star" alt="star"/>
                    </div>
                    Смотрите бесплатный
                    видеоурок в Телеграме <br/>
                    о том, как выйти <br/>
                    на доход от 50 тысяч <br/>
                    рублей в месяц.
                </div>
                <div className='video-wrapper'>
                    <VideoModal videoId="LcGh0g0Aycs" imageSrc={prev1}/>
                </div>
            </div>
            <button className='btn-video'>
                Получить урок <img src={telegram} className="telegram" alt="telegram"/>
            </button>
        </div>
    )
}