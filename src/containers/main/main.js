import React from "react";
import maincss from "./main.css";
import newarrival from "../../assets/img/new-arrival.png";
import mens from "../../assets/img/mens.png";
import { LanguageContext, languageObj } from "../../context/language-context";
import ReactHtmlParser from 'react-html-parser';
import { IntlProvider, FormattedMessage, FromattedHTMLMessage } from 'react-intl';

const Main = (props) => {
  return (
    <LanguageContext.Consumer>
      {({language}) => (
        <IntlProvider locale={language} messages={languageObj[language].home}>
        <main>
          <section className="section new-arrival">
            <div className="row">
              <div className="banner-text-box">
                <h1>
                  <FormattedMessage id='bannerText' >
                    {(text) => ReactHtmlParser(text)}
                  </FormattedMessage>
                </h1>
                <button className="button-red">
                  <FormattedMessage id='bannerButton' />
                </button>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="row">
              <div className="main-bg">
                <div className="col span-1-of-3 main-category">
                  <a href="#" className="active">
                  <FormattedMessage id='mens' />
                  </a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='women' /></a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='kids' /></a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="row">
              <div className="category-bg">
                <div className="category-box-container">
                  <div className="hexagon">
                    <span>
                      <ul>
                        <li>CAP</li>
                        <li>SUN GLASSES</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-2">
                    <span>
                      <ul>
                        <li>BLAZER</li>
                        <li>JACKET</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-3">
                    <span>
                      <ul>
                        <li>
                          HALF SLEEVE <br />
                          SHIRT
                        </li>
                        <li>
                          HALF SLEEVE <br />
                          T-SHIRT
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-4">
                    <span>
                      <ul>
                        <li>
                          FULL SLEEVE <br />
                          SHIRT
                        </li>
                        <li>
                          FULL SLEEVE <br />
                          T-SHIRT
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-5">
                    <span>
                      <ul>
                        <li>BELT</li>
                        <li>UNDERWEAR</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-6">
                    <span>
                      <ul>
                        <li>WATCHES</li>
                        <li>HAND GLOVES</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-7">
                    <span>
                      <ul>
                        <li>JEANS</li>
                        <li>FORMALS</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-8">
                    <span>
                      <ul>
                        <li>SHORTS</li>
                        <li>JOGGERS</li>
                      </ul>
                    </span>
                  </div>
                  <div className="hexagon hex-9">
                    <span>
                      <ul>
                        <li>SHOES</li>
                        <li>SOCKS</li>
                      </ul>
                    </span>
                  </div>
                </div>
                <img src={mens} className="mens-category" />
              </div>
            </div>
          </section>
        </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Main;
