import {Title} from "./Title.jsx";
import {Block} from "./block.jsx";
import image from '../assets/Arrow 1.svg';
import starBlack from '../assets/star_black.svg';
import starWhite from '../assets/star_white.svg';

export const Main = ({children}) => {
    return (
        <div className='main-block'>
            <Title/>
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
            <Block className="t-t">
                    <div className='text'>
                        За неделю научитесь писать тексты
                        для компаний и личного блога —
                        изучите всю основу по копирайтингу
                        и поймете, как найти первых клиентов.
                        Авторский марафон от ех-Главного
                        редактора УК Газпромбанк —
                        Марка Николаева.
                    </div>

                    <div className='text-2'>
                        Подходит для тех,
                        кто никогда не писал.
                    </div>
            </Block>

            <Block className="t-3">
                <div className="image">
                    <div className="icon">
                        <img src={starBlack} className='star'/>
                    </div>

                    <div className='text'>
                        Марафон для тех, <br/>
                        кто хочет освоить
                        удаленную профессию
                    </div>
                </div>
                <div className="two">
                    <div className="icon">
                        <img src={starWhite} className='star'/>
                    </div>
                    <div className='text-1'>
                        Начинаем учиться
                    </div>
                    <div className='text-2'>
                        3 января
                    </div>
                </div>
                <div className="three">
                    <div className="icon">
                        <img src={starBlack} className='star'/>
                    </div>
                    <p className='text-1'>
                        Свободно мест
                    </p>
                    <p className='text-2'>
                        005
                    </p>
                </div>
            </Block>
        </div>
    )
}