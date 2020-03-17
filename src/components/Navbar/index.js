import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const onSubmitSearch = (e) => {
        e.preventDefault();
        alert('Search submitted.');
    }

    const openSearch = () => {
        setSearch(true)
    }
    
    const searchClass = search? 'searchInput active': 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarmenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={onSubmitSearch}>
                    <input type="text" className={searchClass} placeholder="search..."/>
                    <img onClick={openSearch} className="searchIcon" src="/assets/icons/search.png" alt="Search" />
                </form> 
            </div>
        </div>
    )
}

export default Navbar;
