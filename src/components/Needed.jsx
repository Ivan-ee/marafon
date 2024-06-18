import {Video} from "./Video.jsx";
import starBlack1 from "../assets/star_black.svg";
import React from "react";

export const Needed = () => {
    return (
        <section className="needed">
            <h2 className='title'>
                Подойдёт тем,
                кто хочет
            </h2>
            <h2 className='title-mini'>
                Подойдёт тем,
                кто хочет
            </h2>

            <div className='main-block'>

                <div className="block-1">
                    <div className="icon">
                        1
                    </div>
                    <div className="block-title">
                        Попробовать <br/>
                        удалённую профессию
                        и не покупать дорогое
                        обучение
                    </div>
                    <div className='text'>
                        Узнаете, как авторы пишут тексты, и
                        поработаете с практикующими
                        редакторами. Решите, нравится ли вам
                        копирайтинг и хотите ли дальше в нём
                        развиваться.
                    </div>
                </div>

                <div className='block-2'>
                    <div className="icon">
                        2
                    </div>
                    <div className='block-title'>
                        Начать зарабатывать <br/>
                        на текстах, даже если
                        никогда не писал
                    </div>
                    <div className='text'>
                        Научитесь писать продающие тексты и
                        узнаете, как находить первых клиентов.
                        После марафона будете писать просто,
                        емко и без воды. Поймете, как <br/>
                        правильно составлять резюме и искать
                        первых клиентов.
                    </div>
                </div>

                <div className='block-3'>
                    <div className="icon">
                        3
                    </div>
                    <div className='block-title'>
                        Вести личный блог так,
                        чтобы люди читали
                    </div>
                    <div className='text'>
                        Разберётесь в особенностях текстов
                        для соцсетей. Узнаете, как создавать
                        интересные истории и придумывать
                        заголовки, которые привлекают
                        аудиторию.
                    </div>
                </div>
            </div>
            <Video/>
        </section>
    );
}
