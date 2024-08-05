import React, { useState, useEffect } from "react";
import style from "./OrderStatus.module.css";
import Navbar from "../Navbar/Navbar";
import FloatingForm from "../FloatingForm/FloatingForm";

function OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleClearAll = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <>
      <Navbar />
      <FloatingForm />
      <div className={style.orderStatus}>
        <h2>Order Status</h2>

        {/* Food Orders */}
        {orders.filter(order => order.type !== 'Tiffin Service').length === 0 ? (
          <p>No food orders found.</p>
        ) : (
          <>
            <h3>Food Orders</h3>
            {orders.filter(order => order.type !== 'Tiffin Service').map((order) => (
              <div key={order.orderId} className={style.orderItem}>
                <div className={style.orderDetails}>
                  <h3>Order ID: {order.orderId}</h3>
                  <p>Date: {order.date}</p>
                  <p>Address: {order.address}</p>
                  <p>Total Price: ₹{order.totalPrice ? order.totalPrice.toFixed(2) : "N/A"}</p>
                </div>
                <button onClick={() => handleDeleteOrder(order.orderId)}>
                  Delete Order
                </button>
              </div>
            ))}
          </>
        )}

        {/* Tiffin Service Orders */}
        {orders.filter(order => order.type === 'Tiffin Service').length === 0 ? (
          <p>No tiffin service orders found.</p>
        ) : (
          <>
            <h3>Tiffin Service Orders</h3>
            {orders.filter(order => order.type === 'Tiffin Service').map((order) => (
              <div key={order.orderId} className={style.orderItem}>
                <div className={style.orderDetails}>
                  <h3>Order ID: {order.orderId}</h3>
                  <p>Date: {order.date}</p>
                  <p>Duration: {order.duration}</p>
                  <p>Total Price: ₹{order.totalPrice ? order.totalPrice.toFixed(2) : "N/A"}</p>
                  <h4>Selected Items:</h4>
                  <ul>
                    {Object.entries(order.options).map(([category, items]) => (
                      items.length > 0 && (
                        <li key={category}>
                          <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>
                          <ul>
                            {items.map((item, index) => (
                              <li key={index}>{item.option} </li>
                            ))}
                          </ul>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
                <button onClick={() => handleDeleteOrder(order.orderId)}>
                  Delete Order
                </button>
              </div>
            ))}
          </>
        )}

        <button onClick={handleClearAll} className={style.clearAll}>
          Clear All Orders
        </button>
      </div>
    </>
  );
}

export default OrderStatus;
