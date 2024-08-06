import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './TiffinServiceSummaryAndPayment.module.css';
import Navbar from '../Navbar/Navbar';
import FloatingForm from '../FloatingForm/FloatingForm';
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer';

const TiffinServiceSummaryAndPayment = () => {
  const [address, setAddress] = useState('');
  const [deliveryCharge] = useState(50); // Example delivery charge
  const [gst] = useState(18); // Example GST percentage
  const navigate = useNavigate();

  const order = JSON.parse(localStorage.getItem('tiffinOrder')) || {};

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const totalPrice = order.totalPrice;
  const totalWithCharges = totalPrice + deliveryCharge + (totalPrice * gst / 100);
  const amountInPaise = Math.round(totalWithCharges * 100); // Convert to paise

  const handlePayment = async () => {
    try {
      if (!window.Razorpay) {
        await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
      }

      const options = {
        key: 'rzp_test_w14dnADMuDa97D', // Replace with your Razorpay key id
        amount: amountInPaise, // Amount in paise
        currency: 'INR',
        name: 'YummyZone',
        description: 'Tiffin Service Payment',
        handler: function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error loading Razorpay script:', error);
    }
  };

  const handlePaymentSuccess = (response) => {
    const newOrder = {
      ...order,
      address,
      totalPrice: totalWithCharges,
      orderId: response.razorpay_payment_id,
      date: new Date().toLocaleDateString(),
    };

    const existingOrders = localStorage.getItem('orders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    navigate('/orderStatus');
  };

  return (
    <>
    <Navbar />
    <FloatingForm />
    <ChatBots />
    <div className={style.summaryAndPaymentContainer}>
      <h2>Tiffin Service Summary and Payment</h2>

      <div className={style.summaryDetails}>
        <h3>Selected Items:</h3>
        {Object.keys(order.options).map(category => (
          order.options[category].length > 0 && (
            <div key={category} className={style.categorySection}>
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              {order.options[category].map(item => (
                <p key={item.option}>{item.option} - ₹{item.price}</p>
              ))}
            </div>
          )
        ))}
        <h3>Duration: {order.duration}</h3>
        <h3>Total Price: ₹{order.totalPrice}</h3>
      </div>

      <div className={style.paymentDetails}>
        <h3>Address:</h3>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter your delivery address"
          className={style.addressInput}
        />
        <h3>Total Price (with charges): ₹{totalWithCharges.toFixed(2)}</h3>
        <button className={style.paymentButton} onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

const loadRazorpayScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Script load error'));
    document.body.appendChild(script);
  });
};

export default TiffinServiceSummaryAndPayment;
