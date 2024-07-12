import React, { useState } from "react";
import "./SignInSignUp.css";

const SignInSignUp = () => {
  
    const [isSignUp, setIsSignUp] = useState(false);
  
    const handleSignUpClick = () => {
      setIsSignUp(true);
    };
  
    const handleLoginClick = () => {
      setIsSignUp(false);
    };
  
    return (
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">Create now!</p>
              <button className="user_unregistered-signup" onClick={handleSignUpClick}>Sign up</button>
            </div>
  
            <div className="user_options-registered">
              <h2 className="user_registered-title">Already have a account!</h2>
              <p className="user_registered-text">Get started..</p>
              <button className="user_registered-login" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
          
          <div className={`user_options-forms ${isSignUp ? 'bounceLeft' : 'bounceRight'}`} id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
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
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Full Name" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" required />
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
