import React from "react";
import { FaInstagram, FaTiktok} from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Navbar = ({exception}) => {
  return (
    <div className={`h-15 backdrop-blur-xl ${exception ? 'bg-accentBrwn' : ''} shadow-md text-lightPink`} style={exception ? {} :{backgroundColor: "rgba(0, 0, 0, 0.136)"}}>
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <h3 className="font-bodoni text-3xl font-bold drop-shadow-md">C'ENCIA</h3>
          <div className="pages flex gap-x-3 font-dmSans font-semibold drop-shadow-md items-center text-xl">
            <p className={`cursor-pointer px-3 py-1 rounded-3xl ${exception ? 'hover:bg-lightPink hover:text-accentBrwn': 'hover:bg-accentBrwn'} transition duration-300`}>PRODUCTS</p>
            <span className="text-2xl">|</span>
            <p className={`cursor-pointer px-3 py-1 rounded-3xl ${exception ? 'hover:bg-lightPink hover:text-accentBrwn': 'hover:bg-accentBrwn'} transition duration-300`}>BLOG</p>
          </div>
          <div className="socials text-xl flex gap-x-4">
            <FaSquareFacebook/>
            <FaInstagram/>
            <FaTiktok/>
            <FaXTwitter/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
