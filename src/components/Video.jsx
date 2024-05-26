import VideoModal from "./YouTube.jsx";
import prev1 from "../assets/123.png";
import React from "react";
import starBlack1 from "../assets/star_white.svg";


export const Video = () => {
    return (
        <div className='video'>
            <div className='text'>
                <div className="icon">
                    <img src={starBlack1} className="star" alt="star"/>
                </div>
                <span>Подробнее о профессии
                копирайтера смотри <br/>
                    в видео.</span> На примерах
                показываю, что делает
                копирайтер, — и за что <br/>
                ему платят деньги.
            </div>
            <div className='video-wrapper'>
                <VideoModal videoId="LcGh0g0Aycs" imageSrc={prev1}/>
            </div>
        </div>
    )
}