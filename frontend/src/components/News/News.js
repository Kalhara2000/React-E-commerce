import React from "react";
import "./News.css";
import { assets } from "../../asset/assets";
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="containter-card">
      <h1>What you can Order from us</h1>
      <div className="card-body">
        <div className="card1">
          <img src={assets.Fresh_Fruits01} alt="Fresh Fruit" className="card-image"/>
          <div className="card-content">
            <h2 className="card-title">Fresh Fruits for Sale in the Best Condition</h2>
            <br/>
            <p className="card-description">
              Looking for the freshest and most flavorful fruits? Our shop
              offers a wide variety of fruits in peak condition, such as
              pineapple, apple, and orange. Each fruit is handpicked by
              experienced farmers to ensure optimal ripeness, flavor, and
              nutritional value. Our quick and efficient farm-to-table supply
              chain ensures minimal transit time, so our fruits arrive fresh and
              in the best possible condition. Visit our shop today to enjoy the
              highest quality fruits available!
            </p>
          </div>
        </div>

        <div className="card1">
          <img src={assets.juices} alt="Fruit Juices" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Explore Our Fresh, Handcrafted Whole Fruit Juices</h2>
            <br/>
            <p className="card-description">
              Treat yourself to a delightful array of juices crafted from whole
              fruits, each bursting with flavor and goodness. Whether it's the
              tang of citrus, the sweetness of berries, or the refreshing taste
              of tropical fruits, our juices promise a vibrant experience with
              every sip. Experience the essence of freshness and quality in
              every glass, exclusively at our juice bar.
            </p>
          </div>
        </div>

        <div className="card1">
          <img
            src={assets.Fruit_Salad}
            alt="Fruit Salads"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Taste Our Whole Fruit Fruit Salads</h2>
            <br/>
            <p className="card-description">
              Savor the vibrant flavors of our freshly made fruit salads,
              crafted from whole fruits bursting with natural sweetness and
              goodness. Each bite offers a delightful mix of textures and
              tastes, from crisp apples to juicy berries and tropical delights.
              Perfect for a refreshing snack or a nutritious meal, our fruit
              salads are a delicious way to enjoy the goodness of whole fruits.
              Visit us today and indulge in freshness with every bite.
            </p>
          </div>
        </div>

        <div className="card1">
          <img
            src={assets.Fruit_cake}
            alt="Fruit Cakes"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Enjoy Our Whole Fruit Cakes</h2>
            <br/>
            <p className="card-description">
              Treat yourself to the delightful flavors of our freshly made fruit
              cakes, crafted with whole fruits for a burst of natural sweetness
              in every bite. Whether you crave the tangy zest of citrus, the
              rich flavors of berries, or the tropical essence of pineapple, our
              cakes promise a delicious experience that celebrates the goodness
              of whole fruits. Perfect for any occasion or as a thoughtful gift,
              our whole fruit cakes are a delightful treat you'll savor to the
              last crumb.
            </p>
          </div>
        </div>
      </div>
      <div className='menu-explore'>
        <p>Explore our offerings here</p>
        <div className="menu-explore-btn">
            <button><Link to="/Menu">Explore menu</Link></button>
        </div>
    </div>
    </div>
  );
};

export default News;
