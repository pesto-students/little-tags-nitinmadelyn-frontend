import React from "react";
import "./App.css";
import Header from "../containers/header/header";
import Main from "../containers/main/main";
import Footer from "../containers/footer/footer";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { LanguageContext } from "../context/language-context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

function App() {
  const [language, setLanguage] = React.useState("EN");
  const handleChangeLanguage = (element) => {
    setLanguage(element.target.innerHTML);
    element.target.classList.add("selected");
    if (element.target.innerHTML === "EN") {
      element.target.nextSibling.classList.remove("selected");
    } else {
      element.target.previousSibling.classList.remove("selected");
    }
  };

  return (
    <LanguageContext.Provider value={{ language: language }}>
      <Switch>
        <Route path="/" exact>
          <Header handleChangeLanguage={handleChangeLanguage} />
          <Main />
          <Footer />
        </Route>
        <Route path="/login">
          <Header handleChangeLanguage={handleChangeLanguage} />
          <Login />
          <Footer />
        </Route>
        <Route path="/signup">
          <Header handleChangeLanguage={handleChangeLanguage} />
          <Signup />
          <Footer />
        </Route>
        <Route path="/product-details/:proId">
          <Header handleChangeLanguage={handleChangeLanguage} />
          <ProductDetails />
          <Footer />
        </Route>
      </Switch>
    </LanguageContext.Provider>
  );
}

export default App;
