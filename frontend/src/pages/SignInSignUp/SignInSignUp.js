import React, { useContext, useState } from "react";
import "./SignInSignUp.css";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { url } = useContext(StoreContext);
  const { login } = useContext(AuthContext);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/login`, {
        email: data.email,
        password: data.password
      });
      const result = response.data;
      if (result.success) {
        // Handle successful login
        login(result.user, result.token); // Set auth state
        //window.location.href = "/"; // Redirect to home page
      } else {
        // Handle login failure
        console.error("Login failed", result.message);
        alert(result.message); // Show alert with the error message
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again."); // Alert for network errors or other issues
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/register`, {
        name: data.name,
        email: data.email,
        password: data.password
      });
      const result = response.data;
      if (result.success) {
        // Handle successful signup
        login(result.user, result.token); // Set auth state
        window.location.href = "/"; // Redirect to home page
      } else {
        // Handle signup failure
        console.error("Signup failed", result.message);
        alert(result.message); // Show alert with the error message
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred during signup. Please try again."); // Alert for network errors or other issues
    }
  };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">Create now!</p>
            <button className="user_unregistered-signup" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Already have an account!</h2>
            <p className="user_registered-text">Get started..</p>
            <button className="user_registered-login" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>

        <div className={`user_options-forms ${isSignUp ? 'bounceLeft' : 'bounceRight'}`} id="user_options-forms">
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form className="forms_form" onSubmit={onLogin}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    required
                    autoFocus
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                <input type="submit" value="Log In" className="forms_buttons-action" />
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form" onSubmit={onSignup}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="forms_field-input"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    name="password"
                    onChange={onChangeHandler}
                    value={data.password}
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSignUp;
