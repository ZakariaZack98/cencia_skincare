import React from "react";
import IngredientCard from "../CommonComponents/IngredientCard";

const Ingredients = ({data}) => {
  return (
    <div className="bg-lightPink dark:bg-gray-800 pt-25 pb-45">
      <div className="container mx-auto">
        <h1 className="text-center text-accentBrwn dark:text-gray-500 font-black text-[80px] font-dmSans mb-10" data-aos="fade-up" data-aos-duration="800">
          Top Ingredients
        </h1>
        <div className="flex justify-around w-full">
          {
            data?.map((ingredientItem, idx) => <IngredientCard data={ingredientItem} isOdd={idx%2==1 ? true : false} animationDelay={idx * 200}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
