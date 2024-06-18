import {Die} from "./Die.jsx";
import s1 from "../assets/Emogy/Emoji Mega Pack (1).svg";
import s2 from "../assets/Emogy/Emoji Mega Pack.svg";
import s3 from "../assets/Emogy/Money Mouth Face.svg";
import s4 from "../assets/Emogy/Backhand Index Right Medium Light.svg";

export const Title = () => {
    return (
        <section className='main-block-title'>
            <title className='main-block-title-item'>
                <h1>
                    Начните зарабатывать <br/> на текстах через 5 дней
                </h1>
                <Die style='die-title'>
                    <div><img src={s1} alt={s1}/></div>
                    <div><img src={s2} alt={s1}/></div>
                    <div><img src={s3} alt={s1}/></div>
                    <div><img src={s4} alt={s1}/></div>
                </Die>
            </title>
        </section>
    )
}