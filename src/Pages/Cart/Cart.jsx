import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItemCard from "../../Components/CommonComponents/CartItemCard";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const getSubTotal = () => {
    const res = Number(
      cart
        .map((product) => product.subtotal)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2)
    );
    console.log("subt", res);
    return res;
  };

  const getCalculatedVat = () => Number(((getSubTotal() * 15) / 100).toFixed(2));

  const getGrandTotal = () => (getSubTotal() + getCalculatedVat() + 10).toFixed(2);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-[75dvh] cart bg-cover bg-center bg-no-repeat z-0 font-dmSans">
      <div className="clrOverlay w-full h-full py-10 z-10">
        <div className="w-[95dvw] mx-auto flex flex-col">
          <div className="flex w-full items-stretch gap-x-7">
            <div className="cartList min-h-[50dvh] w-[60%] p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink font-semibold rounded-2xl">
              {cart?.length > 0 ? (
                <div>
                  <div className="flex pb-3 border-b-gray-300 border-b-4">
                    <p className="w-[50%] text-xl">Product</p>
                    <p className="w-[10%] text-xl text-end">Price</p>
                    <p className="w-[20%] text-xl text-center">Quantity</p>
                    <p className="w-[20%] text-xl ms-3">Subtotal</p>
                  </div>
                  <div className="flex flex-col">
                    {cart?.map((product, idx) => (
                      <div className={idx == cart.length - 1 ? "" : "border-b-[1px] border-b-gray-300"}>
                        <CartItemCard
                          key={product.pid}
                          pid={product.pid}
                          imgUrl={product.imgUrl}
                          name={product.name}
                          price={product.price}
                          qty={product.qty}
                          subtotal={product.subtotal}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="font-bold dark:text-lightPink text-4xl">There is No Items In cart.</p>
                </div>
              )}
            </div>
            <div className="amountCalculation min-h-[50dvh] w-[40%] p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink rounded-2xl">
              <p className="text-xl pb-3 border-b-gray-300 border-b-4 font-semibold">Cart Total</p>
              {cart?.length > 0 && (
                <div>
                  <div className="amount flex justify-between py-5">
                    <p className="text-2xl font-semibold">Subtotal</p>
                    <p className="text-2xl font-semibold">{getSubTotal()}$</p>
                  </div>
                  <div className="flex justify-between text-blue-500">
                    <p className="text-lg font-semibold">
                      Vat <span className="text-sm ms-2">15%</span>
                    </p>
                    <p className="text-lg font-semibold">{getCalculatedVat()}$</p>
                  </div>
                  <div className="flex justify-between  border-b-gray-300 border-b-4 pb-3 text-green-600">
                    <p className="text-lg font-semibold">Shipping Fee</p>
                    <p className="text-lg font-semibold">10.00$</p>
                  </div>
                  <div className="amount flex justify-between py-5">
                    <p className="text-2xl font-semibold">Grand Total</p>
                    <p className="text-2xl font-semibold">{getGrandTotal()}$</p>
                  </div>
                  <img src="https://livepure.com/img/footer_cards.png" alt="" className="ml-auto cursor-pointer" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
