import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-15 right-15 bg-accentBrwn text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg hover:bg-darkText hover:text-accentBrwn transition duration-300 z-50"
    >
      <FaShoppingCart className="text-2xl" />
    </button>
  );
};

export default CartButton;