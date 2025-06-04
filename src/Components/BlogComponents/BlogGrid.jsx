import React from "react";
import BlogCard from "../BlogComponents/BlogCard";

const BlogGrid = ({heading, data}) => {
  return (
    <>
      <h2 className="font-dmSans  font-black text-2xl sm:text-3xl md:text-4xl py-5 border-b-gray-500 border-b-[3px] dark:text-lightPink text-center mb-6 mx-2">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 lg:px-5 px-2">
        {
          data?.map(item => <BlogCard key={item.id} id={item.id} imgUrl={item.imgUrl} auther={item.auther} date={item.publishedAt} title={item.title} summery={item.summery}/>)
        }
      </div>
    </>
  );
};

export default BlogGrid;
