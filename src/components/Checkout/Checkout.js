import React, { useState } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
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
import { makeOrder } from '../../auth/helper';

const Checkout = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile,
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    error: '',
    success: '',
  });

  const {
    firstName,
    lastName,
    email,
    mobile,
    address1,
    address2,
    city,
    state,
    pincode,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    makeOrder({
      firstName,
      lastName,
      email,
      mobile,
      address1,
      address2,
      city,
      state,
      pincode,
    })
      .then((data) => {
        if (data.status === 'success') {
          setValues({
            ...values,
            firstName: '',
            lastName: '',
            email: '',
            mobile,
            address1: '',
            address2: '',
            city: '',
            state: '',
            pincode: '',
            error: false,
            success: true,
          });
        } else {
          setValues({ ...values, error: data.message, success: false });
        }
      })
      .catch(console.log('error in signup'));
  };

  const successMessage = () => {
    return (
      <>
        <div
          className='alert alert-success test-center'
          style={{ display: success ? '' : 'none' }}
        >
          New user created Successfully. Please
          <Link to='/login'> Login here</Link>
        </div>
      </>
    );
  };

  const errorMessage = () => {
    return (
      <>
        <div
          className='alert alert-danger test-center'
          style={{ display: error ? '' : 'none' }}
        >
          {error}
        </div>
      </>
    );
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
                <h1 className='left-align'>
                  <FormattedMessage id='checkout.title' />
                </h1>
                <hr />
                <FormattedMessage id='checkout.placeholder.firstName'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('firstName')}
                      value={firstName}
                      name='firstName'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id='checkout.placeholder.lastName'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('lastName')}
                      value={lastName}
                      name='lastName'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <div className='mobile'>
                  <FormattedMessage id='checkout.placeholder.mobile'>
                    {(msg) => (
                      <input
                        type='text'
                        onChange={handleChange('mobile')}
                        value={mobile}
                        name='mobile'
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <FormattedMessage id='checkout.placeholder.addressLine1'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('address1')}
                      value={address1}
                      name='address1'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id='checkout.placeholder.addressLine2'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('address2')}
                      value={address2}
                      name='address2'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id='checkout.placeholder.city'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('city')}
                      value={city}
                      name='city'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id='checkout.placeholder.state'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('state')}
                      value={state}
                      name='state'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>
                <FormattedMessage id='checkout.placeholder.pinCode'>
                  {(msg) => (
                    <input
                      type='text'
                      onChange={handleChange('pincode')}
                      value={pincode}
                      name='pincode'
                      placeholder={msg}
                    />
                  )}
                </FormattedMessage>

                <div className='row'>
                  <div className='col span-1-of-2'></div>
                  <div className='col span-1-of-2'>
                    <button
                      type='submit'
                      className='button-red login-btn signup-link'
                    >
                      <FormattedMessage id='checkout.payNow' />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Checkout;
