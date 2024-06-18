import React, {useEffect, useState} from 'react';

const PopupTelegram = ({ onClose }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <section className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="popup-title">
                    Получите бесплатный
                    видеоурок
                </h3>
                <h6 className="popup-desk">
                    «Как начать писать и найти
                    первых клиентов»
                </h6>
                <div className="popup-text">
                    Пошаговый урок, как написать текст, создать
                    резюме и найти первого клиента. В подарок —
                    список пяти телеграм-каналов для поиска
                    первого клиента
                </div>
                <div className='button'>
                    ЖМИТЕ СЮДА
                </div>
            </div>
        </section>
    );
};

export default PopupTelegram;