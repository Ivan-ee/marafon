import imageSrc1 from '../assets/rub.png';
import imageSrc2 from '../assets/hh.png';
import imageSrc3 from '../assets/pointer.svg';
import imageSrc4 from '../assets/img.png';
import imageSrc5 from '../assets/img2.png';

export const Salary = () => {
    return (
        <div className='salary'>
            <div className='salary-block-1'>
                <img className='salary-icon' src={imageSrc1} alt='1'/>
                <p className='salary-text'>
                    Средняя зарплата копирайтера — <span>75 880 ₽</span>
                </p>
                <p className='salary-desk'>
                    Для сравнения, средняя зарплата
                    начинающего it-специалиста — 52 000 ₽
                </p>
            </div>

            <div className='salary-block-2'>
                <img className='salary-icon' src={imageSrc2} alt='2'/>
                <p className='salary-text'>
                    6773 компании
                    ищут копирайтеров
                    прямо сейчас
                </p>
            </div>

            <div className='salary-block-3'>
                <img className='pointer' src={imageSrc3} alt='3'/>
            </div>

            <div className='salary-block-4'>
                <img src={imageSrc4} alt='3'/>
            </div>
            <div className='salary-block-5'>
                <img src={imageSrc5} alt='3'/>
            </div>

        </div>

    )
}