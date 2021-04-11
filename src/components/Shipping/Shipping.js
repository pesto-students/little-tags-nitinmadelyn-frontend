import React, { useState } from 'react';
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
import './shipping.css';
import { Input } from '../Form/Form';
import { storeShipping, isAuthenticated } from '../../auth/helper';

const Shipping = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    didRedirect: false,
    error: '',
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
    didRedirect,
    error,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !firstName &&
      !lastName &&
      !mobile &&
      !address1 &&
      !city &&
      !state &&
      !pincode
    ) {
      setValues({
        ...values,
        error: 'Please fill up the * marks',
      });
      setTimeout(() => {
        setValues({
          ...values,
          didRedirect: '',
        });
      }, 5000);
      return false;
    }
    storeShipping(
      {
        firstName,
        lastName,
        mobile,
        address1,
        address2,
        city,
        state,
        pincode,
      },
      () => {
        setValues({
          ...values,
          didRedirect: true,
        });
      }
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

  const performRedirect = () => {
    if (didRedirect && isAuthenticated()) {
      return <Redirect to='/payment' />;
    }
  };
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
                    <span className='active'>2</span>
                    <p>Shipping</p>
                  </li>
                  <li>
                    <span>3</span>
                    <p>Payment</p>
                  </li>
                </ul>
                <div className='row'>
                  <Input
                    className='shipping-input-small'
                    placeholder='First Name *'
                    onChange={handleChange('firstName')}
                    value={firstName}
                    name='firstName'
                  />
                  <Input
                    className='shipping-input-small'
                    placeholder='Last Name *'
                    onChange={handleChange('lastName')}
                    value={lastName}
                    name='lastName'
                  />
                  <Input
                    className='shipping-input-full'
                    onChange={handleChange('mobile')}
                    value={mobile}
                    name='mobile'
                    placeholder='Mobile *'
                  />
                  <Input
                    className='shipping-input-full'
                    placeholder='Address 1 *'
                    onChange={handleChange('address1')}
                    value={address1}
                    name='address1'
                  />
                  <Input
                    className='shipping-input-full'
                    placeholder='Address 2'
                    onChange={handleChange('address2')}
                    value={address2}
                    name='address2'
                  />
                  <Input
                    className='shipping-input-full'
                    placeholder='City *'
                    onChange={handleChange('city')}
                    value={city}
                    name='city'
                  />
                  <Input
                    className='shipping-input-small margin-top-0'
                    placeholder='State *'
                    onChange={handleChange('state')}
                    value={state}
                    name='state'
                  />
                  <Input
                    className='shipping-input-small margin-top-0'
                    placeholder='Pincode *'
                    onChange={handleChange('pincode')}
                    value={pincode}
                    name='pincode'
                  />
                </div>
                <div className='row' className='bottom-btn'>
                  {errorMessage()}
                  <br />
                  <Link to='cart' className='float-left back-link'>
                    {' '}
                    &lt; Return to cart
                  </Link>
                  <Link to='payment' onClick={onSubmit}>
                    <button className='button-red float-right'>CONTINUE</button>
                  </Link>
                  {performRedirect()}
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

export default Shipping;
