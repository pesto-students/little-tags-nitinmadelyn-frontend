import React from "react";
import signupcss from "./signup.css";
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

const Signup = (props) => {
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
                <h1 className="left-align"><FormattedMessage id="signup.title" /></h1>
                <hr />
                <FormattedMessage id="signup.placeholder.firstName">
                  {(msg) => (<input type="text" name="firstName" placeholder={msg} />)}
                </FormattedMessage>
                <FormattedMessage id="signup.placeholder.lastName">
                  {(msg) => (<input type="text" name="lastName" placeholder={msg} />)}
                </FormattedMessage>
                <FormattedMessage id="signup.placeholder.email">
                  {(msg) => (<input type="text" name="email" placeholder={msg} />)}
                </FormattedMessage>
                <div className="mobile">
                <FormattedMessage id="signup.placeholder.mobile">
                  {(msg) => (<input type="text" name="mobile" placeholder={msg} />)}
                </FormattedMessage>
                  
                  <span><FormattedMessage id="signup.placeholder.sendOTP" /></span>
                </div>

                <FormattedMessage id="signup.placeholder.OTP">
                  {(msg) => (<input type="text" name="otp" placeholder={msg} />)}
                </FormattedMessage>
                <div className="row">
                  <div className="col span-1-of-2">
                    <button type="submit" className="button-red login-btn">
                    <FormattedMessage id="signup.title" />
                    </button>
                  </div>
                  <div className="col span-1-of-2">
                    <Link to="/login" className="signup-link">
                    <FormattedMessage id="signup.loginLink" />
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <h3 className="margin-top-40"><FormattedMessage id="signup.or" /></h3>
                </div>
                <div className="row">
                  <div className="col span-1-of-2">
                    <GoogleLoginButton className="google-btn">
                      <span><FormattedMessage id="signup.socialButtons.google" /></span>
                    </GoogleLoginButton>
                  </div>
                  <div className="col span-1-of-2">
                    <FacebookLoginButton className="facebook-btn">
                      <span><FormattedMessage id="signup.socialButtons.facebook" /></span>
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

export default Signup;
