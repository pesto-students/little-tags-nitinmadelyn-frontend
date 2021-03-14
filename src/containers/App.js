import React from "react";
import "./App.css";
import Header from "../containers/header/header";
import Main from "../containers/main/main";
import Footer from "../containers/footer/footer";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Profile from "../components/Profile/Profile";
import SearchResult from "../components/SearchResult/SearchResult";
import { LanguageContext } from "../context/language-context";
import { CartProvider } from "../context/cart-context";
import { Route, Switch, useParams } from "react-router-dom";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Error from "../components/error";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

const App = (props) => {
  const [language, setLanguage] = React.useState("en");
  const handleChangeLanguage = (element) => {
    setLanguage(element.target.innerHTML.toLowerCase());
    element.target.classList.add("selected");
    if (element.target.innerHTML === "en") {
      element.target.nextSibling.classList.remove("selected");
    } else {
      element.target.previousSibling.classList.remove("selected");
    }
  };

  return (
    <LanguageContext.Provider value={{ language: language }}>
      <CartProvider>
        <Header handleChangeLanguage={handleChangeLanguage} />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/search/:text" component={(Header, SearchResult)}>
            <SearchResult language={language} />
          </Route>
          <Route path="/profile/:tabName?" component={Profile}>
            <Header handleChangeLanguage={handleChangeLanguage} />
            <Profile />
            <Footer />
          </Route>
          <Route path="/product-details/:proId">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </LanguageContext.Provider>
  );
};

export default App;
