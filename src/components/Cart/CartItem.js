import React from "react";
import { useGlobalContext } from "../../context/cart-context";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount, description }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-title">{title}</div>
        <p className="product-description">{description}</p>
      </div>
      <div className="product-price">₹ {price.toFixed(2)}</div>
      <div className="product-quantity">
        <button
          type="button"
          className="button"
          onClick={() => toggleAmount(id, "dec")}
        >
          <FaMinus />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          className="button"
          onClick={() => toggleAmount(id, "inc")}
        >
          <FaPlus />
        </button>
      </div>
      <div className="product-removal">
        <button className="remove-product" onClick={() => remove(id)}>
          Remove
        </button>
      </div>
      <div className="product-line-price">₹ {(price * amount).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
