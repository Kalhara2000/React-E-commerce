import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItem] = useState({});
  const url ="http://localhost:4000";
  //
  const [food_list,setFoodList] = useState([])


  
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };


  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const fatchFoodList = async () =>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  useEffect(()=>{
    async function loadData(){
      await fatchFoodList();
      // if (localStorage.getItem("token")){
      //   setToken(localStorage.getItem("token"))
      // }
    }
    loadData();
},[])




  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItem,
    getTotalCartAmount, // Correct spelling
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
