import React, {useEffect} from "react";
import image1 from '../assets/GasProm.svg';
import image2 from '../assets/mask.svg';
import image3 from '../assets/Cian.svg';
import image4 from '../assets/Tinko.svg';
import image5 from '../assets/alfa.svg';
import arrow from "../assets/Arrow 1 (Stroke).svg";
import starBlack from "../assets/star_black.svg";
import {Die} from "./Die.jsx";


export const About = () => {

    return (
        <div className='main about'>
            <div className='title'>
                Преподаватель
                Марк
                <div style={{textAlign: "right"}}>
                    <img src={arrow} alt='1'
                         style={{
                             height: 72,
                             width: 72,
                             display: "inline-block",
                             position: "relative",
                             top: '-142px',
                         }}/>
                    Николаев
                </div>
            </div>
            <div className='title-mini'>
                Препода- <br/>
                <div style={{textAlign: "right"}}> ватель</div>
                Марк
                <div style={{textAlign: "right"}}>
                    <img src={arrow} alt='1'/>
                    Николаев
                </div>
            </div>
            <Die style='die-about'>
                <div>🧑🏽‍💻</div>
                <div>🤳🏼</div>
                <div>🔥</div>
                <div>👉🏼</div>
            </Die>
            <div className='main-blocks'>
                <div className='blocks'>
                    <div className='block-m'>
                        <div className="icon">
                            <img src={starBlack} className='star'/>
                        </div>
                        <div className='text'>Главный редактор<br/>
                            УК Газпромбанк, <br/>
                            ex-редактор <br/>
                            Тинькофф Банка <br/>
                            и основатель<br/>
                            рекламного агентства<br/>
                            Crystall.Media
                        </div>
                    </div>
                    <div className='block-1'>
                        <img className='name' src={image1} alt='1'/>
                        <div className='block-title'>
                            Газпромбанк <br/>
                            Капитиал
                        </div>
                        <div className='text'>
                            Работаю главным редактором, отвечаю
                            за всё контент направление: статьи
                            в блог, посты в телеграм-каналы, тексты
                            для лендингови приложения банка.
                            Составляю контент-стратегии и
                            привлекаю подрядчиков на 1 000 000
                            рублей каждый месяц.
                        </div>
                    </div>

                    <div className='main-author'>
                        <div className="block-author">
                            <img className='author' src={image2} alt='2'/>
                        </div>
                    </div>

                </div>
                <div className='blocks'>
                    <div className='block-2'>
                        <img className='name' src={image3} alt='1'/>
                        <div className='block-title'>
                            Циан
                        </div>
                        <div className='text'>
                            Полгода отвечал за выпуск статей <br/>
                            на Яндекс.Дзен. Собирал и <br/>
                            контролировал команду авторов, <br/>
                            согласовывал статьи с редакцией. <br/>
                            Вели блог на тему недвижимости: <br/>
                            рассказывали, как купить новую <br/>
                            квартиру в ипотеку или продать <br/>
                            старую дороже рынка.
                        </div>
                    </div>
                    <div className='block-3'>
                        <img className='name' src={image4} alt='1'/>
                        <div className='block-title'>
                            Тинькофф Банк
                        </div>
                        <div className='text'>
                            Писал статьи для блога Бизнес.Секреты
                            и работал с партнерами банка:
                            Литресом, ХедХантером и Альпиной.
                            Отвечал за рассылки, сценарии и
                            страницы для сайтов.

                        </div>
                    </div>
                    <div className='block-4'>
                        <img className='name' src={image5} alt='1'/>
                        <div className='block-title'>
                            Альфа Капитал
                        </div>
                        <div className='text'>
                            Вел с командой социальные сети
                            Альфа-Капитала: рассказывали
                            об инвестициях и новостях рынка,
                            делились лайфхаками и советами
                            по финансовой грамотности.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}