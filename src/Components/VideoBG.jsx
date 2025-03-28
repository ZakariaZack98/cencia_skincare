import React, { useEffect, useState } from "react";
import Navbar from "./HomeComponents/Navbar";

const VideoBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate styles based on scroll position
  const heroTextStyle = {
    transform: `translateY(${Math.min(scrollY * -0.5, -200)}px) scale(${Math.max(1 + scrollY / 1000)})`,
    opacity: `${Math.max(1 - scrollY / 500, 0)}`,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
  };

  const videoStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) scale(${1 + scrollY / 1000})`,
    transition: "transform 0.1s ease-out",
  };

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
        style={videoStyle}>
        <source src="/Videos/hero.mp4" type="video/mp4" />
        {/* <source src="/background-video.webm" type="video/webm" /> */}
      </video>
      <div className="relative" >
        <Navbar />
      </div>
      <div
        className="heroText translate-x-65 mb-10 mt-60 absolute bottom-0 ms-[5dvw] translate-y-20 " 
        style={heroTextStyle} >
        <div className="heroText font-dmSans drop-shadow-lg border-[20px] border-accentBrwn mx-auto" data-aos='zoom-out' data-aos-duration="1000" data-aos-delay="1000">
          <h1
            className="text-[100px] text-white font-black leading-15">
            Glamour
          </h1>
          <h1 className="text-[120px] text-lightPink font-black leading-25 translate-x-25">
            Skincare
          </h1>
          <h1 className="text-[150px] text-accentBrwn font-black leading-35 translate-x-50">
            REDEFINED.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
