import React from "react";
import telegram from "../assets/telegramm_icon.svg";

export const TelegramWidget = () => {
    const telegramLink = "https://t.me/+jbYNkBI4mhIwYWE6";

    return (
        <a href={telegramLink} className='telegram-widget' target="_blank" rel="noopener noreferrer">
            <div className='telegram-widget-pc'>
                <img src={telegram} className='telegram-widget-pc-icon' alt={'telegram-widget-pc'} />
                <div className={'telegram-widget-pc-text'}>
                    Telegram
                </div>
            </div>
            <div className='telegram-widget-mobile'>
                <img src={telegram} className='telegram-widget-pc-icon' alt={'telegram-widget-pc'} />
            </div>
        </a>
    );
};
