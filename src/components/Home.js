import React from "react";
import Header from '../containers/header/header';
import Main from '../containers/main/main';
import Footer from '../containers/footer/footer';

const Home = (props) => {
  return (
    <>
    <Header handleChangeLanguage={props.handleChangeLanguage} />
    <Main />
    <Footer />
    </>
  )
};

export default Home;
