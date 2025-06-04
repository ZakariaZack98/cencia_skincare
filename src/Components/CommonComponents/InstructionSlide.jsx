import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../../contexts/CartContext";
import { AddToCart, ExistanceInCart } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const InstructionSlide = ({
  pid,
  pageLink,
  imgUrl,
  title,
  textContent,
  onProductPage,
  retailPrice,
  preferredPrice,
}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 dark:text-lightPink p-4 md:p-10 text-accentBrwn gap-6 md:gap-0">
      <picture className="w-full md:w-2/5 flex-shrink-0 flex justify-center mb-4 md:mb-0 md:mr-8">
        <img src={imgUrl} alt="" className="h-[30vh] md:h-[40vh] lg:h-[60vh] w-auto max-w-full object-contain" />
      </picture>
      <div className="textPart w-full md:w-3/5 flex flex-col pb-5 md:gap-y-5 xl:translate-x-0 translate-x-0">
        <h2 className="title font-bodoni text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] w-full mb-2 md:mb-4">{title}</h2>
        <p className="font-playfair text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl leading-4 sm:leading-6 max-w-full mb-2 md:mb-4">
          {textContent}
        </p>
        <div className="w-full max-w-[350px]">
          {onProductPage ? (
            <div>
              <div className="flex gap-x-2 md:gap-x-4 mb-2">
                <strike className="text-base sm:text-xl font-dmSans font-black text-red-500">{retailPrice}$</strike>
                <span className="text-lg sm:text-2xl md:text-4xl font-dmSans font-black text-green-500">{preferredPrice}$</span>
              </div>
              <div className="flex gap-x-2">
                <Button
                  label={`${ExistanceInCart(cart, pid) ? "Added to Cart" : "Add to Cart"}`}
                  colorClass={`${ExistanceInCart(cart, pid) ? "bg-green-500" : "bg-pink-800"}`}
                  clickHandler={() => AddToCart(cart, setCart, pid)}
                />
                <Button label={"Buy Now"} />
              </div>
            </div>
          ) : (
            <Button
              label={"Learn More"}
              clickHandler={() => {
                navigate(pageLink);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructionSlide;
