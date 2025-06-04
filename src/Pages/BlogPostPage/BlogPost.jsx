import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getBlogData } from "../../lib/fetch";
import Sidebar from "../../Components/BlogComponents/Sidebar";
import Postbody from "../../Components/BlogComponents/Postbody";

const BlogPost = () => {
  const location = useLocation();
  const path = location.pathname;
  const blogData = getBlogData();
  const sideBarBlogData = blogData.filter((post) => post.category === "latest").slice(0, 3);
  const matchedBlogPost = blogData.find((post) => path == `/blog/${post.id}`);
  const imagesCollection = matchedBlogPost.imgLinkCollections;
  const textCollections = matchedBlogPost.mainContent?.split('[img]');

  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [path]);

  return (
    <div className="dark:bg-gray-800">
      <div className="container mx-auto">
      <div className="headers p-20">
        <div className="h1 font-agraham text-[40px] text-center text-black dark:text-lightPink">The beauty lookbook Blog</div>
        <h3 className="font-bodoni text-4xl text-accentBrwn text-center">by C'ENCIA™</h3>
      </div>
      <div className="lg:px-5 px-0 w-full mx-auto flex sm:flex-row flex-col posts-stretch lg:gap-x-10 gap-x-6">
        <div className="md:w-7/10 sm:w-6/10 w-full px-3 sm:px-0"><Postbody matchedPostData={matchedBlogPost} imagesCollection={imagesCollection} textCollections={textCollections}/></div>
        <div className="md:w-3/10 sm:w-4/10 w-full"><Sidebar sidebarData={sideBarBlogData}/></div>
      </div>
    </div>
    </div>
  );
};

export default BlogPost;
