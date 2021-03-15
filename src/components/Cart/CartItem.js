import React from "react";
import { useGlobalContext } from "../../context/cart-context";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, title, price, amount, description }) => {
  price = parseFloat(price);
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-title">{title}</div>
        <p className="product-description">{description}</p>
      </div>
      <div style={{ marginTop: "10px" }} className="product-price">
        ₹ {price.toFixed(2)}
      </div>
      <div className="product-quantity">
        <button
          type="button"
          className="button"
          onClick={() => toggleAmount(id, "dec")}
        >
          <FaMinus />
        </button>
        <p style={{ marginLeft: "1vw", marginTop: "10px" }} className="amount">
          {amount}
        </p>
        <button
          style={{ marginLeft: "1vw" }}
          type="button"
          className="button"
          onClick={() => toggleAmount(id, "inc")}
        >
          <FaPlus />
        </button>
      </div>
      <div className="product-removal">
        <button className="remove-product" onClick={() => remove(id)}>
          <FaTrash />
        </button>
      </div>
      <div style={{ marginTop: "10px" }} className="product-line-price">
        ₹ {(price * amount).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
