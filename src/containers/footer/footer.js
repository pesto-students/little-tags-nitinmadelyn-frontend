import React from "react";
import maincss from "../../assets/css/main.css";
import footercss from "./footer.css";
import visamastercard from "../../assets/img/visa-mastercard.png";
import flatten from 'flat';
import { LanguageContext, languageObj } from "../../context/language-context";
import { IntlProvider, FormattedMessage, FromattedHTMLMessage } from 'react-intl';
import ReactHtmlParser from "react-html-parser";

const Footer = (props) => {
  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language.language])}
        >
          <footer>
            {/*<ul className="footer-links">
              <li><FormattedMessage id="footer.links1.title" /></li>
              <li><FormattedMessage id="footer.links1.link1" /></li>
              <li><FormattedMessage id="footer.links1.link2" /></li>
              <li><FormattedMessage id="footer.links1.link3" /></li>
            </ul>
            <ul className="footer-links quick-links">
              <li><FormattedMessage id="footer.links2.title" /></li>
              <li><FormattedMessage id="footer.links2.link1" /></li>
              <li><FormattedMessage id="footer.links2.link2" /></li>
            </ul>
            <ul className="footer-links quick-links">
              <li><FormattedMessage id="footer.links3.title" /></li>
              <li className="align-center">
                <img src={visamastercard} />
              </li>
            </ul>*/}
            <p className="legal-text">
            <FormattedMessage id="footer.legal" /> <br/>
            <FormattedMessage id="footer.credits">
                  {(text) => ReactHtmlParser(text)}
            </FormattedMessage>
            {/*<FormattedMessage id="footer.credits"  />*/}
            </p>
          </footer>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Footer;
