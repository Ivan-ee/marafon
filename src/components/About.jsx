import React from "react";
import image1 from '../assets/GasProm.svg';
import image2 from '../assets/author.svg';
import image3 from '../assets/Cian.svg';
import image4 from '../assets/Tinko.svg';
import image5 from '../assets/alfa.svg';


export const About = () => {
    return (
        <div className='main about'>
            <div className='title'>
                Преподаватель
                Марк
                Николаев
            </div>
            <div className='main-blocks'>
                <div className='blocks'>
                    <div className='block-m'>
                        <div className='star'>*</div>
                        <div className='text'>Главный редактор
                            УК Газпромбанк,
                            ex-редактор
                            Тинькофф Банка
                            и основатель
                            рекламного агентства
                            Crystall.Media
                        </div>
                    </div>
                    <div className='block-1'>
                        <img className='name' src={image1} alt='1'/>
                        <div className='block-title'>
                            Газпромбанк
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
                    <div className='block-author'>
                        <img className='author' src={image2} alt='2'/>
                    </div>
                </div>
                <div className='blocks'>
                    <div className='block-2'>
                        <img className='name' src={image3} alt='1'/>
                        <div className='block-title'>
                            Циан
                        </div>
                        <div className='text'>
                            Полгода отвечал за выпуск статей
                            на Яндекс.Дзен. Собирал и
                            контролировал команду авторов,
                            согласовывал статьи с редакцией.
                            Вели блог на тему недвижимости:
                            рассказывали, как купить новую
                            квартиру в ипотеку или продать
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