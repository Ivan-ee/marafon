import React, {useEffect, useRef, useState} from "react";
import image1 from '../assets/r1.jpg';
import arrow from '../assets/Arrow 1 (Stroke).svg';
import image2 from '../assets/new.svg';
import image4 from '../assets/mini3.svg';
import prev1 from '../assets/prev1.svg';
import prev2 from '../assets/prev2.svg';
import prev3 from '../assets/prev3.svg';
import newR from '../assets/new-review.png';

import prev6 from '../assets/prev6.svg';
import prev7 from '../assets/prev7.svg';

import mini6 from '../assets/mini6.svg';
import mini7 from '../assets/mini7.svg';

import starBlack1 from "../assets/star_black.svg";
import VideoModal from "./YouTube.jsx";
import {Die} from "./Die.jsx";
import s1 from "../assets/Emogy/Girl Light Skin Tone.svg";
import s2 from "../assets/Emogy/Person Light Skin Curly.svg";
import s3 from "../assets/Emogy/Emoji Mega Pack Woman Medium.svg";
import s4 from "../assets/Emogy/Blond Hair Emoji.svg";

export const Reviews = () => {
    const reviewsRef = useRef(null);

    const [currentImage, setCurrentImage] = useState(image2);

    const [currentImag6, setCurrentImag6] = useState(prev6);
    const [currentImag7, setCurrentImag7] = useState(prev7);

    useEffect(() => {

        const updateImage = () => {
            if (window.innerWidth <= 500) {
                setCurrentImage(image4);

                setCurrentImag6(mini6);
                setCurrentImag7(mini7);
            } else {
                setCurrentImage(image2);

                setCurrentImag6(prev6);
                setCurrentImag7(prev7);
            }
        };

        window.addEventListener('resize', updateImage);

        updateImage();

        return () => window.removeEventListener('resize', updateImage);
    }, []);

    return (
        <section className="reviews" id='reviews' ref={reviewsRef}>
            <h2 className="title">
                Марафон прошли<br/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>1600</div>
                    <div>человек</div>
                </div>
            </h2>
            <div className="title-mini">
                Марафон прошли<br/>
                <div>
                    <div style={{display: "flex", alignItems: "center", height: "min-content"}}>1600 <img src={arrow}
                                                                                                          alt='1'
                                                                                                          style={{
                                                                                                              height: 19,
                                                                                                              width: 19,
                                                                                                              position: "relative",
                                                                                                              top: 10,
                                                                                                              right: -5
                                                                                                          }}/></div>
                    <div style={{textAlign: "right"}}>человек</div>
                </div>
            </div>
            <Die style='die-whoIsIt'>
                <div><img src={s1} alt={s1}/></div>
                <div><img src={s2} alt={s1}/></div>
                <div><img src={s3} alt={s1}/></div>
                <div><img src={s4} alt={s1}/></div>
            </Die>

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
                        <div className="block-title">Стас, 24 года, никогда не писал тексты</div>
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
                        <VideoModal videoId="RVfG_kxDm-Q?si=pgFl__ovlRTWnElc" imageSrc={prev2}/>
                    </div>
                    <div className="block-title">Вика, работает
                        фотографом
                        и официантом
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
                    <img src={newR} alt="2"/>
                </div>
                <div className="block-11">
                    <div className="video-prev">
                        <VideoModal videoId="zMOjkBax9_Y?si=gFRBlKGIF51j0a4W" imageSrc={prev3}/>
                    </div>
                    <div className="block-title">Яна, работает
                        на конюшне
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
                    <div className='image'></div>
                    {/*<img src={prev4} alt="2"/>*/}
                </div>
                <div className="block-14">
                    <div className='image'></div>
                </div>
                <div className="block-15">
                    <VideoModal videoId="B4RqSKH_oQM?si=DFpeOjh459g8OAIk" imageSrc={currentImag6}/>
                </div>
            </div>
            <div className="block-16">
                <VideoModal videoId="Gxd5DSVMQLM?si=wkKB1BSNDM1GmSg0" imageSrc={currentImag7}/>
            </div>
        </section>
    );
};

export default Reviews;
