import React from "react";
import { getProductData } from "../../lib/fetch";
import InstructionSlider from "../../assets/Components/HomeComponents/InstructionSlider";
import ProductCard from "../../assets/Components/CommonComponents/ProductCard";

const Shop = () => {
  const productData = getProductData();
  const instructionSliderData = productData.map(item => item.sliderData);
  return (
    <>
      <div className="productGrid bg-lightPink dark:bg-gray-800 py-50">
        <h1 className="text-center text-accentBrwn dark:text-gray-700 font-black text-[80px] font-dmSans mb-20">
          Complete your C'ENCIA Collection
        </h1>
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-y-20 flex-wrap my-10">
            {productData?.map((item) => {
              return (
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
              );
            })}
          </div>
        </div>
      </div>
      <InstructionSlider data={instructionSliderData}/>
    </>
  );
};

export default Shop;
