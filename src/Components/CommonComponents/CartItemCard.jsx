import React, { useContext } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { CartContext } from '../../contexts/CartContext'

const CartItemCard = ({cartData, setCartData, pid, imgUrl, name, price, qty, subtotal}) => {
  const {_, setCart} = useContext(CartContext);

  const handleQtyChange = (e, pid) => {
    const newCartData = [...cartData];
    const targetProduct = newCartData.find(product => product.pid == pid);
    const idx = newCartData.indexOf(targetProduct);
    newCartData[idx].qty = Number(e.currentTarget.value);
    newCartData[idx].subtotal = Number((targetProduct.price * e.currentTarget.value).toFixed(2));
    setCartData(newCartData);
  } 

  const removeCartItem = (pid) => {
    const newCartData = [...cartData];
    const updatedCartData = newCartData.filter(product => product.pid !== pid);
    setCartData(updatedCartData);
    setCart(updatedCartData.map(product => product.pid))
  }

  return (
    <div className='flex items-center w-full py-4'>
      <div className="w-[50%] flex items-center gap-x-2">
        <picture>
          <img src={imgUrl} className='w-10 h-10 object-cover object-center'/>
        </picture>
        <p>{name}</p>
      </div>
      <div className="w-[10%]"><p className='text-end'>{price}$</p></div>
      <div className="w-[20%] text-center">
        <select name="qty" id="qty" className='px-4 py-1 border-2 border-black' onChange={(e) => handleQtyChange(e, pid)}>
          {[1, 2, 3, 4, 5].map(qty => {
            return <option key={qty} value={qty}>{qty}</option>
          })}
        </select>
      </div>
      <div className="w-[20%] flex justify-end items-center text-end gap-x-10">
        <p>{subtotal}$</p>
        <span className='me-2 text-3xl text-gray-500 cursor-pointer' onClick={() => removeCartItem(pid)}>
          <RxCrossCircled/>
        </span>
      </div>
    </div>
  )
}

export default CartItemCard
