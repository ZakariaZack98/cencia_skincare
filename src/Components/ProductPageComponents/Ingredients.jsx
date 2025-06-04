import React from "react";
import IngredientCard from "../CommonComponents/IngredientCard";

const Ingredients = ({data}) => {
  return (
    <div className="bg-lightPink dark:bg-gray-800 pt-10 md:pt-30 pb-20 md:pb-42">
      <div className="container mx-auto">
        <h1 className="text-center text-accentBrwn dark:text-gray-500 font-black text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-dmSans mb-6 md:mb-10" data-aos="fade-up" data-aos-duration="800">
          Top Ingredients
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 md:w-19/20 w-9/10 mx-auto">
          {
            data?.map((ingredientItem, idx) => <IngredientCard key={ingredientItem.id} data={ingredientItem} isOdd={idx%2==1 ? true : false} animationDelay={idx * 200}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
