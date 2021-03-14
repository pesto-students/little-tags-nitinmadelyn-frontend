import React, { useState } from "react";
import maincss from "./main.css";
import newarrival from "../../assets/img/new-arrival.png";
import mens from "../../assets/img/mens.png";
import { LanguageContext, languageObj } from "../../context/language-context";
import ReactHtmlParser from "react-html-parser";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import Section from "./Section";
import Tab from "./Tab";
import Slider from "./Slider";

import men from "../../assets/img/men.png";
import kids from "../../assets/img/kids.jpg";
import women from "../../assets/img/women.webp";

import menIcon from "../../assets/img/men-white.svg";
import womenIcon from "../../assets/img/women-white.svg";
import kidIcon from "../../assets/img/kid-white.svg";

import flatten from "flat";

const Main = (props) => {
  const [currentSection, setSection] = useState("Men");
  let component;
  const changeSection = (section) => setSection(section);
  const getSection = () => {
    switch (currentSection) {
      case "Men":
        component = <Section category="Men" imgSrc={men} />;
        break;
      case "Women":
        component = <Section category="Women" imgSrc={women} />;
        break;
      case "Kids":
        component = <Section category="Kids" imgSrc={kids} />;
        break;
      default:
        component = <Section category="Men" imgSrc={men} />;
    }
    return component;
  };

  const handleClick = (section) => (e) => {
    e.preventDefault();
    changeSection(section);
  };

  return (
    <LanguageContext.Consumer>
      {({ language }) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language])}
        >
          <main>
            <Slider />

            <section className="section">
              <div className="row">
                <div className="main-bg">
                  <Tab
                    onClick={handleClick("Men")}
                    label={<img src={menIcon} />}
                    isActive={currentSection === "Men"}
                  />  
                  <Tab
                    onClick={handleClick("Women")}
                    label={<img src={womenIcon} />}
                    isActive={currentSection === "Women"}
                  /> 
                  <Tab
                    onClick={handleClick("Kids")}
                    label={<img src={kidIcon} />}
                    isActive={currentSection === "Kids"}
                  /> 

                  {/*<div className="col span-1-of-3 main-category">
                  <a href="#" className="active">
                  <FormattedMessage id='mens' />
                  </a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='women' /></a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='kids' /></a>
                </div>*/}
                </div>
              </div>
            </section>
            {getSection()}
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Main;

{
  /*<main>
      <section className="section new-arrival">
        <div className="row">
          <div className="banner-text-box">
            <h1>
              New Arrival <br /> T-Shirt Collections
            </h1>
            <button className="button-red">SHOP NOW</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="row">
          <div className="main-bg">
            <Tab
              onClick={handleClick("Men")}
              label="Men"
              isActive={currentSection === "Men"}
            />
            <Tab
              onClick={handleClick("Women")}
              label="Women"
              isActive={currentSection === "Women"}
            />
            <Tab
              onClick={handleClick("Kids")}
              label="Kids"
              isActive={currentSection === "Kids"}
            />
          </div>
        </div>
      </section>

      {getSection()}
    </main>*/
}
