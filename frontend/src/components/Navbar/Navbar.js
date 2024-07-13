import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../asset/assets";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    window.location.href = "/";
  };

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
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="nabvar-profile">
            <img src={assets.profile_icon} alt="Profile icon" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="bag icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logout icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
