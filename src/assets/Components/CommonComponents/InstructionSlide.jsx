import React from "react";
import Button from "./Button";

const InstructionSlide = ({imgUrl, title, textContent}) => {
  return (
    <div className="w-full flex items-center  bg-white dark:bg-accentBrwn p-10 text-accentBrwn">
      <picture className="w-[40%] translate-x-15">
        <img
          src={imgUrl}
          alt=""
          className="h-[70dvh]"
        />
      </picture>
      <div className="textPart w-[60%] flex flex-col gap-y-5 ">
        <h2 className="title font-bodoni text-[40px] w-1/2">{title}</h2>
        <p className="text-2xl font-bodoni leading-6 max-w-[90%]">
          {textContent}
        </p>
        <div className="w-50">
          <Button label={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

export default InstructionSlide;
