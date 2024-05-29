import {Block} from "./block.jsx";
import starBlack from "../assets/star_black.svg";
import React from "react";
import image from "../assets/Arrow 1.svg";
import arrow from "../assets/Arrow 1 Stroke (1).svg";
import {Die} from "./Die.jsx";

export const After = () => {
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
                <Block className="o-t">
                    <div className="image">
                        <p className='text-1'>
                            -88% до конца дня
                        </p>
                        <p className='timer'>
                            12:53:23
                        </p>
                        <div className='last-price'>
                            3990 ₽
                        </div>
                        <p className='price'>
                            890 ₽
                        </p>
                    </div>
                    <div className='main-block-button'>
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