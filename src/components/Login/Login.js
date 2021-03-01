import React from "react";
import logincss from "./login.css";
import { Link } from "react-router-dom";
import maincss from "../../assets/css/main.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { LanguageContext, languageObj } from "../../context/language-context";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import flatten from 'flat';

const Login = (props) => {
  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language.language])}
        >
          <main>
            <section className="login-container">
              <div className="login-box">
                <h1><FormattedMessage id="login.title" /></h1>
                <hr />
                <div className="mobile">
                <FormattedMessage id="login.placeholder.mobile">
                  {(msg) => (<input type="text" name="mobile" placeholder={msg} />)}
                </FormattedMessage>
                  <span><FormattedMessage id="login.placeholder.sendOTP" /></span>
                </div>

                <FormattedMessage id="login.placeholder.OTP">
                  {(msg) => (<input type="text" name="otp" placeholder={msg} />)}
                </FormattedMessage>
                <div className="row">
                  <div className="col span-1-of-2">
                    <button type="submit" className="button-red login-btn">
                    <FormattedMessage id="login.title" />
                    </button>
                  </div>
                  <div className="col span-1-of-2">
                    <Link to="/signup" className="signup-link">
                    <FormattedMessage id="login.signupLink" />
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <h3><FormattedMessage id="login.or" /></h3>
                </div>
                <div className="row">
                  <div className="col span-1-of-2">
                    <GoogleLoginButton className="google-btn">
                      <span><FormattedMessage id="login.socialButtons.google" /></span>
                    </GoogleLoginButton>
                  </div>
                  <div className="col span-1-of-2">
                    <FacebookLoginButton className="facebook-btn">
                      <span><FormattedMessage id="login.socialButtons.facebook" /></span>
                    </FacebookLoginButton>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Login;
