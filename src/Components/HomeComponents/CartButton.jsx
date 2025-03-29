import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const CartButton = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  

  const onClick = () => {
    navigate("/shop/cart");
  }

  return (
    <button
      onClick={onClick}
      className={`${location.pathname === '/shop/cart' ? 'hidden' : 'fixed'} bottom-15 right-15 bg-accentBrwn text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg hover:bg-darkText hover:text-accentBrwn transition duration-300 z-50 cursor-pointer`}>
      <FaShoppingCart className="text-2xl" />
      {cart.length > 0 && (
        <span className=" absolute bottom-0 right-0 w-7 h-7 bg-red-500 rounded-full flex justify-center items-center">
          {cart.length}
        </span>
      )}
    </button>
  );
};

export default CartButton;
