import React from "react";
import image1 from '../assets/r1.jpg';
import arrow from '../assets/Arrow 1 (Stroke).svg';
import image2 from '../assets/new.svg';
import prev1 from '../assets/prev1.svg';
import prev2 from '../assets/prev2.svg';
import prev3 from '../assets/prev3.svg';
import prev4 from '../assets/prev4.svg';
import prev6 from '../assets/prev6.svg';
import prev7 from '../assets/prev7.svg';
import starBlack1 from "../assets/star_black.svg";
import VideoModal from "./YouTube.jsx";

export const Reviews = () => {
    return (
        <div className="reviews">
            <div className="title">
                Марафон прошли<br/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>1600</div>
                    <div>человек</div>
                </div>
            </div>

            <div className="main-block">
                <div className="block-1">
                    <div className="icon">
                        <img src={starBlack1} className="star" alt="star"/>
                    </div>
                    <div className="text">
                        Это совершенно <br/>
                        разные люди: кто-то учится в универе, <br/>
                        кто-то работает инженером на заводе, <br/>
                        а кто-то не знает, чем заниматься — <br/> с ютуба и пробует новую профессию.
                    </div>
                </div>


                <div>
                    <img className='arrow-block' src={arrow} alt='1'/>
                    <div className="block-2">
                        <div className="video-prev">
                            <VideoModal videoId="LcGh0g0Aycs" imageSrc={prev1}/>
                        </div>
                        <div className="block-title">Стас, 24 года, никогда не писал тексты.</div>
                        <div className="desk">
                            Пошёл в копирайтинг, чтобы освоить удаленную профессию и начать работать из дома. За неделю
                            Стас
                            разобрался <br/> в редактуре: понял, как писать и что писать, что для этого нужно. После
                            марафона
                            решил пойти на полный курс, теперь работает редактором.
                        </div>
                    </div>
                </div>
                <div className="block-3">
                    <div className='image'>

                    </div>
                </div>
            </div>

            <div className="main-block">
                <div className="block-10">
                    <div className="video-prev">
                        <VideoModal videoId="3JZ_D3ELwOQ" imageSrc={prev2}/>
                    </div>
                    <div className="block-title">Вика, работает
                        фотографом
                        и официантом.
                    </div>
                    <div className="desk">
                        Мечтала найти удаленную работу и
                        уволиться из кальянной. До этого не
                        пробовала писать, но решила пойти <br/>
                        на марафон, чтобы проверить —
                        подходит ей профессия или нет,
                        получится писать или нет. За неделю
                        научилась правильно строить
                        предложения и доносить свои мысли
                        через текст. Больше всего понравилась
                        обратная связь и поддержка кураторов.

                    </div>
                </div>
                <div className="block-5">
                    <img src={image2} alt="2"/>
                </div>
                <div className="block-11">
                    <div className="video-prev">
                        <VideoModal videoId="3JZ_D3ELwOQ" imageSrc={prev3}/>
                    </div>
                    <div className="block-title">Яна, работает
                        на конюшне.
                    </div>
                    <div className="desk">
                        Хочет продолжать работать с лошадьми,
                        но для этого нужны деньги. Решила <br/>
                        пойти на марафон, чтобы сформировать
                        финансовую подушку безопасности и
                        работать в удобном графике. Не хотела
                        вставать в пять утра на работу, тратить
                        время на дорогу и находиться <br/>
                        в окружении, которое не нравится.
                        Теперь сама себе строит график и
                        занимается тем, на что раньше не <br/>
                        хватало времени.

                    </div>
                </div>
            </div>

            <div className="main-block">
                <div className="block-13">
                    <img src={prev4} alt="2"/>
                </div>
                <div className="block-14">
                    <div className='image'></div>
                </div>
                <div className="block-15">
                    <VideoModal videoId="3JZ_D3ELwOQ" imageSrc={prev6}/>
                </div>
            </div>
            <div className="block-16">
                <VideoModal videoId="3JZ_D3ELwOQ" imageSrc={prev7}/>
            </div>
        </div>
    );
};

export default Reviews;
