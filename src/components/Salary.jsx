import imageSrc1 from '../assets/rub.svg';
import imageSrc2 from '../assets/hh.svg';
import imageSrc3 from '../assets/pointer.svg';
import imageSrc4 from '../assets/img.png';
import imageSrc5 from '../assets/img2.png';

export const Salary = () => {
    return (
        <div className='salary'>
            <div className='salary-blocks'>
                <div className='salary-block-1'>
                    <img className='salary-icon' src={imageSrc1} alt='1'/>
                    <div className='salary-text'>
                        Средняя зарплата копирайтера — <br/>
                        <span>75 880 ₽</span>
                    </div>
                    <div className='salary-desk'>
                        Для сравнения, средняя зарплата
                        начинающего it-специалиста — <span>52 000 ₽</span>
                    </div>
                </div>

                <div className='salary-block-2'>
                    <img className='salary-icon' src={imageSrc2} alt='2'/>
                    <p className='salary-text'>
                        6773 компании<br/> ищут копирайтеров прямо сейчас
                    </p>
                </div>

                <div className='salary-block-3'>
                    <img className='pointer' src={imageSrc3} alt='3'/>
                </div>
            </div>

            <div className='salary-blocks'>
                <div className='salary-block-3'>

                </div>
                <div className='salary-block-4'>
                    <img src={imageSrc4} alt='3'/>
                </div>
                <div className='salary-block-5'>
                    <img src={imageSrc5} alt='3'/>
                </div>
            </div>

        </div>

    )
}