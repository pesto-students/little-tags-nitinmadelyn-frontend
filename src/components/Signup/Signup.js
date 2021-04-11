import React, { useState } from 'react';
import signupcss from './signup.css';
import { Link } from 'react-router-dom';
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
import config from '../../config/config';
import flatten from 'flat';
import { userSignup } from '../../auth/helper';

const Signup = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    otp: '',
    error: '',
    success: '',
  });

  const {
    firstName,
    lastName,
    email,
    password,
    mobile,
    otp,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    userSignup({ firstName, lastName, email, password, mobile, otp })
      .then((data) => {
        if (data.status === 'success') {
          setValues({
            ...values,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobile: '',
            otp: '',
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
                <form>
                  <h1 className='left-align'>
                    <FormattedMessage id='signup.title' />
                  </h1>
                  <hr />
                  {successMessage()}
                  {errorMessage()}
                  <FormattedMessage id='signup.placeholder.firstName'>
                    {(msg) => (
                      <input
                        type='text'
                        name='firstName'
                        onChange={handleChange('firstName')}
                        value={firstName}
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                  <FormattedMessage id='signup.placeholder.lastName'>
                    {(msg) => (
                      <input
                        type='text'
                        name='lastName'
                        onChange={handleChange('lastName')}
                        value={lastName}
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                  <FormattedMessage id='signup.placeholder.email'>
                    {(msg) => (
                      <input
                        type='text'
                        name='email'
                        onChange={handleChange('email')}
                        value={email}
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                  <FormattedMessage id='signup.placeholder.password'>
                    {(msg) => (
                      <input
                        type='text'
                        name='password'
                        onChange={handleChange('password')}
                        value={password}
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                  <div className='mobile'>
                    <FormattedMessage id='signup.placeholder.mobile'>
                      {(msg) => (
                        <input
                          type='text'
                          name='mobile'
                          onChange={handleChange('mobile')}
                          value={mobile}
                          placeholder={msg}
                        />
                      )}
                    </FormattedMessage>

                    <span>
                      <FormattedMessage id='signup.placeholder.sendOTP' />
                    </span>
                  </div>

                  <FormattedMessage id='signup.placeholder.OTP'>
                    {(msg) => (
                      <input
                        type='text'
                        name='otp'
                        onChange={handleChange('otp')}
                        value={otp}
                        placeholder={msg}
                      />
                    )}
                  </FormattedMessage>
                  <div className='row'>
                    <div className='col span-1-of-2'>
                      <button
                        type='submit'
                        onClick={onSubmit}
                        className='button-red login-btn'
                      >
                        <FormattedMessage id='signup.title' />
                      </button>
                    </div>

                    <div className='col span-1-of-2'>
                      <Link to='/login' className='signup-link'>
                        <FormattedMessage id='signup.loginLink' />
                      </Link>
                    </div>
                  </div>

                  <div className='row'>
                    <h3 className='margin-top-40'>
                      <FormattedMessage id='signup.or' />
                    </h3>
                  </div>
                  <div className='row'>
                    <div className='col span-1-of-2'>
                      <GoogleLoginButton className='google-btn'>
                        <span>
                          <FormattedMessage id='signup.socialButtons.google' />
                        </span>
                      </GoogleLoginButton>
                    </div>
                    <div className='col span-1-of-2'>
                      <FacebookLoginButton className='facebook-btn'>
                        <span>
                          <FormattedMessage id='signup.socialButtons.facebook' />
                        </span>
                      </FacebookLoginButton>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Signup;
