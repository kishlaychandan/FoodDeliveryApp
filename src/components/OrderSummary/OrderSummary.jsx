import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./OrderSummary.module.css";
import Navbar from "../Navbar/Navbar";
import { useCart } from "../../CartContext"; // Import the context

function OrderSummary() {
  const { cartItems, clearCart } = useCart(); // Use the context
  const [address, setAddress] = useState("");
  const [deliveryCharge] = useState(50); // Example delivery charge
  const [gst] = useState(18); // Example GST percentage
  const [order, setOrder] = useState(null); // State to hold order details
  const navigate = useNavigate();

  useEffect(() => {
    // Check if it's a tiffin order or cart order
    const tiffinOrder = JSON.parse(localStorage.getItem("tiffinOrder"));
    if (tiffinOrder) {
      setOrder(tiffinOrder);
      localStorage.removeItem("tiffinOrder"); // Remove tiffin order from local storage
    } else {
      // If it's a cart order
      if (cartItems.length > 0) {
        const orderData = {
          cartItems,
          address,
          totalPrice: cartItems.reduce(
            (acc, item) => acc + item.price * (item.quantity || 1),
            0
          ),
        };
        console.log('Order Data:', orderData);
        setOrder(orderData);
      } else {
        // If no order data found, navigate back to home or error page
        navigate("/");
      }
    }
  }, [cartItems, address, navigate]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  if (!order) return null; // Return null while the order is loading

  const totalPrice = order.cartItems
    ? order.cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      )
    : order.totalPrice;

  console.log('Total Price:', totalPrice);

  const totalWithCharges = totalPrice + deliveryCharge + (totalPrice * gst / 100);

  const handlePayment = async () => {
    try {
      // Load the Razorpay script if it's not already loaded
      if (!window.Razorpay) {
        await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
      }

      const options = {
        key: "rzp_test_w14dnADMuDa97D", // Replace with your Razorpay key id
        amount: totalWithCharges * 100, // Amount in paise
        currency: "INR",
        name: "YummyZone",
        description: "Order Payment",
        handler: function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error loading Razorpay script:", error);
    }
  };

  const handlePaymentSuccess = (response) => {
    const newOrder = {
      ...order,
      orderId: response.razorpay_payment_id,
      date: new Date().toLocaleDateString(),
    };

    const existingOrders = localStorage.getItem("orders");
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear the cart from context if it was a cart order
    if (order.cartItems) {
      clearCart();
    }

    // Navigate to the order status page
    navigate("/orderStatus");
  };

  const loadRazorpayScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Failed to load script'));
      document.body.appendChild(script);
    });
  };

  return (
    <>
      <Navbar />
      <div className={style.orderSummary}>
        <h2>Order Summary</h2>
        <div className={style.orderDetails}>
          <h3>Items:</h3>
          {(order.cartItems || []).map((item) => (
            <div key={item.id} className={style.orderItem}>
              <p>{item.name} - Quantity: {item.quantity || 1}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
        </div>
        <div className={style.address}>
          <label htmlFor="address">Delivery Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
          />
        </div>
        <div className={style.charges}>
          <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
          <p>Delivery Charge: ₹{deliveryCharge.toFixed(2)}</p>
          <p>GST: ₹{((totalPrice * gst) / 100).toFixed(2)}</p>
          <h3>Total: ₹{totalWithCharges.toFixed(2)}</h3>
        </div>
        <button onClick={handlePayment}>Proceed to Pay</button>
      </div>
    </>
  );
}

export default OrderSummary;
