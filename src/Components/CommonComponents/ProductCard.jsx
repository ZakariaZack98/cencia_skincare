import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { getProductData } from "../../lib/fetch";

const ProductCard = ({ pid, imgUrl, name, retailPrice, preferredPrice, buyHandler, pageLink = "/error" }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const productData = getProductData();
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
              //!add a function to prevent dupe products inside cart
              const newCart = [...cart];
              const targetProduct = productData.find((product) => product.pid == pid);
              const productForCart = {
                pid: targetProduct.pid,
                imgUrl: targetProduct.imgUrl,
                name: targetProduct.name,
                price: targetProduct.preferredPrice,
                qty: 1,
                subtotal: targetProduct.preferredPrice,
              };
              newCart.push(productForCart);
              setCart(newCart);
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
