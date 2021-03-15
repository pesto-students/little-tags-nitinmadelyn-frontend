import React from "react";
import logincss from "../Login/login.css";
import { Link, useHistory } from "react-router-dom";
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
import { useCookies } from 'react-cookie';
import './shipping.css';
import { Input } from '../Form/Form';

const Shipping = (props) => {
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
                <ul className="tab-nav">
                  <li><span>1</span><p>Login</p></li>
                  <li><span className="active">2</span><p>Shipping</p></li>
                  <li><span>3</span><p>Payment</p></li>
                </ul>
                <div className="row">
                  <Input className="shipping-input-small" placeholder="First Name" />
                  <Input className="shipping-input-small" placeholder="Last Name" />
                  <Input className="shipping-input-full" placeholder="Email" />
                  <Input className="shipping-input-full" placeholder="Address 1" />
                  <Input className="shipping-input-full" placeholder="Address 2" />
                  <Input className="shipping-input-full" placeholder="City" />
                  <Input className="shipping-input-small margin-top-0" placeholder="State" />
                  <Input className="shipping-input-small margin-top-0" placeholder="Pincode" />
                </div>
                <div className="row" className="bottom-btn">
                  <Link to="cart" className="float-left back-link"> &lt; Return to cart</Link>
                  <Link to="payment"><button className="button-red float-right">CONTINUE</button></Link>
                </div>
                <br /><br />
                
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Shipping;
