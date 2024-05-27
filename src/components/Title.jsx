import {Die} from "./Die.jsx";
import sm1 from "../assets/sm1.png";

export const Title = () => {
    return (
        <div className='main-block-title'>
            <div className='main-block-title-item'>
                <h1>
                    Начните зарабатывать <br/> на текстах через 5 дней
                </h1>
                <Die style='die-title'>
                    <div>📝</div>
                    <div>💻</div>
                    <div>🤑</div>
                    <div>👉</div>
                </Die>
            </div>
        </div>
    )
}