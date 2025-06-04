import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-lightPink dark:bg-gray-700 lg:py-25 sm:py-15 py-10">
      <div className="container mx-auto text-center ">
        <h2 className="font-bodoni lg:text-[50px] sm:text-[40px] text-[27px] text-accentBrwn  md:mb-10 mb-5 text-nowrap">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-dmSans lg:text-lg text-base md:max-w-9/10 max-w-7/10 mx-auto text-center text-darkText mb-10 dark:text-lightPink">
          Stay updated with the latest skincare tips, offers, and more!
        </p>
        <div className="flex md:flex-row justify-center items-center gap-4 md:gap-x-2 sm:gap-x-1 flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="font-dmSans text-darkText text-lg md:text-base sm:text-sm xs:text-xs px-5 py-3 md:w-[300px] sm:w-[200px] w-9/10 border-2 border-accentBrwn rounded-md focus:outline-none focus:ring-2 focus:ring-accentBrwn dark:text-lightPink"
          />
          <button className="font-dmSans bg-accentBrwn text-white text-lg md:text-base sm:text-sm xs:text-xs px-6 py-3 rounded-md hover:bg-darkText hover:text-accentBrwn transition duration-300 xs:mt-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
