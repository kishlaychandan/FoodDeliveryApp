import React, { useState, useEffect } from "react";
import style from "./Cart.module.css";
import Navbar from "../Navbar/Navbar";
import LocationPicker from "../Location/LocationPicker";

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleIncrement = (item) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      )
    );
  };

  const handleDecrement = (item) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const handleRemove = (item) => {
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleProceedToPay = () => {
    // Handle payment logic
    alert("Proceeding to payment");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar />
      <LocationPicker />
      <div className={style.carts}>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className={style.cartItem}>
              {cartItems.map((item) => (
                <div key={item.id} className={style.cart}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <div className={style.btn}>
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleIncrement(item)}>+</button>
                      <button onClick={() => handleRemove(item)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className={style.total}>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleProceedToPay}>Proceed to Pay</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
