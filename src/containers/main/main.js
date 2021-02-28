import React, { useState } from "react";
import maincss from "./main.css";
import newarrival from "../../assets/img/new-arrival.png";
import Section from "./Section";
import Tab from "./Tab";

import men from "../../assets/img/men.png";
import kids from "../../assets/img/kids.jpg";
import women from "../../assets/img/women.webp";

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
    console.log("component", component);
    return component;
  };

  const handleClick = (section) => (e) => {
    e.preventDefault();
    changeSection(section);
  };

  return (
    <main>
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
    </main>
  );
};

export default Main;
