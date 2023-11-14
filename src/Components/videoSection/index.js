import React, { useState } from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { SlickSlider } from "../slider/SlickSlider";
import { Video } from "./Video";

function VideoSection() {
  const video = [
    {
      path: 'https://thestudenthelpline.co.in/assets/video/t2.webm',
      studentName: 'Kansha',
      description: 'The Student Helpline comes highly recommended. Their comprehensive support and guidance can make your global education dreams a reality'
    },
    {
      path: 'https://thestudenthelpline.co.in/assets/video/t3.webm',
      studentName: 'Jatin',
      description: 'With their extensive expertise and unwavering support, your journey to international education will be smooth and rewarding'
    },
    {
      path: 'https://thestudenthelpline.co.in/assets/video/t6.webm',
      studentName: 'Ruchita',
      description: 'The Student Helpline comes highly recommended. Their comprehensive support and guidance can make your global education dreams a reality'
    },
    {
      path: 'https://thestudenthelpline.co.in/assets/video/t2.webm',
      studentName: 'Nidhi',
      description: 'I strongly endorse The Student Helpline for anyone considering studying abroad'
    },
  ];

  // Initialize state to keep track of video playback
  const [playingVideo, setPlayingVideo] = useState(null);

  // Function to toggle video playback
  const toggleVideo = (video) => {
    if (playingVideo === video) {
      video.current.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo) {
        playingVideo.current.pause();
      }
      video.current.play();
      setPlayingVideo(video);
    }
  };

  return (
    <>
      <div className="div-texted12 main-container">
        <p className="test-text23">Testimonials</p>
        <h1 className="hear-text">hear from our students</h1>
      </div>
      <div className="center-curr main-container">
        <SlickSlider className="flex gap-5 w-75 justify-content-between">
          {video.map((videoData, index) => (
            <div className="px-4" key={index}>
              <Video
                path={videoData.path}
                studentName={videoData.studentName}
                description={videoData.description}
                onClick={() => toggleVideo(videoData)} // Call toggleVideo on click
              />
            </div>
          ))}
        </SlickSlider>
      </div>
    </>
  );
}

export default VideoSection;
