import {Block} from "./block.jsx";

export const After = () => {
    return (
        <div className='main after'>
            <div className='title'>
                Что будет
                после оплаты
            </div>
            <div className='blocks'>
                <div className='block-1'>
                    <div className='star'>*</div>
                    <div className='text'>
                        Мы добавим вас в чат-бота в Телеграме, куда будем отправлять уроки и вебинары. Через него можно
                        связаться с редактором и получить ответ на любой вопрос. Учиться начнёте сразу, как будет
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
                <div className='block'></div>
            </div>
        </div>
    )
}