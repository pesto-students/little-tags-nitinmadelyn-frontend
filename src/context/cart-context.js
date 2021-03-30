import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/cart-reducers';
const url = '';
const CartContext = React.createContext();

const initialState = {
  loading: false,
  cart: [
    //{
    //  id: 1,
    //  name: "Men Yellow Printed Round Neck T-Shirt",
    //  price: 599,
    //  description:
    //    "Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.",
    //  image:
    //    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg",
    //  amount: 1,
    //},
    //{
    //  id: 2,
    //  name: "Men Brown & Black Striped Round Neck T-shirt",
    //  price: 699,
    //  description:
    //    "Brown and black striped T-shirt, has a round neck, short sleeves",
    //  image:
    //    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2339311/2018/4/11/11523440670120-WROGN-Men-Brown--Black-Striped-Round-Neck-T-shirt-7831523440669855-1.jpg",
    //  amount: 1,
    //},
  ],
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, name, price, description, image, amount) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, description, image, amount },
    });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };
  //   const fetchData = async () => {
  //     dispatch({ type: "LOADING" });
  //     const response = await fetch(url);
  //     const cart = await response.json();
  //     dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  //   };
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
