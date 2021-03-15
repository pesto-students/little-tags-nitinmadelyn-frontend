import React from "react";
import logincss from "../Login/login.css";
import "./thankyou.css"
import thumbsup from '../../assets/img/thumbsup.svg';
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
                <h1 className="left-align"><FormattedMessage id="thankyou.title" /></h1>
                <div className="border-box">
                  <div style={{display:"flex"}}>
                    <img src={thumbsup} style={{height:"32px"}} />
                    <p style={{paddingLeft:"20px", marginTop:"9px"}}>Your order has been placed successfully.</p>
                  </div> 
                </div>
                <div className="border-box">
                  <div>
                    <h2>Order Summary</h2>
                    <div style={{display:"flex"}}>
                      <span style={{flex:"0 0 60%"}}>1 x NIKE HOODIE</span>
                      <span>₹999</span>
                    </div>
                    <div style={{display:"flex"}}>
                      <span style={{flex:"0 0 60%"}}>1 x NIKE HOODIE BLACK</span>
                      <span>₹999</span>
                    </div>
                    <br/>
                    <div style={{display:"flex"}}>
                      <span style={{flex:"0 0 60%"}}>TOTAL: </span>
                      <span>₹1998</span>
                    </div>
                  </div> 
                </div>
                <div className="row">
                  <Link to="/">
                  <button className="button-red">Continue Shopping</button>
                  </Link>
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
