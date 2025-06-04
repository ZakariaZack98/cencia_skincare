import React, { useEffect } from "react";
import { getProductData } from "../../lib/fetch";
import InstructionSlider from "../../Components/HomeComponents/InstructionSlider";
import ProductCard from "../../Components/CommonComponents/ProductCard";

const Shop = () => {
  const productData = getProductData();
  const instructionSliderData = productData.map((item) => item.sliderData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="productGrid bg-lightPink dark:bg-gray-800 lg:py-25 md:py-20 py-15">
        <h1 className="text-center text-accentBrwn dark:text-gray-700 font-black lg:text-[70px] md:text-[50px] sm:text-[40px] text-[34px] font-dmSans md:mb-20 mb-5">
          Complete your C'ENCIA Routine
        </h1>
        <div className="w-full ">
          <div className="lg:w-4/5 xl:w-6/10 w-19/20 mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10">
            {productData?.map((item) => (
              <ProductCard
                key={item.pid}
                pid={item.pid}
                imgUrl={item.imgUrl}
                name={item.name}
                preferredPrice={item.preferredPrice}
                retailPrice={item.retailPrice}
                buyHandler={item.buyHandler}
                cartHandler={item.cartHandler}
                pageLink={item.pageLink}
              />
            ))}
          </div>
        </div>
      </div>
      <InstructionSlider data={instructionSliderData} />
    </>
  );
};

export default Shop;