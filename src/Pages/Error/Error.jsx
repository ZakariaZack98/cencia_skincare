import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-lightPink text-darkText font-dmSans">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-accentBrwn text-white px-6 py-3 rounded-md text-lg hover:bg-darkText hover:text-accentBrwn transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default Error;
