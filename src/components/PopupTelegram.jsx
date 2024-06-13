import React, { useEffect } from 'react';

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
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-title">
                    Получите бесплатный
                    видеоурок
                </div>
                <div className="popup-desk">
                    «Как начать писать и найти
                    первых клиентов»
                </div>
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
        </div>
    );
};

export default PopupTelegram;