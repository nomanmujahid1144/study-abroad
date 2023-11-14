import React, { useRef, useState } from "react";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
function VideoSection() {
  const [lastVideo, setLastVideo] = useState(null);

  return (
    <div>
      <div className="div-texted12 ">
        <p className="test-text23">Meet Our Team</p>
        <h1 className="hear-text">Our Passionate Team</h1>
      </div>
      <VideoSection />
    </div>
  );
}

export default VideoSection;
