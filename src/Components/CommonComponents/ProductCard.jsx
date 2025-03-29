import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({
  pid,
  imgUrl,
  name,
  retailPrice,
  preferredPrice,
  buyHandler,
  pageLink = "/error",
}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  return (
    <div
      className="w-[21dvw] p-5 border-2 border-solid border-accentBrwn rounded-xl bg-white dark:bg-gray-700 dark:text-lightPink font-dmSans mx-auto shadow-xl cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        navigate(pageLink);
      }}>
      <picture>
        <img src={imgUrl} className="w-full h-[300px] object-cover object-center" />
      </picture>
      <div className="textSec mt-1">
        <h3 className="text-2xl font-semibold max-h-25px">{name}</h3>
        <p>
          Retail: <strike>{retailPrice}$</strike>
        </p>
        <p>Preferred: {preferredPrice}$</p>
        <div className="btnDiv flex flex-col gap-y-0.5">
          <Button
            clickHandler={(e) => {
              e.stopPropagation();
              buyHandler(e);
            }}
            label={"Buy Now"}
            id={pid}
          />
          <Button
            clickHandler={(e) => {
              e.stopPropagation();
              if(cart.includes(pid)) {
                alert('You already have this item in your card');
                return;
              }
              const newCart = [...cart];
              newCart.push(pid);
              setCart(newCart);
              console.log(cart);
            }}
            label={"Add to cart"}
            colorClass={"bg-pink-800"}
            id={pid}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
