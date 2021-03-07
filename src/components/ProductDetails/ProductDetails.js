import React, { useState, useEffect } from "react";
import ProductDetailsCss from "./ProductDetails.css";
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
import flatten from "flat";

import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

const ProductDetails = (props) => {
  const [product, setProduct] = useState([
    {
      _id: "1",
      title: "Nike Shoes",
      src: [
        "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      ],
      description: "Nike React Infinity Run Flyknit A.I.R. Chaz Bear",
      content:
        "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road. Graphics are designed by musician Chaz Bear.",
      price: 2300,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
  ]);

  const [index, setIndex] = useState(0);

  const myRef = React.createRef();

  const handleTab = (index) => () => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    myRef.current.children[index].className = "active";
  }, []);

  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language.language])}
        >
          <main>
            <div className="app">
              {product.map((item) => (
                <div className="details" key={item._id}>
                  <div className="big-img">
                    <img src={item.src[index]} alt="" />
                    <DetailsThumb
                      images={item.src}
                      tab={handleTab}
                      myRef={myRef}
                    />
                  </div>

                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>₹ {item.price}</span>
                    </div>
                    <Colors colors={item.colors} />

                    <p>{item.description}</p>
                    <p>{item.content}</p>

                    <button className="cart">Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default ProductDetails;
