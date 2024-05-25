import React from "react";
import PlayButton from "./PlayButton";

function VideoPreview({ videoId, imageSrc, handlePlay }) {
    return (
        <div className="video-preview">
            <img src={imageSrc} alt="Video Preview" className="preview-image"/>
            <PlayButton click={() => handlePlay(videoId)} />
        </div>
    );
}

export default VideoPreview;
