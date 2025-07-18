import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Orders.css";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/place-order/list");
      //console.log("Response from API:", response); // Log the entire response
      if (response.data.success) {
        setOrders(response.data.data);
        //console.log("Orders data:", response.data.data); // Log orders data
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders DB");
    }
  };

  const statusHandler = async (event, orderId) => {
    // console.log(event,orderId);
    const response = await axios.post(url + "/api/place-order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>Address: {order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", "}</p>
                <p>{order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">Tele: {order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>Amount: Rs.{order.amount}.00/=</p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivary">Out for delivary</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
