import React from "react";


const Postbody = ({matchedPostData, textCollections, imagesCollection}) => {
  return (
    <div className="postBody w-[70%] dark:text-lightPink">
      <div className="tags flex justify-center gap-5 font-dmSans font-light text-accentBrwn">
        {
          matchedPostData?.tags?.map((tag, idx) => (
            <span key={idx} className="pb-1 border-b-accentBrwn border-b-1">
              {tag.toUpperCase()}
            </span>
          ))
          // !! the keys need to be fixed here
        }
      </div>
      <h1 className="text-3xl text-center font-playfair py-2 ">{matchedPostData.title}</h1>
      <div className="flex justify-center gap-x-5 py-2 w-1/2 mx-auto opacity-50">
        <p className="font-bold">{matchedPostData.auther}</p>
        <p>{matchedPostData.publishedAt}</p>
      </div>
      {textCollections?.map((text, idx) => {
        return (
          <div key={idx} className="w-full">
            <picture className="my-4">
              <img src={imagesCollection[idx] || ""} className="w-full" />
            </picture>
            <p className="my-8 text-xl font-playfair">{text || ""}</p>
          </div>
        );
      })}
      {!textCollections && (
        <h1 className="text-4xl text-red text-center pt-20 font-bold">⚠️ Content is unavailable ⚠️</h1>
      )}
    </div>
  );
};

export default Postbody;
