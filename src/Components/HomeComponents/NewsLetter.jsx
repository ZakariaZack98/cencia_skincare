import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-lightPink dark:bg-gray-700 py-[100px]">
      <div className="container mx-auto text-center">
        <h2 className="font-bodoni text-[50px] text-accentBrwn  mb-10">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-dmSans text-lg text-darkText mb-10 dark:text-lightPink">
          Stay updated with the latest skincare tips, offers, and more!
        </p>
        <div className="flex justify-center items-center gap-x-4 dark:text-lightPink">
          <input
            type="email"
            placeholder="Enter your email"
            className="font-dmSans text-darkText text-lg px-5 py-3 w-[400px] border-2 border-accentBrwn rounded-md focus:outline-none focus:ring-2 focus:ring-accentBrwn dark:text-lightPink"
          />
          <button className="font-dmSans bg-accentBrwn text-white text-lg px-6 py-3 rounded-md hover:bg-darkText hover:text-accentBrwn transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
