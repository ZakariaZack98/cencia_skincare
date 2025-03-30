import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getBlogData } from "../../lib/fetch";
import BlogCard from "../../Components/CommonComponents/BlogCard";

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
    }, []);

  return (
    <div className="container mx-auto">
      <div className="headers m-20">
        <div className="h1 font-agraham text-[40px] text-center text-black">The beauty lookbook Blog</div>
        <h3 className="font-bodoni text-4xl text-accentBrwn text-center">by C'ENCIA™</h3>
      </div>
      <div className="w-full flex posts-stretch gap-x-10">
        <div className="postBody w-[70%]">
          <div className="tags flex justify-center gap-5 font-dmSans font-light text-accentBrwn">
            {
              matchedBlogPost?.tags?.map((tag, idx) => <span key={idx} className="pb-1 border-b-accentBrwn border-b-1">{tag.toUpperCase()}</span>)
              // !! the keys need to be fixed here
            }
          </div>
          <h1 className="text-3xl text-center font-playfair py-2">{matchedBlogPost.title}</h1>
          <div className="flex justify-center gap-x-5 py-2 w-1/2 mx-auto opacity-50">
            <p className="font-bold">{matchedBlogPost.auther}</p>
            <p>{matchedBlogPost.publishedAt}</p>
          </div>
          {
            textCollections?.map((text, idx) => {
              return (
                <div className="w-full">
                  <picture className="my-4">
                    <img src={imagesCollection[idx] || ''} className="w-full"/>
                  </picture>
                  <p className="my-8 text-xl font-playfair">{text || ''}</p>
                </div>
              )
            })
          }
        </div>
        <div className="sideBar w-[30%] flex flex-col gap-y-4">
          <div className="sidebarHeading pb-2 border-b-gray-300 border-b-4">
            <h2 className="text-3xl font-dmSans font-bold ">Latest Posts</h2>
          </div>
          {sideBarBlogData?.map((post) => (
            <BlogCard
              id={post.id}
              imgUrl={post.imgUrl}
              auther={post.auther}
              date={post.publishedAt}
              title={post.title}
              summery={post.summery}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
