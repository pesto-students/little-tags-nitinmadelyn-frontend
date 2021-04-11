import React, { useState } from 'react';
import logincss from './login.css';
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
import config from '../../config/config';
import { userLogin, authenticate, isAuthenticated } from '../../auth/helper';

const Login = (props) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: 'nitin.madelyn@gmail.com',
    password: 'Ilovepesto',
    error: '',
    success: '',
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, success, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    userLogin({ email, password })
      .then((data) => {
        if (data.status === 'success') {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        } else {
          setValues({ ...values, error: data.message, loading: false });
        }
      })
      .catch(console.log('error in login'));
  };

  const performRedirect = () => {
    if (didRedirect && isAuthenticated()) {
      return <Redirect to='/profile/profile' />;
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

  //const [cookies, setCookie] = useCookies(['Kloths']);

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   setCookie('username', 'nitin', { path: '/' });
  //   history.push('/profile/profile');
  // };

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
                    <FormattedMessage id='login.title' />
                  </h1>
                  <hr />
                  <br />
                  {loadingMessage()}
                  {errorMessage()}
                  <div className='mobile'>
                    <FormattedMessage id='login.placeholder.email'>
                      {(msg) => (
                        <input
                          type='text'
                          value={email}
                          onChange={handleChange('email')}
                          name='email'
                          placeholder={msg}
                        />
                      )}
                    </FormattedMessage>
                    <span>
                      <FormattedMessage id='login.placeholder.sendOTP' />
                    </span>
                  </div>

                  <FormattedMessage id='login.placeholder.password'>
                    {(msg) => (
                      <input
                        type='text'
                        value={password}
                        onChange={handleChange('password')}
                        name='password'
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
                        <FormattedMessage id='login.title' />
                      </button>
                    </div>
                    <div className='col span-1-of-2'>
                      <Link to='/signup' className='signup-link'>
                        <FormattedMessage id='login.signupLink' />
                      </Link>
                    </div>
                  </div>
                  <div className='row'>
                    <h3 className='margin-top-40'>
                      <FormattedMessage id='login.or' />
                    </h3>
                  </div>
                  <div className='row'>
                    <div className='col span-1-of-2'>
                      <GoogleLoginButton className='google-btn'>
                        <span>
                          <FormattedMessage id='login.socialButtons.google' />
                        </span>
                      </GoogleLoginButton>
                    </div>
                    <div className='col span-1-of-2'>
                      <FacebookLoginButton className='facebook-btn'>
                        <span>
                          <FormattedMessage id='login.socialButtons.facebook' />
                        </span>
                      </FacebookLoginButton>
                    </div>
                  </div>
                  {performRedirect()}
                </form>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Login;
