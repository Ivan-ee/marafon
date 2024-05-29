import image1 from '../assets/bac_green.png';
import image2 from '../assets/galka.svg';
import image from "../assets/Arrow 1.svg";
import image3 from '../assets/Arrow 1 (1).svg';
import {useEffect, useRef} from "react";
import {Die} from "./Die.jsx";

export const WhoIsIt = () => {
    const whoIsItRef = useRef(null);

    return (
        <div className="whoIsIt" id="whoIsIt" ref={whoIsItRef}>
            <div className='title'>
                <div className='whoIsIt-titles'>
                    <div>Кто</div>
                    <div>такой</div>
                </div>
                <div style={{
                    textAlign: 'right'
                }}>копирайтер?
                </div>
            </div>

            <div className='title-mini'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>Кто</div>
                    <div>такой</div>
                </div>
                <div style={{
                    textAlign: 'left'
                }}>копи-
                    <div style={{
                        textAlign: 'right'
                    }}>
                        райтер?
                    </div>
                </div>
            </div>

            <div className='main-block'>

                <div className='block-1'>
                    <div className='icon'>1</div>
                    <div className='block-title'>
                        Копирайтер — это
                        человек, который
                        пишет тексты: для
                        сайтов, телеграм-
                        каналов или
                        рассылок.
                    </div>
                </div>

                <div className='block-2'>
                    <div className='icon'>2</div>
                    <div className='block-title'>
                        Это удаленная
                        и стабильная
                        профессия
                    </div>
                    <div className='text'>
                        Копирайтеру платят не за разовые
                        тексты, а за полноценное ведение блога,
                        телеграма или канала на Яндекс.Дзене.
                        Чтобы начать работать копирайтером,
                        нужно понять базу и собрать портфолио.
                        Как это сделать — подробно
                        рассказываем на марафоне.
                    </div>
                </div>

                <div className='block-3'>
                    <div className='icon'>3</div>
                    <div className='block-title'>
                        Стоимость работ
                        начинающих авторов
                        после обучения:
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <img src={image2} style={{marginTop: 5}} alt='2'/>
                            <div>Ведение телеграм-канала,
                                <br/>20 постов в месяц — <span>40 000 ₽</span></div>
                        </div>
                        <div className='item'>
                            <img src={image2} style={{marginTop: 5}} alt='2'/>
                            <div>Статья для Яндекс.Дзена — <br/>
                                <span>от 4000 ₽</span></div>
                        </div>
                        <div className='item'>
                            <img src={image2} style={{marginTop: 5}} alt='2'/>
                            <div>Статья для блога компании — <br/>
                                <span>от 8000 ₽</span></div>
                        </div>
                    </div>

                    <button className='btn'>
                        <div>Записаться</div>
                        <div>|</div>
                        <div><img src={image3}/></div>
                    </button>
                </div>
            </div>
        </div>
    );
}
