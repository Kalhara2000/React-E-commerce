import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../asset/assets';
import { StoreContext } from '../../context/StoreContext'; // Import StoreContext

const FoodItem = ({ id, name, price, description, image }) => { // Correct spelling

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Correct context destructuring

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className='food-item-desc'>{description}</p> {/* Correct spelling */}
        <p className='food-item-price'>Rs: {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
