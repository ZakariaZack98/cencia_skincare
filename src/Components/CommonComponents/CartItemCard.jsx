import React, { useContext } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { CartContext } from '../../contexts/CartContext'

const CartItemCard = ({pid, imgUrl, name, price, qty, subtotal}) => {
  const {cart, setCart} = useContext(CartContext);

  const handleQtyChange = (e, pid) => {
    const newCart = [...cart];
    const targetProduct = newCart.find(product => product.pid == pid);
    const idx = newCart.indexOf(targetProduct);
    newCart[idx].qty = Number(e.currentTarget.value);
    newCart[idx].subtotal = Number((targetProduct.price * e.currentTarget.value).toFixed(2));
    setCart(newCart);
  } 

  const removeCartItem = (pid) => {
    const newCart = [...cart];
    const updatedCart = newCart.filter(product => product.pid !== pid);
    setCart(updatedCart);
  }

  return (
    <div className='flex items-center w-full py-4 md:text-base text-xs'>
      <div className="w-[50%] flex items-center gap-x-2">
        <picture>
          <img src={imgUrl} className='w-10 h-10 object-cover object-center'/>
        </picture>
        <p>{name}</p>
      </div>
      <div className="w-[10%]"><p className='text-end'>{price}$</p></div>
      <div className="w-[20%] text-center sm:ms-0 ms-2">
        <select name="qty" id="qty" className='sm:px-4 px-1 py-1 border-2 border-black' value={qty} onChange={(e) => handleQtyChange(e, pid)}>
          {[1, 2, 3, 4, 5].map(qty => {
            return <option key={qty} value={qty}>{qty}</option>
          })}
        </select>
      </div>
      <div className="w-[20%] flex justify-end items-center text-end sm:gap-x-10 gap-2">
        <p>{subtotal}$</p>
        <span className='sm:me-2 me-0 sm:text-3xl text-base text-gray-500 cursor-pointer' onClick={() => removeCartItem(pid)}>
          <RxCrossCircled/>
        </span>
      </div>
    </div>
  )
}

export default CartItemCard
