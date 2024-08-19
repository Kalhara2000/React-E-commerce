import React from "react";
import { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.title = "Fresh Fruits | About";
  }, []);

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to Fresh Fruits, where we celebrate the delicious and nutritious
        flavors of your favorite fruits! Our mission is to bring you the
        freshest, most flavorful dishes crafted from nature's bounty. Whether
        you're craving a refreshing mango smoothie bowl or a delectable
        strawberry shortcake, our menu is designed to indulge your taste buds
        with the best that fruits have to offer.
      </p>


      <div className="card-body">
        <div className="card1" style={{ backgroundColor: "#DCF0D8" }}>
          <div className="card-content">
            <h2 className="card-title">Our Story</h2>
            <br />
            <p className="card-description">
              At Fresh Fruits, we believe that the simplest ingredients can
              create the most memorable meals. Inspired by the vibrant colors,
              textures, and tastes of fruits, we set out to create a menu that
              not only satisfies your hunger but also nourishes your body. Our
              journey began with a passion for healthy eating and a desire to
              make fruits the star of every dish.
            </p>
          </div>
         
        </div>

        <div className="card1" style={{ backgroundColor: "#EDEDE1" }}>
          <div className="card-content">
            <h2 className="card-title">What Makes Us Unique</h2>
            <br />
            <p className="card-description">
              <ul className="unique-features">
                <li>
                  <strong>Freshness First:</strong> We source only the highest
                  quality fruits, ensuring that every bite is bursting with
                  natural flavor.
                </li>
                <li>
                  <strong>Creative Recipes:</strong> Our chefs are constantly
                  experimenting with new ways to incorporate fruits into both
                  sweet and savory dishes, offering something for every palate.
                </li>
                <li>
                  <strong>Health and Wellness:</strong> We understand the
                  importance of a balanced diet, which is why our menu is
                  designed to be as nutritious as it is delicious.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="card1" style={{ backgroundColor: "#F0ECC2" }}>
          <div className="card-content">
            <h2 className="card-title">Our Commitment</h2>
            <br />
            <p className="card-description">
              We are committed to providing you with an exceptional dining
              experience, from the moment you browse our menu to the last bite
              of your meal. Our team is dedicated to ensuring that every dish is
              prepared with care, attention to detail, and a passion for
              excellence.
            </p>
          </div>

        </div>

        <div className="card1" style={{ backgroundColor: "#D8E9F0" }}>
          <div className="card-content">
            <h2 className="card-title">Join Us</h2>
            <br />
            <p className="card-description">
              We invite you to explore our mouthwatering menu and discover your
              new favorite dish. Whether you're a fruit lover or just looking
              for something fresh and unique, Fresh Fruits is the perfect place
              to indulge in the best flavors nature has to offer.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
