import {Block} from "./block.jsx";
import image from "../assets/Arrow 1.svg";
import image2 from "../assets/Arrow 1 (2).svg";
import starBlack from "../assets/star_black.svg";


export const Orders = () => {
    return (
        <div style={{marginBottom: 180}}>
            <div className='main order'>
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
                </Block>
                <Block>
                    <div className="image2">
                        <div className="icon">
                            <img src={starBlack} className='star'/>
                        </div>
                        <div>
                            <div className='text'>
                                Начинаем учиться
                            </div>
                            <div className='desk'>
                                3 января
                            </div>
                        </div>
                    </div>
                </Block>
                <Block>
                    <div className="image3">
                        <div className="icon">
                            <img src={starBlack} className='star'/>
                        </div>

                        <div>
                            <div className='text'>
                                Свободно мест
                            </div>
                            <div className='desk'>
                                005
                            </div>
                        </div>
                    </div>
                </Block>
            </div>
            <button className='to-order'>Записаться <img src={image2} className='star'/></button>
        </div>
    )
}