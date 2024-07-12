import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../asset/assets";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";


const Navbar = ({setShowLogin}) => {

  const { getTotalCartAmount } = useContext(StoreContext);
  const { authState, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo1} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/mobile-app" activeClassName="active">
            Mobile app
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="Search" className="navbar-search-icon" />
        <div className="cartbutton">
          <Link to="/cart">
            <img
              src={assets.cart}
              alt="Basket"
              className="navbar-basket-icon"
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
