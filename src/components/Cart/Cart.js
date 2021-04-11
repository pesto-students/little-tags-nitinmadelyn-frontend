import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/cart-context';
import './Cart.scss';

import { LanguageContext, languageObj } from '../../context/language-context';
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from 'react-intl';
import flatten from 'flat';
import { isAuthenticated } from '../../auth/helper';

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
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
                <h2>{<FormattedMessage id='cart.bagEmpty' />}</h2>

                <Link
                  to='/'
                  className='button-red'
                  style={{ marginLeft: '2vw' }}
                >
                  {<FormattedMessage id='cart.backHome' />}
                </Link>
              </div>
            </main>
          </IntlProvider>
        )}
      </LanguageContext.Consumer>
    );
  }
  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language.language])}
        >
          <main className='app'>
            <section>
              <h2>{<FormattedMessage id='cart.shoppingCart' />}</h2>
            </section>
            <div className='shopping-cart'>
              <div className='column-labels'>
                <label className='product-image'>
                  {<FormattedMessage id='cart.image' />}
                </label>
                <label className='product-details'>
                  {<FormattedMessage id='cart.product' />}
                </label>
                <label className='product-price'>
                  <b>{<FormattedMessage id='cart.price' />}</b>
                </label>
                <label className='product-quantity'>
                  <b>{<FormattedMessage id='cart.quantity' />}</b>
                </label>
                <label className='product-removal'>
                  <b>{<FormattedMessage id='cart.remove' />}</b>
                </label>
                <label className='product-line-price'>
                  <b>Total</b>
                </label>
              </div>

              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}

              <div className='totals'>
                <div className='totals-item'>
                  <label>{<FormattedMessage id='cart.subTotal' />}</label>
                  <div className='totals-value' id='cart-subtotal'>
                    ₹ {total.toFixed(2)}
                  </div>
                </div>
                <div className='totals-item'>
                  <label>{<FormattedMessage id='cart.tax' />} (5%)</label>
                  <div className='totals-value' id='cart-tax'>
                    ₹ 4.00
                  </div>
                </div>
                <div className='totals-item'>
                  <label>{<FormattedMessage id='cart.shipping' />}</label>
                  <div className='totals-value' id='cart-shipping'>
                    ₹ 15.00
                  </div>
                </div>
                <div className='totals-item totals-item-total'>
                  <b>
                    <label>{<FormattedMessage id='cart.grandTotal' />}</label>
                  </b>
                  <div className='totals-value' id='cart-total'>
                    <b>₹ {(total + 19).toFixed(2)}</b>
                  </div>
                </div>
              </div>
              {isAuthenticated() && (
                <Link to='/shipping'>
                  <button className='checkout'>
                    {<FormattedMessage id='cart.checkout' />}
                  </button>
                </Link>
              )}
              {!isAuthenticated() && (
                <Link to='/login'>
                  <button className='checkout'>
                    {<FormattedMessage id='login.title' />}
                  </button>
                </Link>
              )}
              <Link to='/' className='cart-clear' onClick={clearCart}>
                {<FormattedMessage id='cart.continueShopping' />}
              </Link>
              <button
                className='cart-clear'
                style={{ marginLeft: '2vw' }}
                onClick={clearCart}
              >
                {<FormattedMessage id='cart.clearCart' />}
              </button>
            </div>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Cart;
