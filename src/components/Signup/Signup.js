import React from "react";
import signupcss from "./signup.css";
import { Link } from "react-router-dom";
import maincss from "../../assets/css/main.css";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const Signup = (props) => {
  return (
    <main>
      <section className="login-container">
        <div className="login-box">
          <h1>SIGN UP</h1>
          <hr />
          <input type="text" name="otp" placeholder="First Name" />
          <input type="text" name="otp" placeholder="Last Name" />
          <input type="text" name="otp" placeholder="Email" />
          <div className="mobile">
            <input type="text" name="mobile" placeholder="Mobile Number" />
            <span>SEND OTP</span>
          </div>

          <input type="text" name="otp" placeholder="OTP" />
          <div className="row">
            <div className="col span-1-of-2">
              <button type="submit" className="button-red login-btn">
                SIGN UP
              </button>
            </div>
            <div className="col span-1-of-2">
              <Link to="/login" className="signup-link">
                Already User? Login Here
              </Link>
            </div>
          </div>
          <div className="row">
            <h3>OR</h3>
          </div>
          <div className="row">
            <div className="col span-1-of-2">
              <GoogleLoginButton className="google-btn">
                <span>Signup With Google</span>
              </GoogleLoginButton>
            </div>
            <div className="col span-1-of-2">
              <FacebookLoginButton className="facebook-btn">
                <span>Signup With Facebook</span>
              </FacebookLoginButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
