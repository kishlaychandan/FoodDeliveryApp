import React from 'react';
import { useCart } from '../../CartContext'; // Adjust according to your cart context implementation
import style from './Cart.module.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import FloatingForm from '../FloatingForm/FloatingForm';
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer';
function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleProceedToOrder = () => {
    if (cartItems.length === 0) return alert('Cart is empty');
    navigate('/order-summary');
  };

  const handleIncrement = (item) => {
    updateQuantity(item.id, (item.quantity || 1) + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  // Add console logs to debug
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`);
    return acc + itemTotal;
  }, 0);

  console.log('Total Price:', totalPrice);

  return (
    <>
      <Navbar />
      <FloatingForm />
      <ChatBots />
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
                    <p>Rs.{item.price}</p>
                    <div className={style.btn}>
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleIncrement(item)}>+</button>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.total}>
              <p>Total: ₹{totalPrice.toFixed(2)}</p>
              <button onClick={handleProceedToOrder}>Proceed to Order</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
