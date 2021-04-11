import React, { useState, useEffect } from 'react';
import ProductDetailsCss from './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import '../../assets/css/main.css';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import { LanguageContext, languageObj } from '../../context/language-context';
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from 'react-intl';
import flatten from 'flat';
import { useGlobalContext } from '../../context/cart-context';

import Colors from './Colors';
import DetailsThumb from './DetailsThumb';
import AmountButtons from './AmountButtons';
import ProductImages from './ProductImages';
import axios from 'axios';
import config from '../../config/config';

const ProductDetails = () => {
  const { proId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState([
  //   {
  //     id: '3',
  //     name: 'NEW Allen Solly Sport',
  //     src: [
  //       'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg',
  //       'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/537a3697-4b71-455a-b604-b5ef2e33a9091612421834473-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-3.jpg',
  //       'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/dd4ed17f-49f7-4738-b07f-5638dc50327d1612421834446-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-4.jpg',
  //       'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/77d6a1e6-6289-4f33-b309-34d9396075421612421834421-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-5.jpg',
  //       'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/f9d63e2e-2181-472b-a677-603c79939fa51612421834498-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-2.jpg',
  //     ],
  //     description:
  //       'Men Navy Blue & Rust Orange Colourblocked Polo Collar T-shirt',
  //     content: `Navy blue, rust orange and White colourblocked T-shirt, has a polo collar, button closure, and short sleeves
  //       Size & Fit
  //       The model (height 6') is wearing a size M
  //       Material & Care
  //       60% cotton and 40% polyester
  //       Machine-wash`,
  //     price: 2300,
  //     colors: ['red', 'black', 'crimson', 'teal'],
  //     count: 1,
  //   },
  // ]);

  useEffect(() => {
    setLoading(true);
    async function getProduct() {
      const response = await axios
        .get(`${config.apiEndPoint}/product/${proId}`)
        .catch((error) => console.log(error));

      if (response) {
        response.data.items.src = [
          {
            id: 'attDr2GEfkjH9jSuC',
            url:
              'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg',
          },
          {
            id: 'att20IBQhatV1xDaV',
            url:
              'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/537a3697-4b71-455a-b604-b5ef2e33a9091612421834473-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-3.jpg',
          },
          {
            id: 'attqAL3HG0DuEtzIM',
            url:
              'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/dd4ed17f-49f7-4738-b07f-5638dc50327d1612421834446-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-4.jpg',
          },
          {
            id: 'attIQHlf8u7jXZtLV',
            url:
              'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/77d6a1e6-6289-4f33-b309-34d9396075421612421834421-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-5.jpg',
          },
          {
            id: 'attJzGj3FZyfXxIxq',
            url:
              'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13483804/2021/2/4/f9d63e2e-2181-472b-a677-603c79939fa51612421834498-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-2.jpg',
          },
        ];
        setProduct([response.data.items]);
        setLoading(false);
      }
    }
    getProduct();
  }, [proId]);

  console.log(product);

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

  if (loading) {
    return (
      <LanguageContext.Consumer>
        {(language) => (
          <IntlProvider
            locale={language}
            messages={flatten(languageObj[language.language])}
          >
            <main>
              <div
                className='login-container'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '49.8vh',
                }}
              >
                <h2>{<FormattedMessage id='productDetails.loading' />}</h2>
              </div>
            </main>
          </IntlProvider>
        )}
      </LanguageContext.Consumer>
    );
  }
  if (product.length === 0 && !loading) {
    return (
      <LanguageContext.Consumer>
        {(language) => (
          <IntlProvider
            locale={language}
            messages={flatten(languageObj[language.language])}
          >
            <main>
              <div
                className='login-container'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '49.8vh',
                }}
              >
                <h2>
                  {<FormattedMessage id='productDetails.noProductFound' />}
                </h2>

                <Link
                  to='/'
                  className='button-red'
                  style={{ marginLeft: '2vw' }}
                >
                  {<FormattedMessage id='productDetails.backHome' />}
                </Link>
              </div>
            </main>
          </IntlProvider>
        )}
      </LanguageContext.Consumer>
    );
  } else {
    return (
      <LanguageContext.Consumer>
        {(language) => (
          <IntlProvider
            locale={language}
            messages={flatten(languageObj[language.language])}
          >
            <main>
              <div className='app'>
                {product.map((item) => (
                  <div className='details' key={item.id}>
                    <div className='big-img'>
                      <ProductImages images={item.src} />
                    </div>

                    <div className='box'>
                      <div className='row'>
                        <h1>{item.name}</h1>
                        <h3>₹ {item.price}</h3>
                      </div>

                      <p>{item.description}</p>
                      <p>{item.content}</p>
                      <div className='row' style={{ display: 'inline-block' }}>
                        <AmountButtons
                          className='price-filter'
                          increase={increase}
                          decrease={decrease}
                          amount={amount}
                        />
                      </div>
                      <hr />
                      <div className='row' style={{ display: 'inline-block' }}>
                        <Link
                          to='/cart'
                          className='button-red'
                          style={{ marginTop: '5vh' }}
                          onClick={() =>
                            addToCart(
                              item.id,
                              item.name,
                              item.price,
                              item.description,
                              item.src[index],
                              amount
                            )
                          }
                        >
                          {<FormattedMessage id='productDetails.addToCart' />}
                        </Link>
                        <button
                          className='button-red'
                          style={{ marginTop: '5vh', marginLeft: '2vw' }}
                        >
                          {
                            <FormattedMessage id='productDetails.addToWishList' />
                          }
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
  }
};

export default ProductDetails;
