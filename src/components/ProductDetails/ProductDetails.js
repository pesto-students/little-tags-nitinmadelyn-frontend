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
      _id: "3",
      title: "NEW Allen Solly Sport",
      src: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/537a3697-4b71-455a-b604-b5ef2e33a9091612421834473-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/dd4ed17f-49f7-4738-b07f-5638dc50327d1612421834446-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/77d6a1e6-6289-4f33-b309-34d9396075421612421834421-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-5.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/f9d63e2e-2181-472b-a677-603c79939fa51612421834498-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-2.jpg",
      ],
      description:
        "Men Navy Blue & Rust Orange Colourblocked Polo Collar T-shirt",
      content: `Navy blue, rust orange and White colourblocked T-shirt, has a polo collar, button closure, and short sleeves
        Size & Fit
        The model (height 6') is wearing a size M
        Material & Care
        60% cotton and 40% polyester
        Machine-wash`,
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
