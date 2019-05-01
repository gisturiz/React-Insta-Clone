import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="search-container" >
            <div className="insta-logo"><i className="fab fa-instagram"></i> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram logo" /></div>
            <input type="text" className="search-bar" onChange={props.search} placeholder="Search" />
            <div className="search-icons"><i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i></div>
        </div>
    )
}


export default SearchBar;