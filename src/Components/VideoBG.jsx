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
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) scale(${1 + scrollY / 1000})`,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div className="fixed top-0 left-0 w-screen lg:h-screen h-[50dvh] overflow-hidden -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full absolute object-cover"
        style={videoStyle}>
        <source src="/Videos/hero.mp4" type="video/mp4" />
        {/* <source src="/background-video.webm" type="video/webm" /> */}
      </video>
      <div className="relative" >
        <Navbar />
      </div>
      <div className="w-full h-full flex justify-center items-center 2xl:translate-y-30 md:translate-y-40 translate-y-40">
        <div
        className="heroText" 
        style={heroTextStyle} >
        <div className="heroText font-dmSans drop-shadow-lg md:border-[20px] border-[15px] border-accentBrwn mx-auto" data-aos='zoom-out' data-aos-duration="1000" data-aos-delay="1000">
          <h1
            className="lg:text-[100px] sm:text-[50px] text-[35px] text-white font-black lg:leading-15 sm:leading-8 leading-6">
            Glamour
          </h1>
          <h1 className="lg:text-[120px] sm:text-[60px] text-[40px] text-lightPink font-black lg:leading-25 sm:leading-12 leading-10 translate-x-25">
            Skincare
          </h1>
          <h1 className="lg:text-[150px] sm:text-[75px] text-[52px]  text-accentBrwn font-black lg:leading-35 sm:leading-17 leading-14 lg:translate-x-50 translate-x-0">
            REDEFINED.
          </h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default VideoBackground;
