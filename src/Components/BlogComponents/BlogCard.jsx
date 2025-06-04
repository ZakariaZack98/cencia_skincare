import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, imgUrl, title, auther, date, summery }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-700 flex flex-col justify-between mx-auto">
      <a href="#">
        <img
          className="rounded-t-lg h-70 w-full object-cover object-center"
          src={imgUrl}
          alt=""
        />
      </a>
      <div className="lg:p-5 p-3 flex flex-col flex-grow">
        <a href="#">
          <h5 className="mb-2 lg:text-2xl lg:leading-6 text-lg leading-5 font-bold tracking-tight text-gray-900 dark:text-white font-playfair">
            {title}
          </h5>
        </a>
        <div className="flex justify-between pb-2 border-b-gray-300 border-b-[1px]">
          <p className="dark:text-lightPink">
            <span >👤</span>
            {auther}
          </p>
          <p className="dark:text-lightPink">
            <span>🕓</span>
            {date}
          </p>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-playfair pt-2">
          {summery}
        </p>
        <div className="mt-auto">
          <div
            onClick={() => {
              navigate(`/blog/${id}`);
            }}
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accentBrwn rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-accentBrwn dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
