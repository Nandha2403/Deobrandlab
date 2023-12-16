import React from "react";
import "./IntroVideo.css";

const IntroVideo = ({sample}) => {
  return (
    <div className="video_main">
      <video src={sample} autoPlay loop muted />
    </div>
  );
};

export default IntroVideo;
