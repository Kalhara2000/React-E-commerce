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
    <div
      className="contact-body"
      style={{
        backgroundImage: `url(${assets.background_us})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <h1>Contact US</h1>
        <label htmlFor="fname">Initials with name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name.."
          aria-label="Your name"
          required
        />

        <label htmlFor="lname">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address.."
          aria-label="Your email address"
          required
        />

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="message"
          placeholder="Write something.."
          style={{ height: "200px" }}
          aria-label="Your message"
          required
        ></textarea>

        <input type="submit" value="Submit" />
        <span style={{ color: resultColor }}>{result}</span>
      </form>
    </div>
  );
}
