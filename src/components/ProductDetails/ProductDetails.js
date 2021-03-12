import React, { useState, useEffect } from "react";
import ProductDetailsCss from "./ProductDetails.css";
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
import { useGlobalContext } from "../../context/cart-context";

import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import AmountButtons from "./AmountButtons";

const ProductDetails = () => {
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

  const { addToCart } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      // if (tempAmount > stock) {
      //   tempAmount = stock;
      // }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

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
                      <h1>{item.title}</h1>
                      <h3>₹ {item.price}</h3>
                    </div>

                    {/* <Colors colors={item.colors} /> */}

                    <p>{item.description}</p>
                    <p>{item.content}</p>
                    <div className="row" style={{ display: "inline-block" }}>
                      {/* <select style={{ width: "10vw" }}>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>XXL</option>
                      </select> */}

                      <AmountButtons
                        className="price-filter"
                        increase={increase}
                        decrease={decrease}
                        amount={amount}
                      />
                    </div>
                    <hr />
                    <div className="row" style={{ display: "inline-block" }}>
                      <Link
                        to="/cart"
                        className="button-red"
                        style={{ marginTop: "5vh" }}
                        onClick={() =>
                          addToCart(
                            item._id,
                            item.title,
                            item.price,
                            item.description,
                            item.src[index],
                            amount
                          )
                        }
                      >
                        Add to cart
                      </Link>
                      <button
                        className="button-red"
                        style={{ marginTop: "5vh", marginLeft: "2vw" }}
                      >
                        Add to wishlist
                      </button>
                    </div>
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
