import React, {useEffect, useState} from 'react';

const GetCourseModal = ({show, onClose}) => {

    if (!show) {
        return null;
    }

    const [iframeSrc, setIframeSrc] = useState('');
    const [iframeId, setIframeId] = useState('');
    const [iframeName, setIframeName] = useState('');

    useEffect(() => {
        if (show) {
            const iframes = document.getElementsByTagName("iframe");
            const firstIframe = iframes[0];

            if (firstIframe) {
                setIframeSrc(firstIframe.src);
                setIframeId(firstIframe.id);
                setIframeName(firstIframe.name);
            }
        }
    }, [show]);

    if (!show) {
        return null;
    }

    return (

        <div className="modal" onClick={onClose}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <iframe
                        src={iframeSrc}
                        allowFullScreen="allowfullscreen" className={iframeName}
                        id={iframeId} name={iframeName}
                        ></iframe>
                </div>
            </div>
        </div>
    );
};

export default GetCourseModal;
