import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order food made from your favorite fruits here</h2>
            <p>"Discover our mouthwatering menu featuring dishes crafted from your favorite fruits. From refreshing mango smoothie bowls to delectable strawberry shortcakes, indulge in the freshest flavors nature has to offer."</p>
            <button><Link to="/Menu">Place order</Link></button>
        </div>
    </div>
  )
}

export default Header
