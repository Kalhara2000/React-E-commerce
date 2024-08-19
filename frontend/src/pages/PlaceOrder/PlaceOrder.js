import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import jsPDF from "jspdf";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, setCartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Fresh Fruits | Place Order";

    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, navigate, getTotalCartAmount]);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const generatePDF = () => {
    const orderItems = food_list.filter(item => cartItems[item._id] > 0)
      .map(item => ({
        ...item,
        quantity: cartItems[item._id]
      }));

    const doc = new jsPDF();

    doc.text("Delivery Information", 10, 10);
    doc.text(`Name: ${data.firstName} ${data.lastName}`, 10, 20);
    doc.text(`Email: ${data.email}`, 10, 30);
    doc.text(`Address: ${data.street}, ${data.city}, ${data.state}, ${data.zipcode}, ${data.country}`, 10, 40);
    doc.text(`Phone: ${data.phone}`, 10, 50);

    doc.text("Cart Items", 10, 70);
    orderItems.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - Quantity: ${item.quantity}`, 10, 80 + (index * 10));
    });

    doc.text("Cart Totals", 10, 100 + (orderItems.length * 10));
    doc.text(`Subtotal: Rs ${getTotalCartAmount()}`, 10, 110 + (orderItems.length * 10));
    doc.text(`Delivery Fee: Rs ${getTotalCartAmount() === 0 ? 0 : 200}`, 10, 120 + (orderItems.length * 10));
    doc.text(`Total: Rs ${getTotalCartAmount() + 200}`, 10, 130 + (orderItems.length * 10));

    doc.save("order-summary.pdf");
  };

  const placeholder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
      return null;
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 200,
    };

    try {
      let response = await axios.post(url + "/api/place-order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        generatePDF();  // Generate PDF if the order is not successful

        // Clear the input fields
        setData({
          firstName: "",
          lastName: "",
          email: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
          phone: "",
        });

        // Clear the cart
        setCartItems({});
        
        // Optionally, redirect to the orders page
        navigate('/orders');
      }
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <form onSubmit={placeholder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-feilds">
          <input
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
            required
          />
          <input
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last name"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
          required
        />
        <input
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Address"
          required
        />
        <div className="multi-feilds">
          <input
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            required
          />
        </div>
        <div className="multi-feilds">
          <input
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip code"
            required
          />
          <input
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
          />
        </div>
        <input
          type="text"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
          required
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs: {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs: {getTotalCartAmount() === 0 ? 0 : 200}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>
                Rs:{" "}
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
