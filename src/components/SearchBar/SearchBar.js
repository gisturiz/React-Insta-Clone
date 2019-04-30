import React from 'react';
import './SearchBar.css';

function SearchBar(){
    return(
        <div className="search-container">
        <div className="insta-logo"><i class="fab fa-instagram"></i> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram logo" /></div>
        <input className="search-bar" placeholder="Search" />
        <div className="search-icons"><i class="far fa-compass"></i><i class="far fa-heart"></i><i class="far fa-user"></i></div>
        </div>
    )
}

export default SearchBar;