import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import {FaPlay} from "react-icons/fa";

function VideoModal({ videoId, imageSrc }) {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(false);
    };

    return (
        <div className="video-preview">
            <img src={imageSrc} alt="Video Preview" className="preview-image" />
            <button onClick={openModal} className="play-button">
                <FaPlay />
            </button>
            {modal ? (
                <section className="modal__bg">
                    <div className="modal__align">
                        <div className="modal__content" modal={modal.toString()}>
                            <IoCloseOutline
                                className="modal__close"
                                arial-label="Close modal"
                                onClick={openModal}
                            />
                            <div className="modal__video-align">
                                {videoLoading ? (
                                    <div className="modal__spinner">
                                        <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                                    </div>
                                ) : null}
                                <iframe
                                    className="modal__video-style"
                                    onLoad={spinner}
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default VideoModal;
