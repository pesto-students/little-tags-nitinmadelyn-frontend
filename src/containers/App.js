import React from 'react';
import './App.css';
import Header from '../containers/header/header';
import Main from '../containers/main/main';
import Footer from '../containers/footer/footer';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';
import Shipping from '../components/Shipping/Shipping';
import Payment from '../components/Payment/Payment';
import ThankYou from '../components/ThankYou/ThankYou';
import SearchResult from '../components/SearchResult/SearchResult';
import { LanguageContext } from '../context/language-context';
import { CartProvider } from '../context/cart-context';
import { Route, Switch, useParams } from 'react-router-dom';
import Home from '../components/Home';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Error from '../components/error';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import PrivateRoute from '../auth/helper/PrivateRoute';

const App = (props) => {
  const [language, setLanguage] = React.useState('en');
  const handleChangeLanguage = (element) => {
    element.target.classList.add('selected');
    if (
      element.target.innerHTML.trim() === 'English' ||
      element.target.innerHTML.trim() === 'Inglesa'
    ) {
      element.target.nextSibling.classList.remove('selected');
      setLanguage('en');
    } else {
      element.target.previousSibling.classList.remove('selected');
      setLanguage('es');
    }
  };

  return (
    <LanguageContext.Provider value={{ language: language }}>
      <CartProvider>
        <Header handleChangeLanguage={handleChangeLanguage} />
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route
            path='/search/:categoryId/:subCategoryId/:text'
            component={(Header, SearchResult)}
          >
            <SearchResult language={language} />
          </Route>
          {/* <Route path="/profile/:tabName?" component={(Profile)}>
          <Profile />
          </Route> */}
          <Route path='/product-details/:proId'>
            <ProductDetails />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/shipping'>
            <Shipping />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/thankyou'>
            <ThankYou />
          </Route>
          <PrivateRoute path='/profile/:tabName?' component={Profile} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </LanguageContext.Provider>
  );
};

export default App;
