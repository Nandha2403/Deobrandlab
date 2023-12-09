import React from "react";
// import DeoIntroVideo from "../../assets/DeoIntroVideo.mp4";
import DeoIntroVideo from "../../assets/DEO Logo Ani1.mp4";
import "./IntroVideo.css";

const IntroVideo = () => {
  return (
    <div className="video_main">
      <video src={DeoIntroVideo} autoPlay loop muted />
    </div>
  );
};

export default IntroVideo;
