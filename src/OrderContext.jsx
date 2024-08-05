import React, { createContext, useContext, useEffect, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const removeOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
