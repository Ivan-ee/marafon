import React from "react";
import image1 from '../assets/r1.jpg';
import image2 from '../assets/r2.png';
import starBlack1 from "../assets/star_black.svg";
import VideoModal from "./YouTube.jsx";

export const Reviews = () => {
    return (
        <div className="reviews">
            <div className="title">
                Марафон прошли<br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>1600</div>
                    <div>человек</div>
                </div>
            </div>

            <div className="main-block">
                <div className="block-1">
                    <div className="icon">
                        <img src={starBlack1} className="star" alt="star" />
                    </div>
                    <div className="text">
                        Это совершенно <br />
                        разные люди: кто-то учится в универе, <br />
                        кто-то работает инженером на заводе, <br />
                        а кто-то не знает, чем заниматься — <br /> с ютуба и пробует новую профессию.
                    </div>
                </div>

                <div className="block-2">
                    <VideoModal videoId="LcGh0g0Aycs" imageSrc={image1} />
                    <div className="block-title">Стас, 24 года, никогда не писал тексты.</div>
                    <div className="desk">
                        Пошёл в копирайтинг, чтобы освоить удаленную профессию и начать работать из дома. За неделю Стас разобрался в редактуре: понял, как писать и что писать, что для этого нужно. После марафона решил пойти на полный курс, теперь работает редактором.
                    </div>
                </div>

                <div className="block-3">
                    <img src={image1} alt="1" />
                </div>
            </div>

            <div className="main-block">
                <div className="block-2">
                    <VideoModal videoId="3JZ_D3ELwOQ" imageSrc={image2} />
                    <div className="block-title">Стас, 24 года, никогда не писал тексты.</div>
                    <div className="desk">
                        Пошёл в копирайтинг, чтобы освоить удаленную профессию и начать работать из дома. За неделю Стас разобрался в редактуре: понял, как писать и что писать, что для этого нужно. После марафона решил пойти на полный курс, теперь работает редактором.
                    </div>
                </div>
                <div className="block-5">
                    <img src={image2} alt="2" />
                </div>
            </div>

            <div className="main-block">
                <div className="block-2">
                    <VideoModal videoId="L_jWHffIx5E" imageSrc={image2} />
                    <div className="block-title">Стас, 24 года, никогда не писал тексты.</div>
                    <div className="desk">
                        Пошёл в копирайтинг, чтобы освоить удаленную профессию и начать работать из дома. За неделю Стас разобрался в редактуре: понял, как писать и что писать, что для этого нужно. После марафона решил пойти на полный курс, теперь работает редактором.
                    </div>
                </div>
                <div className="block-5">
                    <img src={image2} alt="2" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
