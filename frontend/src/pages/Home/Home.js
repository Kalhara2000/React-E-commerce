import React from "react";
import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";

const Home = () => {
  useEffect(() => {
    document.title = "Fresh Fruits | Home";
  }, []);

  return (
    <div className="home-body">
      <Header />
      <News />
    </div>
  );
};

export default Home;
