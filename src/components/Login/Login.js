import React from "react";
import logincss from "./login.css";
import { Link } from "react-router-dom";
import maincss from "../../assets/css/main.css";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const Login = (props) => {
  return (
    <main>
      <section className="login-container">
        <div className="login-box">
          <h1>LOGIN</h1>
          <hr />
          <div className="mobile">
            <input type="text" name="mobile" placeholder="Mobile Number" />
            <span>SEND OTP</span>
          </div>

          <input type="text" name="otp" placeholder="OTP" />
          <div className="row">
            <div className="col span-1-of-2">
              <button type="submit" className="button-red login-btn">
                LOGIN
              </button>
            </div>
            <div className="col span-1-of-2">
              <Link to="/signup" className="signup-link">
                New User? Signup Here
              </Link>
            </div>
          </div>
          <div className="row">
            <h3>OR</h3>
          </div>
          <div className="row">
            <div className="col span-1-of-2">
              <GoogleLoginButton className="google-btn"></GoogleLoginButton>
            </div>
            <div className="col span-1-of-2">
              <FacebookLoginButton className="facebook-btn">

              </FacebookLoginButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
