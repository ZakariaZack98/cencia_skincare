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
    <div className="w-full flex items-center  bg-white dark:bg-gray-700 dark:text-lightPink p-10 text-accentBrwn">
      <picture className="sm:w-[40%] w-1/4 lg:translate-x-15 translate-x-0">
        <img src={imgUrl} alt="" className="lg:h-[70dvh] md:scale-100 scale-150 sm:h-[20dvh] h-[14dvh] w-full object-contain" />
      </picture>
      <div className="textPart sm:w-[60%] w-3/4 flex flex-col sm:gap-y-5 gap-y-1.5 xl:translate-x-0 translate-x-5">
        <h2 className="title font-bodoni xl:text-[40px] sm:text-xl text-base md:w-1/2 w-full">{title}</h2>
        <p className="lg:text-2xl sm:text-sm text-xs font-playfair sm:leading-6 leading-3 sm:max-w-[90%] max-w-full">
          {textContent}
        </p>
        <div className="w-50">
          {onProductPage ? (
            <div>
              <div className="flex gap-x-4 mb-2">
                <strike className="text-2xl font-dmSans font-black text-red-500">{retailPrice}$</strike>
                <span className="text-4xl font-dmSans font-black text-green-500">{preferredPrice}$</span>
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
