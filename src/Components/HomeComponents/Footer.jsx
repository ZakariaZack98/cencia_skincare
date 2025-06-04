import React from "react";
import { FaInstagram, FaTiktok, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-accentBrwn text-white py-10">
      <div className="container mx-auto px-4">
        {/* Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <h3 className="font-bodoni text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            C'ENCIA
          </h3>
          <div className="socials flex gap-x-4 text-2xl">
            <FaSquareFacebook className="cursor-pointer hover:text-gray-300 transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition duration-300" />
            <FaTiktok className="cursor-pointer hover:text-gray-300 transition duration-300" />
            <FaXTwitter className="cursor-pointer hover:text-gray-300 transition duration-300" />
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center items-center gap-x-6 mt-5 flex-wrap">
          <FaCcVisa className="text-4xl hover:text-gray-300 transition duration-300" />
          <FaCcMastercard className="text-4xl hover:text-gray-300 transition duration-300" />
          <FaCcPaypal className="text-4xl hover:text-gray-300 transition duration-300" />
        </div>

        {/* Footer Text */}
        <p className="text-center mt-5 font-dmSans text-sm">
          © 2025 C'ENCIA Skincare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
