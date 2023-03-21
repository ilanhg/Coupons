import React, { createContext, useContext, useState } from "react";
export default function Cart() {
  let globleState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuant: () => null,
    decreaseQuant: () => null,
  };
  let cartContex = createContext(globleState);
  let useCart = () => useContext(cartContex);
  let CartProvider = ({ children }) => {
    let [cart, setCart] = useState(globleState.cart);
    let cartItemCount = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    let addToCart = (product) => {
      let productId = cart.findIndex((item) => item.product.id === product.id);
      if(productId !== -1){
        increaseQuant(product.id);
      }else{
        setCart([...cart, {product, quantity: 1}]);
        }
      };
      let removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
      };
      let increaseQuant =(productId) => {
        let copy = cart.slice();
        let productIdInner = copy.findIndex((item) => item.product.id === productId);
        if(productIdInner !== -1){
          copy[productIdInner].quantity += 1;
          setCart(copy);
        }
      };
      let decreaseQuant =(productId) => {
        let copy = cart.slice();
        let productIdInner = copy.findIndex((item) => item.product.id === productId);
        if(productIdInner !== -1){
          copy[productIdInner].quantity -= 1;
          setCart(copy);
        }
      };
      return(
        <cartContex.Provider
        value={{
          cart,
          cartItemCount,
          addToCart,
          removeFromCart,
          increaseQuant,
          decreaseQuant
        }}>
        </cartContex.Provider>
      )
    }
  };