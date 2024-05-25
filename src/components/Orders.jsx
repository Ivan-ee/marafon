import {Block} from "./block.jsx";


export const Orders = () => {
    return (
        <div style={{marginBottom: 180}}>
            <div className='main order'>
                <Block>
                    <div className="image1">
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
                </Block>
                <Block>
                    <div className="image2">
                        <div className="icon">
                            *
                        </div>

                        <p className='text'>
                            Марафон для тех,
                            кто хочет освоить
                            удаленную профессию
                        </p>
                    </div>
                </Block>
                <Block>
                    <div className="image3">
                        <div className="icon">
                            *
                        </div>

                        <p className='text'>
                            Свободно мест
                            <span>005</span>
                        </p>
                    </div>
                </Block>
            </div>
            <button className='to-order'>Записаться</button>
        </div>
    )
}