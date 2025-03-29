import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { getProductData } from "../../lib/fetch";
import CartItemCard from "../../Components/CommonComponents/CartItemCard";

const Cart = () => {
  const productData = getProductData();
  const { cart, setCart } = useContext(CartContext);

  // TODO: using the cart elements (product id) to find the desired product from the productData array
  const fetchedCartProducts =  cart.map((cartItemID) => productData.find((product) => product.pid == cartItemID))

  const [cartData, setCartData] = useState(fetchedCartProducts.map(product => {
    return {
      pid: product.pid,
      imgUrl: product.imgUrl,
      name: product.name,
      price: product.preferredPrice,
      qty: 1,
      subtotal: product.preferredPrice,
    }
  }))
  

  return (
    <div className="cart bg-cover bg-center bg-no-repeat z-0 font-dmSans">
      <div className="clrOverlay w-full h-full py-30 z-10">
        <div className="w-[95dvw] mx-auto flex flex-col">
          <div className="flex w-full items-stretch gap-x-7">
            <div className="cartList w-[60%] p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink font-semibold rounded-2xl ">
              <div className="flex pb-2 border-b-gray-300 border-b-4">
                <p className="w-[50%] text-xl">Product</p>
                <p className="w-[10%] text-xl text-end">Price</p>
                <p className="w-[20%] text-xl text-center">Quantity</p>
                <p className="w-[20%] text-xl ms-3">Subtotal</p>
              </div>
              <div className="flex flex-col">
              {
                cartData?.map(product => <CartItemCard key={product.pid} cartData={cartData} setCartData={setCartData} pid={product.pid} imgUrl={product.imgUrl} name={product.name} price={product.price} qty={product.qty} subtotal={product.subtotal}/>)
              }
              </div>
            </div>
            <div className="amountCalculation w-[40%] p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink rounded-2xl">
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
