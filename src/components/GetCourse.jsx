import React, {useEffect} from 'react';

const GetCourseModal = ({show, onClose}) => {
    // useEffect(() => {
    //     if (show) {
    //         const script = document.createElement('script');
    //         script.src = 'http://kurs.crystall.education/pl/lite/widget/script?id=1067346';
    //         script.id = '0352f22c5fffbfbf099e6bae6404baf9fe6884b0';
    //         script.async = true;
    //         document.getElementById('get-course-modal-content').appendChild(script);
    //     }
    // }, [show]);

    if (!show) {
        return null;
    }

    return (

        <div className="modal" onClick={onClose}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <iframe
                        src="http://kurs.crystall.education/pl/lite/widget/widget?&amp;id=1067346&amp;ref=http%3A%2F%2Flocalhost%3A5173%2F&amp;loc=http%3A%2F%2Flocalhost%3A5173%2F"
                        allowFullScreen="allowfullscreen" className="994"
                        id="894bb9255840e8f1f90202a1ae1391969fbe849e_994" name="994"
                        style={{minWidth: 860, width: 860, minHeight: 1100, height: 1100, border: 'none', overflow: 'hidden'}}></iframe>
                </div>
            </div>
        </div>
    );
};

export default GetCourseModal;
