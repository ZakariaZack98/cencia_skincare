import React, { useEffect } from "react";
import { getBlogData, getShowCaseData } from "../../lib/fetch";
import BlogGrid from "../../Components/BlogComponents/BlogGrid";
import BodyMists from "../../Components/HomeComponents/BodyMists"

const Blog = () => {
  const blogData = getBlogData();
  const trendingBlogData = blogData.filter((data) => data.category === "trending");
  const latestBlogData = blogData.filter((data) => data.category === "latest");
  const showCaseData = getShowCaseData()

  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);

  return (
    <div className="bg-lightPink dark:bg-gray-800 py-30">
      <div className="container mx-auto">
        <div className="headers mb-20">
          <div className="h1 font-agraham text-[40px] text-center text-black dark:text-lightPink">The beauty lookbook Blog</div>
          <h3 className="font-bodoni text-4xl text-accentBrwn text-center">by C'ENCIA™</h3>
        </div>
        <div className="mainBody">
          <BlogGrid heading={'TOP PICKS'} data={trendingBlogData}/>
          <BlogGrid heading={'LATEST'} data={latestBlogData}/>
          <BodyMists data={showCaseData}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
