
import  React, { useRef, useEffect } from 'react';
function GetCourseModal({ show, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (show) {
            modalRef.current.style.display = 'block';
            const script = document.createElement('script');
            script.id = '0352f22c5fffbfbf099e6bae6404baf9fe6884b0';
            script.src = 'http://kurs.crystall.education/pl/lite/widget/script?id=1067346';
            script.async = true;
            modalRef.current.appendChild(script);

            return () => {
                // Удаляем скрипт, когда модалка закрывается
                if (modalRef.current) {
                    modalRef.current.removeChild(script);
                }
            };
        } else {
            modalRef.current.style.display = 'none';
        }
    }, [show]);

    return (
        <div className="modal" ref={modalRef} style={{ display: 'none' }}>
            <div className="modal-content">
                <button onClick={onClose}>Закрыть</button>
                {/* Контейнер для виджета */}
                <div id="getcourse-widget-container"></div>
            </div>
        </div>
    );
}

export default GetCourseModal;