import React, { useRef } from "react";
import "./FullscreenVideo.css"; // Import the CSS file for styling
import videoFile from "../pages/assets/videos/RaagAsa.mp4";

const FullscreenVideo = () => {
    const videoRef = useRef();

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div className="fullscreen-video-container">
            <video
                ref={videoRef}
                className="fullscreen-video"
                src={videoFile}
                autoPlay
                muted
                loop
            />
            <button className="fullscreen-button" onClick={toggleFullscreen}>
                Toggle Fullscreen
            </button>
        </div>
    );
};

export default FullscreenVideo;
