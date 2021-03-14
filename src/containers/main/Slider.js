import React, { useState } from "react";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import {
  ArrowBack,
  ArrowForward,
  ChevronBack,
  ChevronForward,
} from "react-ionicons";
import ReactHtmlParser from "react-html-parser";
import SliderImage from "./SliderImage";

import image1 from "../../assets/img/new-arrival.png";
import image2 from "../../assets/img/shopping.jpg";

function Slider() {
  const sliderArray = [
    <SliderImage src={image1} />,
    <SliderImage src={image2} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log("left", x);
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log("right", x);
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <section className="section new-arrival slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key={index}
            className="row slide"
            style={{ transform: `translate(${x}%)` }}
          >
            {" "}
            {item}
            <div className="banner-text-box">
              <h1>
                <FormattedMessage id="home.bannerText">
                  {(text) => ReactHtmlParser(text)}
                </FormattedMessage>
              </h1>
              <button className="button-red">
                <FormattedMessage id="home.bannerButton" />
              </button>
            </div>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <ChevronBack
          color={"#fff"}
          title={"Menu"}
          height="36px"
          width="36px"
          cssClasses="myButton"
          className="menu"
        />
      </button>
      <button id="goRight" onClick={goRight}>
        <ChevronForward
          color={"#fff"}
          title={"Menu"}
          height="36px"
          width="36px"
          cssClasses="myButton"
          className="menu"
        />
      </button>
    </section>
  );
}

export default Slider;
