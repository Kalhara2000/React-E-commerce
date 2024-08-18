import React, { useEffect, useState } from "react";
import "./Contact.css";
import { assets } from "../../asset/assets";

export default function Contact() {
  useEffect(() => {
    document.title = "Fresh Fruits | Contact US";
    window.scrollTo(0, 0);
  }, []);

  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setResultColor("blue");

    const formData = new FormData(event.target);

    formData.append("access_key", "6f15271f-3230-4d0e-b29e-4b0ff89f655f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      setResultColor("green");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
      setResultColor("red");
    }
  };

  return (
    <div className="body-contact">
      <h3>Contact Us</h3>
      <div className='contact'>
        <div className="contact-col">
          <h4>Send us a message <img src={assets.msg_icon} alt="" /></h4>
          <p>
          Discover our mouthwatering menu featuring dishes crafted from your favorite fruits. From refreshing mango 
          smoothie bowls to delectable strawberry shortcakes, indulge in the freshest flavors nature has to offer.
          </p>
          <ul>
            <li><img src={assets.mail_icon} alt="" />fruitsmarket.contact@gmai.com</li>
            <li><img src={assets.phone_icon} alt="" />+94 71 258 xxx</li>
            <li><img src={assets.location_icon} alt="" />No 20/6, Main Street, Colombo 03</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name="name" id="" placeholder='Enter Your name' required />
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" placeholder='Enter your Email' required />
            <label htmlFor="">Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={assets.white_arrow} alt=""/></button>

          </form>
          <span style={{ color: resultColor }}>{result}</span>
        </div>
      </div>
    </div>


  );
}
