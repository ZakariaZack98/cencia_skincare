import React, { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../../contexts/CartContext";
import { AddToCart, ExistanceInCart } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const InstructionSlide = ({pid, pageLink, imgUrl, title, textContent, onProductPage, retailPrice, preferredPrice }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="w-full flex items-center  bg-white dark:bg-gray-700 dark:text-lightPink p-10 text-accentBrwn">
      <picture className="w-[40%] translate-x-15">
        <img src={imgUrl} alt="" className="h-[70dvh]" />
      </picture>
      <div className="textPart w-[60%] flex flex-col gap-y-5 ">
        <h2 className="title font-bodoni text-[40px] w-1/2">{title}</h2>
        <p className="text-2xl font-playfair leading-6 max-w-[90%]">{textContent}</p>
        <div className="w-50">
          {onProductPage ? (
            <div>
              <div className="flex gap-x-4 mb-2">
                <strike className="text-2xl font-dmSans font-black text-red-500">{retailPrice}$</strike>
                <span className="text-4xl font-dmSans font-black text-green-500">{preferredPrice}$</span>
              </div>
              <div className="flex gap-x-2">
                <Button label={`${ExistanceInCart(cart, pid) ? 'Added to Cart' : "Add to Cart"}`} colorClass={`${ExistanceInCart(cart, pid) ? 'bg-green-500' : 'bg-pink-800'}`} clickHandler={() => AddToCart(cart, setCart, pid)}/>
                <Button label={"Buy Now"} />
              </div>
            </div>
          ) : (
            <Button label={"Learn More"} clickHandler={() => {
              navigate(pageLink)
            }}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructionSlide;
