import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, loading } = useContext(StoreContext);

  if (loading) {
    return (
      <div className="food-display" id="food-display">
        <h2>Best foods in your area</h2>
        <p className="loading-text">Loading foods...</p>
      </div>
    );
  }

  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display" id="food-display">
        <h2>Best foods in your area</h2>
        <p className="no-food-text">No food items found.</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Best foods in your area</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
