import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './TiffinService.module.css';
import Navbar from '../Navbar/Navbar';
import FloatingForm from '../FloatingForm/FloatingForm';
import ChatBots from '../ChatBot/ChatBots';

const TiffinService = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    roti: [],
    dal: [],
    sabji: [],
    salad: [],
    pickle: [],
    raita: [],
    milk: [],
    sweet: [],
    lassi: [],
    chinese: [],
  });
  
  const [duration, setDuration] = useState('7 days');
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const prices = {
    roti: {
      'Aloo Paratha': 15,
      'Gobi Paratha': 18,
      'Paneer Paratha': 20,
      'Chapati': 10,
      'Missi Roti': 12,
    },
    dal: {
      'Dal Tadka': 30,
      'Dal Makhani': 35,
      'Chana Dal': 25,
      'Toor Dal': 28,
      'Moong Dal': 22,
    },
    sabji: {
      'Aloo Gobi': 40,
      'Bhindi Masala': 45,
      'Palak Paneer': 50,
      'Baingan Bharta': 42,
      'Shahi Paneer': 55,
    },
    salad: {
      'Kachumber Salad': 20,
      'Cucumber Salad': 25,
      'Tomato Onion Salad': 22,
      'Carrot and Beetroot Salad': 30,
    },
    pickle: {
      'Mango Pickle': 15,
      'Lemon Pickle': 15,
      'Mixed Vegetable Pickle': 18,
      'Green Chilli Pickle': 20,
    },
    raita: {
      'Cucumber Raita': 20,
      'Boondi Raita': 25,
      'Mint Raita': 22,
      'Onion Raita': 18,
    },
    milk: {
      'Plain Milk': 20,
      'Masala Milk': 25,
      'Badam Milk': 30,
    },
    sweet: {
      'Gulab Jamun': 15,
      'Jalebi': 20,
      'Kheer': 25,
      'Rasgulla': 18,
    },
    lassi: {
      'Sweet Lassi': 25,
      'Salted Lassi': 20,
      'Mango Lassi': 30,
    },
    chinese: {
      'Vegetable Spring Rolls': 35,
      'Veg Manchurian': 45,
      'Chow Mein': 50,
      'Fried Rice': 40,
    },
  };

  const handleOptionChange = (category, option) => {
    const price = prices[category][option];
    const isSelected = selectedOptions[category].some(item => item.option === option);

    setSelectedOptions(prev => {
      const updatedCategory = isSelected
        ? prev[category].filter(item => item.option !== option)
        : [...prev[category], { option, price }];

      const prevTotal = prev[category].reduce((acc, item) => acc + item.price, 0);
      const updatedTotal = updatedCategory.reduce((acc, item) => acc + item.price, 0);

      setTotalPrice(totalPrice - prevTotal + updatedTotal);

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleProceedToSummary = () => {
    const order = {
      type: 'Tiffin Service',
      options: selectedOptions,
      duration,
      totalPrice,
      orderId: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem('tiffinOrder', JSON.stringify(order));
    navigate('/tiffin-summary-payment'); // Redirect to the combined Summary and Payment page
  };

  return (
    <>
    <Navbar />
    <FloatingForm />
    <ChatBots />
    <div className={style.tiffinService}>
      <h2>Customize Your Tiffin Service</h2>
      {Object.keys(prices).map((category) => (
        <div key={category} className={style.categoryContainer}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {Object.keys(prices[category]).map((item) => (
            <button
              key={item}
              onClick={() => handleOptionChange(category, item)}
              className={selectedOptions[category].some(option => option.option === item) ? style.selected : ''}
            >
              {item} - ₹{prices[category][item]}
            </button>
          ))}
        </div>
      ))}
      <div>
        <label htmlFor="duration">Select Duration:</label>
        <select id="duration" value={duration} onChange={handleDurationChange}>
          <option value="7 days">7 Days</option>
          <option value="1 month">1 Month</option>
          <option value="2 months">2 Months</option>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
        </select>
      </div>
      <div className={style.totalPrice}>Total Price: ₹{totalPrice}</div>
      <button onClick={handleProceedToSummary} className={style.proceedButton}>Proceed to Summary</button>
    </div>
    </>
  );
};

export default TiffinService;
