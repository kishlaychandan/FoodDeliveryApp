import React, { useState } from 'react';
import style from './Search.module.css';

function Search({ data, setFilteredData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterData(term, category, sortOption);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setCategory(category);
        filterData(searchTerm, category, sortOption);
    };

    const handleSortChange = (e) => {
        const sortOption = e.target.value;
        setSortOption(sortOption);
        filterData(searchTerm, category, sortOption);
    };

    const filterData = (searchTerm, category, sortOption) => {
        let filtered = [...data]; // Create a copy of the data array

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(item => item.category === category);
        }

        if (sortOption) {
            switch (sortOption) {
                case 'priceLowToHigh':
                    filtered = filtered.slice().sort((a, b) => a.price - b.price);
                    break;
                case 'priceHighToLow':
                    filtered = filtered.slice().sort((a, b) => b.price - a.price);
                    break;
                case 'ratingLowToHigh':
                    filtered = filtered.slice().sort((a, b) => a.rating - b.rating);
                    break;
                case 'ratingHighToLow':
                    filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    break;
            }
        }

        setFilteredData(filtered);
    };

    return (
        <div className={style.searchContainer}>
            <div className={style.inputWrapper}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={style.searchInput}
                    aria-label="Search"
                />
            </div>
            <div className={style.selectWrapper}>
                <select value={category} onChange={handleCategoryChange} className={style.select} aria-label="Select category">
                    <option value="">All Categories</option>
                    <option value="Mexican">Mexican</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Italian">Italian</option>
                    <option value="Drinks">Drinks</option>
                </select>
            </div>
            <div className={style.selectWrapper}>
                <select value={sortOption} onChange={handleSortChange} className={style.select} aria-label="Sort options">
                    <option value="relevance">Most Relevant</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="ratingLowToHigh">Rating: Low to High</option>
                    <option value="ratingHighToLow">Rating: High to Low</option>
                </select>
            </div>
        </div>
    );
}

export default Search;
