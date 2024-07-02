import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";

const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <News />
    </div>
  );
};

export default Home;
