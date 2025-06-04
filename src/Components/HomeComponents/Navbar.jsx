import React from "react";
import { FaInstagram, FaTiktok} from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({exception}) => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <div className={`h-15 backdrop-blur-xl ${exception ? 'bg-accentBrwn' : ''} shadow-md text-lightPink`} style={exception ? {} :{backgroundColor: "rgba(0, 0, 0, 0.136)"}}>
      <div className="container md:w-9/10 mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <h3 className="font-bodoni sm:text-3xl text-xl font-bold drop-shadow-md cursor-pointer mt-2 sm:translate-x-0 translate-x-3" onClick={() => navigate('/')}>C'ENCIA</h3>
          <div className="pages flex md:gap-x-3 gap-x-1 font-dmSans font-semibold drop-shadow-md items-center md:text-xl text-sm">
            <p className={`cursor-pointer px-3 py-1 rounded-3xl ${exception ? 'hover:bg-lightPink hover:text-accentBrwn': 'hover:bg-accentBrwn'}${exception && path === '/shop' ? 'border-b-white border-b-4 pointer pointer-events-none' : ''} transition duration-300`} onClick={() => navigate('/shop')}>PRODUCTS</p>
            <span className="md:text-2xl text-[1rem]">|</span>
            <p className={`cursor-pointer px-3 py-1 rounded-3xl ${exception ? 'hover:bg-lightPink hover:text-accentBrwn': 'hover:bg-accentBrwn'} ${exception && path === '/blog' ? 'border-b-white border-b-4 pointer pointer-events-none' : ''} transition duration-300`} onClick={() => navigate('/blog')}>BLOG</p>
          </div>
          <div className="socials hidden sm:flex text-xl gap-x-4">
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
