import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
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
import flatten from "flat";

const Checkout = (props) => {
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
                <h1 className="left-align">
                  <FormattedMessage id="checkout.title" />
                </h1>
                <hr />
                <FormattedMessage id="checkout.placeholder.firstName">
                  {(msg) => (
                    <input type="text" name="firstName" placeholder={msg} />
                  )}
                </FormattedMessage>
                <FormattedMessage id="checkout.placeholder.lastName">
                  {(msg) => (
                    <input type="text" name="lastName" placeholder={msg} />
                  )}
                </FormattedMessage>
                <div className="mobile">
                  <FormattedMessage id="checkout.placeholder.mobile">
                    {(msg) => (
                      <input type="text" name="mobile" placeholder={msg} />
                    )}
                  </FormattedMessage>
                </div>
                <FormattedMessage id="checkout.placeholder.addressLine1">
                  {(msg) => (
                    <input type="text" name="address1" placeholder={msg} />
                  )}
                </FormattedMessage>
                <FormattedMessage id="checkout.placeholder.addressLine2">
                  {(msg) => (
                    <input type="text" name="address2" placeholder={msg} />
                  )}
                </FormattedMessage>
                <FormattedMessage id="checkout.placeholder.city">
                  {(msg) => <input type="text" name="city" placeholder={msg} />}
                </FormattedMessage>
                <FormattedMessage id="checkout.placeholder.state">
                  {(msg) => (
                    <input type="text" name="state" placeholder={msg} />
                  )}
                </FormattedMessage>
                <FormattedMessage id="checkout.placeholder.pinCode">
                  {(msg) => (
                    <input type="text" name="pincode" placeholder={msg} />
                  )}
                </FormattedMessage>

                <div className="row">
                  <div className="col span-1-of-2"></div>
                  <div className="col span-1-of-2">
                    <button
                      type="submit"
                      className="button-red login-btn signup-link"
                    >
                      <FormattedMessage id="checkout.payNow" />
                    </button>
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

export default Checkout;
