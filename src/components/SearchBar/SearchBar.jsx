import React from 'react';
import './SearchBar.styles.css';

function SearchBar({ onSearchChange }) {
    return (
        <div className="search_bar">
            <input
                type="text"
                placeholder="Search hotels by name"
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
