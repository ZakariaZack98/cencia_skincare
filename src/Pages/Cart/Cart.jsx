import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItemCard from "../../Components/CommonComponents/CartItemCard";
import Button from "../../Components/CommonComponents/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const getSubTotal = () => {
    const res = Number(
      cart
        .map((product) => product.subtotal)
        .reduce((a, b) => Number(a) + Number(b), 0)
        .toFixed(2)
    );
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
      <div className="clrOverlay w-full h-full py-6 sm:py-10 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col px-2 sm:px-4 md:px-8">
          <div className="flex flex-col justify-center lg:flex-row w-full lg:items-stretch items-center gap-y-0 lg:gap-x-7">
            <div className="cartList lg:min-h-[50dvh] min-h-fit w-full lg:w-[60%] p-2 sm:p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink font-semibold rounded-2xl mb-6 lg:mb-0">
              {cart?.length > 0 ? (
                <div>
                  <div className="hidden md:flex pb-3 border-b-gray-300 border-b-4">
                    <p className="w-[50%] text-base md:text-xl">Product</p>
                    <p className="w-[10%] text-base md:text-xl text-end">Price</p>
                    <p className="w-[20%] text-base md:text-xl text-center">Quantity</p>
                    <p className="w-[20%] text-base md:text-xl ms-3">Subtotal</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    {cart?.map((product, idx) => (
                      <div key={product.pid} className={idx === cart.length - 1 ? "" : "border-b-[1px] border-b-gray-300"}>
                        <CartItemCard
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
                <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center py-10">
                  <p className="font-bold dark:text-lightPink text-2xl sm:text-3xl md:text-4xl text-center">There is No Items In cart.</p>
                  <Button label={'Continue Shopping'} clickHandler={() => navigate('/shop')}/>
                </div>
              )}
            </div>
            {
              cart.length > 0 && (
                <div className="amountCalculation lg:min-h-[50dvh] min-h-fit w-full lg:w-[40%] p-2 sm:p-4 bg-lightPink text-gray-800 dark:bg-gray-800 dark:text-lightPink rounded-2xl">
              <p className="text-lg sm:text-xl pb-3 border-b-gray-300 border-b-4 font-semibold">Cart Total</p>
              
                <div>
                  <div className="amount flex justify-between py-3 sm:py-5">
                    <p className="text-lg sm:text-2xl font-semibold">Subtotal</p>
                    <p className="text-lg sm:text-2xl font-semibold">{getSubTotal()}$</p>
                  </div>
                  <div className="flex justify-between text-blue-500">
                    <p className="text-base sm:text-lg font-semibold">
                      Vat <span className="text-xs sm:text-sm ms-2">15%</span>
                    </p>
                    <p className="text-base sm:text-lg font-semibold">{getCalculatedVat()}$</p>
                  </div>
                  <div className="flex justify-between border-b-gray-300 border-b-4 pb-3 text-green-600">
                    <p className="text-base sm:text-lg font-semibold">Shipping Fee</p>
                    <p className="text-base sm:text-lg font-semibold">10.00$</p>
                  </div>
                  <div className="amount flex justify-between py-3 sm:py-5">
                    <p className="text-lg sm:text-2xl font-semibold">Grand Total</p>
                    <p className="text-lg sm:text-2xl font-semibold">{getGrandTotal()}$</p>
                  </div>
                  <img src="https://livepure.com/img/footer_cards.png" alt="" className="ml-auto cursor-pointer max-w-[180px] sm:max-w-[220px] md:max-w-[300px]" />
                </div>
             
            </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
