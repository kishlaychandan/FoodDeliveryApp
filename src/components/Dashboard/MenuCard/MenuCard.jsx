import React, { useState, useEffect } from "react";
import style from "./MenuCard.module.css";

function MenuCard({ filteredData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from localStorage on initial load
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const itemsPerPage = 6;

  useEffect(() => {
    // Reset to page 1 whenever filteredData changes
    setCurrentPage(1);
  }, [filteredData]);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      startPage = Math.max(currentPage - 1, 1);
      endPage = Math.min(currentPage + 1, totalPages);
      if (currentPage === 1) endPage = 3;
      else if (currentPage === totalPages) startPage = totalPages - 2;
    }
    return [...Array(endPage - startPage + 1).keys()].map(i => startPage + i);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Remove item from cart if it already exists
        return prevCart.filter(cartItem => cartItem.id !== item.id);
      } else {
        // Add item to cart
        return [...prevCart, item];
      }
    });
  };

  return (
    <>
      <div className={style.menuCards}>
        {currentItems.map((item) => (
          <div className={style.menuCard} key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p className={style.rating}>{item.rating} *</p>
            <button onClick={() => handleAddToCart(item)}>
              {cartItems.find(cartItem => cartItem.id === item.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      <div className={style.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {getPageNumbers().map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={currentPage === pageNumber ? style.active : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default MenuCard;
