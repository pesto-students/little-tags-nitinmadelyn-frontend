import React, { useState, useEffect } from 'react';
import logincss from '../Login/login.css';
import { Link, useHistory, Redirect } from 'react-router-dom';
import maincss from '../../assets/css/main.css';
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
import { useCookies } from 'react-cookie';
import './payment.css';
import { Input } from '../Form/Form';
import {
  getShipping,
  storeCart,
  isAuthenticated,
  getCart,
  addAddress,
  getAddress,
  makeOrder,
  updateOrder,
} from '../../auth/helper';
import { useGlobalContext } from '../../context/cart-context';

const Payment = (props) => {
  const { cart, total, clearCart } = useGlobalContext();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    error: '',
    success: '',
    didRedirect: false,
    loading: false,
  });

  const {
    firstName,
    lastName,
    mobile,
    address1,
    address2,
    city,
    state,
    pincode,
    error,
    success,
    didRedirect,
    loading,
  } = values;

  useEffect(() => {
    async function shippingData() {
      const response = await getShipping();

      if (response) {
        setValues({
          ...values,
          firstName: response.firstName,
          lastName: response.lastName,
          mobile: response.mobile,
          address1: response.address1,
          address2: response.address2,
          city: response.city,
          state: response.state,
          pincode: response.pincode,
        });
      }
    }
    shippingData();

    async function storeCartData() {
      storeCart({
        productId: cart[0].id,
        price: cart[0].price,
        attributes: { quantity: cart[0].amount },
      });
    }
    storeCartData();
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    addAddress({
      address1,
      address2,
      city,
      state,
      pincode,
    })
      .then((data) => {
        if (data.status === 'success') {
          getAddress().then((addressData) => {
            if (addressData.status === 'success') {
              const firstAddress = addressData.items[0];
              makeOrder({
                productId: cart[0].id,
                price: cart[0].price,
                attributes: { quantity: cart[0].amount },
              }).then((orderDetails) => {
                if (orderDetails.status === 'success') {
                  updateOrder(
                    {
                      orderStatus: 'Success',
                    },
                    orderDetails.orderId
                  ).then((orderStatus) => {
                    if (orderStatus.status === 'success') {
                      setValues({
                        ...values,
                        didRedirect: true,
                      });
                    }
                  });
                }
              });
            }
          });
        } else {
          setValues({ ...values, error: data.message, loading: false });
        }
      })
      .catch(console.log('error in order'));
  };

  const performRedirect = () => {
    if (didRedirect && isAuthenticated()) {
      return <Redirect to='/thankyou' />;
    }
  };

  const loadingMessage = () => {
    return (
      <div
        className='alert alert-info test-center'
        style={{ display: loading ? '' : 'none' }}
      >
        Loading...
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className='alert alert-danger test-center'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    );
  };
  console.log('values', values);
  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language.language])}
        >
          <main>
            <section className='login-container'>
              <div className='login-box'>
                <ul className='tab-nav'>
                  <li>
                    <span>1</span>
                    <p>Login</p>
                  </li>
                  <li>
                    <Link to='/shipping'>
                      <span style={{ color: 'white' }}>2</span>
                      <p style={{ color: 'white' }}>Shipping</p>
                    </Link>
                  </li>
                  <li>
                    <span className='active'>3</span>
                    <p>Payment</p>
                  </li>
                </ul>
                <div className='row'>
                  <div className='border-box'>
                    <div className='col span-1-of-4'>Contact</div>
                    <div className='col span-2-of-4'>+91 {mobile}</div>
                    <div className='col span-1-of-4'>
                      <a>Change</a>
                    </div>
                  </div>
                  <div className='border-box'>
                    <div className='col span-1-of-4'>Ship to</div>
                    <div className='col span-2-of-4'>
                      {firstName} <br /> {address1} <br />
                      {address2}
                    </div>
                    <div className='col span-1-of-4'>
                      <a>Change</a>
                    </div>
                  </div>
                  <div className='border-box'>
                    <div className='col span-1-of-4'>Item(s)</div>
                    <div className='col span-2-of-4'>
                      {cart.map((item) => (
                        <>
                          {item.amount} * {item.name} <br />
                        </>
                      ))}
                    </div>
                    <div className='col span-1-of-4'>
                      <a>Change</a>
                    </div>
                  </div>
                  <div className='border-box'>
                    <div className='col span-1-of-4'>Total</div>
                    <div className='col span-2-of-4'>&nbsp;</div>
                    <div className='col span-1-of-4'>
                      <a>₹ {(total + 19).toFixed(2)}</a>
                    </div>
                  </div>
                </div>
                <div className='row' className='bottom-btn1'>
                  <Link to='cart' className='float-left back-link'>
                    {' '}
                    &lt; Return to cart
                  </Link>
                  <Link to='thankyou' onClick={handleOrder}>
                    <button className='button-red float-right'>PAY NOW</button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Payment;
