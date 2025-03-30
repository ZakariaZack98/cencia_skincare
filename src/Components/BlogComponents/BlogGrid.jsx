import React from "react";
import BlogCard from "../CommonComponents/BlogCard";

const BlogGrid = ({heading, data}) => {
  return (
    <>
      <h2 className="font-dmSans font-black text-4xl py-5 border-b-gray-500 border-b-[3px]">{heading}</h2>
      <div className="topPicksFeed py-15 flex justify-center gap-10 items-stretch flex-wrap">
        {
          data?.map(item => <BlogCard key={item.id} id={item.id} imgUrl={item.imgUrl} auther={item.auther} date={item.publishedAt} title={item.title} summery={item.summery}/>)
        }
      </div>
    </>
  );
};

export default BlogGrid;
