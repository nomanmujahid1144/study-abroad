import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Video = ({ path, studentName, description, onClick }) => {
  const videoPlay = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (isPlaying) {
      videoPlay.current.pause();
    } else {
      videoPlay.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="video-center cursor-pointer" onClick={toggleVideo}>
        <video
          src={path}
          type="video/mp4"
          className="video-size12"
          ref={videoPlay}
        />
        <div class={`video-controls ${isPlaying ? "hidden" : ""}`}>
          <button type="button">
            <FontAwesomeIcon
              icon="fa-solid fa-play"
              className="text-white"
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className="div-bggg12">
          <p className="color-white">{studentName}</p>
          <p className="color-white">{description}</p>
        </div>
      </div>
    </>
  );
};
