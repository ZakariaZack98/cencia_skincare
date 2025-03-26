import React from "react";
import Navbar from "./HomeComponents/Navbar";

const VideoBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1, // Place behind other content
      }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <source src="/Videos/hero.mp4" type="video/mp4" />
        {/* <source src="/background-video.webm" type="video/webm" /> */}
      </video>
      <div className="relative">
        <Navbar />
      </div>
      <div className="mx-auto mt-60 absolute bottom-0 ms-[5dvw]">
          <div className="heroText font-dmSans drop-shadow-lg border-[20px] border-accentBrwn mx-auto">
            <h1 className="text-[100px] text-white font-black leading-15">Glamour</h1>
            <h1 className="text-[120px] text-lightPink font-black leading-25 translate-x-25">Skincare</h1>
            <h1 className="text-[150px] text-accentBrwn font-black leading-35 translate-x-50">REDEFINED.</h1>
          </div>
        </div>
    </div>
  );
};

export default VideoBackground;
