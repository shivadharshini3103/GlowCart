import React from "react";
import { useCart } from "../CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛍️</h2>
          <p>Add some beauty products to your cart!</p>
        </div>
      ) : (
        <>
          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={
                    item.thumbnail ||
                    item.images?.[0] ||
                    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400"
                  }
                  alt={item.title}
                  className="cart-product-image"
                />

                <div className="cart-product-details">
                  <h3>{item.title}</h3>

                  <p className="cart-price">
                    ₹{item.price}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <h3 className="item-total">
                  ₹{(item.price * item.quantity).toFixed(0)}
                </h3>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Items</span>
              <span>
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Total Amount</span>
              <strong>₹{totalPrice.toFixed(0)}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout coming soon!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;