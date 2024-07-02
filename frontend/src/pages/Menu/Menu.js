import React, { useEffect, useState } from "react";
import "./Menu.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Menu = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [category, setCategory] = useState("All");

  return (
    <div className="menu-body">
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Menu;
