import {Video} from "./Video.jsx";

export const WhoIsIt = () => {
    return (
        <div className="whoIsIt">
            <div className='title'>
                <div>Кто</div>
                <div>такой</div>
                <br/>копирайтер?
            </div>

            <div className='main-block'>

                <div className='block-1'>
                    <div className='image'>
                        <div>1</div>
                        <div>
                            Копирайтер — это
                            человек, который
                            пишет тексты: для
                            сайтов, телеграм-
                            каналов или
                            рассылок.
                        </div>
                    </div>
                </div>

                <div className='block-2'>
                    <div>2</div>
                    <div className='block-title'>
                        Это удаленная
                        и стабильная
                        профессия
                    </div>
                    <div className='text'>
                        Копирайтер — это
                        человек, который
                        пишет тексты: для
                        сайтов, телеграм-
                        каналов или
                        рассылок.
                    </div>
                </div>

                <div className='block-3'>
                    <div>3</div>
                    <div className='block-title'>
                        Стоимость работ
                        начинающих авторов
                        после обучения:
                    </div>
                    <div className='select'>
                        <div className='item'>
                            <span className='icon'>
                                1
                            </span>
                            Ведение телеграм-канала,
                            20 постов в месяц — 40 000 ₽
                        </div>
                        <div className='item'>
                            <span className='icon'>
                                2
                            </span>
                            Ведение телеграм-канала,
                            20 постов в месяц — 40 000 ₽
                        </div>
                        <div className='item'>
                            <span className='icon'>
                                3
                            </span>
                            Ведение телеграм-канала,
                            20 постов в месяц — 40 000 ₽
                        </div>
                    </div>

                    <div>
                        <button>
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
