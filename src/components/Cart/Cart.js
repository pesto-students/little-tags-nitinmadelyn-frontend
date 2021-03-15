import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/cart-context";
import "./Cart.scss";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <main>
        <div
          className="login-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "49.8vh",
            minHeight: "80vh"
          }}
        >
          <h2>Your bag is empty</h2>

          <Link to="/" style={{ marginLeft: "2vw" }}>
            <button className="button-red">Back to home</button>
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="app">
      <section>
        <h2>Shopping Cart</h2>
      </section>
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">
            <b>Price</b>
          </label>
          <label className="product-quantity">
            <b>Quantity</b>
          </label>
          <label className="product-removal">
            <b>Remove</b>
          </label>
          <label className="product-line-price">
            <b>Total</b>
          </label>
        </div>

        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              ₹ 1298.00
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              ₹ 4.00
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              ₹ 15.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              ₹ {total.toFixed(2)}
            </div>
          </div>
        </div>

        <Link to="/shipping">
        <button className="checkout">Checkout</button>
        </Link>

        <Link to="/search/hoodie">
        <button className="button-red cart-clear">Continue shopping</button>
        </Link>
        <button
          className="cart-clear"
          style={{ marginLeft: "2vw" }}
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>
    </main>
  );
};

export default Cart;
