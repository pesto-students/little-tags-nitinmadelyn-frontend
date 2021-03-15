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
import './payment.css';
import { Input } from '../Form/Form';

const Payment = (props) => {
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
                  <li><span>2</span><p>Shipping</p></li>
                  <li><span className="active">3</span><p>Payment</p></li>
                </ul>
                <div className="row">
                <div className="border-box">
                  <div className="col span-1-of-4">Contact</div>
                  <div className="col span-2-of-4">+91 9924850837</div>
                  <div className="col span-1-of-4"><a>Change</a></div>
                </div>
                <div className="border-box">
                  <div className="col span-1-of-4">Ship to</div>
                  <div className="col span-2-of-4">Nitin <br /> 1002, Earth arise, YMCA club, <br />Ahmedabad, Gujarat, 380058</div>
                  <div className="col span-1-of-4"><a>Change</a></div>
                </div>
                <div className="border-box">
                  <div className="col span-1-of-4">Item(s)</div>
                  <div className="col span-2-of-4">1 * NIKE HOODIE <br/> 1 * NIKE HOODIE BLACK</div>
                  <div className="col span-1-of-4"><a>Change</a></div>
                </div>
                <div className="border-box">
                  <div className="col span-1-of-4">Total</div>
                  <div className="col span-2-of-4">&nbsp;</div>
                  <div className="col span-1-of-4"><a>$1998</a></div>
                </div>
                </div>
                <div className="row" className="bottom-btn1">
                  <Link to="cart" className="float-left back-link"> &lt; Return to cart</Link>
                  <Link to="thankyou"><button className="button-red float-right">PAY NOW</button></Link>
                </div>
                <br/><br/>
                
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Payment;
