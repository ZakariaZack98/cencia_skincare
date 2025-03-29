import { getProductData } from "../lib/fetch";

const productData = getProductData();

/**
 * TODO: Check if the product already exists in the cart
 * @param {Array} cart
 * @param {number} pid
 * @returns {boolean} - True if the product exists, false otherwise
 */
export const ExistanceInCart = (cart, pid) =>
  Boolean(cart.find((product) => product.pid === pid));

/**
 * TODO: Add a product to the cart
 * @param {Array} cart 
 * @param {Function} setCart
 * @param {number} pid
 */
export const AddToCart = (cart, setCart, pid) => {
  if (ExistanceInCart(cart, pid)) {
    alert("Item already exists in cart");
    return;
  }
  const newCart = [...cart];
  const targetProduct = productData.find((product) => product.pid === pid);
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
};