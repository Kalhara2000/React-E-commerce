import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import MobileApp from "./pages/MobileApp/MobileApp";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="boday-class">
        <>
          {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
          <div className="app"></div>
        </>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/signIn-signUp" element={<SignInSignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
