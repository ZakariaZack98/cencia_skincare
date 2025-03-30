import React from "react";
import BlogCard from "../../Components/CommonComponents/BlogCard";

const Sidebar = ({sidebarData}) => {
  return (
    <div className="sideBar w-[30%] flex flex-col gap-y-4">
      <div className="sidebarHeading pb-2 border-b-gray-300 border-b-4">
        <h2 className="text-3xl font-dmSans font-bold dark:text-lightPink">Latest Posts</h2>
      </div>
      {sidebarData?.map((post) => (
        <BlogCard
          id={post.id}
          imgUrl={post.imgUrl}
          auther={post.auther}
          date={post.publishedAt}
          title={post.title}
          summery={post.summery}
        />
      ))}
      <p className="font-playfair dark:text-lightPink">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam odit quod alias deserunt mollitia quam illum
        nemo aut perspiciatis ipsa soluta id ducimus debitis veniam sequi, doloremque hic neque quisquam.
      </p>
    </div>
  );
};

export default Sidebar;
