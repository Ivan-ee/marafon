import {Title} from "./Title.jsx";
import {Block} from "./block.jsx";

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
                    <p className='last-price'>
                        3990 ₽
                    </p>
                    <p className='price'>
                        890 ₽
                    </p>
                </div>
                <div style={{
                    backgroundColor: 'rgba(138, 83, 255, 1)',
                    borderRadius: 20,
                    width: 383,
                    height: 73,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        fontSize: 25,
                        lineHeight: '100%',
                        color: 'rgba(250, 250, 250, 1)',
                        textTransform: 'uppercase',
                    }}>Записаться</p>
                </div>
            </Block>
            <Block className="t-t">
                <div style={{
                    padding: '20px 35px 35px 25px'
                }}>
                    <p className='text'>
                        За неделю научитесь писать тексты
                        для компаний и личного блога —
                        изучите всю основу по копирайтингу
                        и поймете, как найти первых клиентов.
                        Авторский марафон от ех-Главного
                        редактора УК Газпромбанк —
                        Марка Николаева.
                    </p>

                    <p className='text-2'>
                        Подходит для тех,
                        кто никогда не писал.
                    </p>
                </div>
            </Block>

            <Block className="t-3">
                <div className="image">
                    <div className="icon">
                        *
                    </div>

                    <p className='text'>
                        Марафон для тех,
                        кто хочет освоить
                        удаленную профессию
                    </p>
                </div>
                <div className="two">
                    <div className="icon">
                        *
                    </div>
                    <p className='text-1'>
                        Начинаем учиться
                    </p>
                    <p className='text-2'>
                        3 января
                    </p>
                </div>
                <div className="three">
                    <div className="icon">
                        *
                    </div>
                    <p className='text-1'>
                        Свободно мест
                    </p>
                    <p className='text-2'>
                        5
                    </p>
                </div>
            </Block>
        </div>
    )
}