import React from 'react';

const GetCourseModal = ({show, onClose}) => {

    if (!show) {
        return null;
    }

    return (

        <div className="modal" onClick={onClose}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <iframe
                        src="https://kurs.crystall.education/pl/lite/widget/widget?&amp;id=1067346&amp;ref=http%3A%2F%2Flocalhost%3A5173%2F&amp;loc=http%3A%2F%2Flocalhost%3A5173%2F"
                        allowFullScreen="allowfullscreen" className="994"
                        id="894bb9255840e8f1f90202a1ae1391969fbe849e_994" name="994"
                        style={{}}></iframe>
                </div>
            </div>
        </div>
    );
};

export default GetCourseModal;
