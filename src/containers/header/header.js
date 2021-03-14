import React from "react";
import maincss from "../../assets/css/main.css";
import headerCSS from "./header.css";
import Logo from "../../assets/img/logo.png";
import {
  MenuOutline,
  SearchOutline,
  GlobeOutline,
  CartOutline,
  PersonOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";
import aboutIcon from "../../assets/img/about.svg";
import contactIcon from "../../assets/img/contact-us.svg";
import closeIcon from "../../assets/img/close.svg";
import menIcon from "../../assets/img/men.svg";
import womenIcon from "../../assets/img/women.svg";
import kidIcon from "../../assets/img/kid.svg";

import { LanguageContext, languageObj } from "../../context/language-context";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import flatten from 'flat';
import { useHistory, useParams } from "react-router-dom";

const Header = (props) => {
  const searchKeyword = useParams();
  const history = useHistory();
  
  const [isSearchboxOpen, setIsSearchboxOpen] = React.useState(searchKeyword.text);
  const [isSearchIcon, setIsSearchIcon] = React.useState(!searchKeyword.text);
  
  const [
    isHiddenLanguageDropdown,
    setIsHiddenLanguageDropdown,
  ] = React.useState(false);

  const searchInput = React.createRef();

  const toggleSearch = (event) => {
    if(!searchKeyword.text){
      setIsSearchboxOpen(!isSearchboxOpen);
      setIsSearchIcon(!isSearchIcon);
    }
  };

  const togglelanguageDropdown = (event) => {
    setIsHiddenLanguageDropdown(!isHiddenLanguageDropdown);
    //props.handleChangeLanguage(event)
  };

  React.useEffect(
    (element) => {
      if (isSearchboxOpen) {
        searchInput.current.focus();
      }
    },
    [searchInput]
  );
  
  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/search/'+e.target.children[0].value);
  }
  let searchBox = (
      <form onSubmit={submitHandler}>
      <input
        type="text"
        name="q"
        placeholder="Search"
        onBlur={toggleSearch}
        ref={searchInput}
        value={searchKeyword.text}
      />
      </form>
    ),
    searchBoxIcon = (
      <SearchOutline
        color={"#fff"}
        title={"Search"}
        height="30px"
        width="30px"
        className="icon"
        onClick={toggleSearch}
      />
    );
  if (!isSearchIcon) {
    searchBoxIcon = "";
  }

  //menu toggle function
  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuStyle = { display: (isMenuOpen) ? 'block' : 'none' } //({isMenuOpen}) => (isMenuOpen)? 'block':'none'
  
  return (
    <LanguageContext.Consumer>
      {(language) => 
        <IntlProvider
        locale={language.language}
        messages={flatten(languageObj[language.language])}
      >
        <header className="section black-bg">
          <div className="menu-shadow" onClick={toggleMenu} style={menuStyle}>&nbsp;</div>
          <nav className="menu-box" style={menuStyle}>
            <div className="main-menu part-0">
              {/*<div className="row float-right" onClick={toggleMenu}>X</div>*/}
              <div className="row item">
                <span onClick={toggleMenu} style={{cursor: "pointer"}}><img src={closeIcon} style={{height:"21px"}} /></span>
                <img src={Logo} style={{ height: "29px", width: "auto", paddingLeft: "6px", paddingTop:'7px' }} />
              </div>
              <br />
              <br />
              <br />
              <div className="row item item1"><img src={aboutIcon} /><span><FormattedMessage id="footer.links1.link1" /></span></div>
              <div className="row item item1"><img src={contactIcon} /><span><FormattedMessage id="footer.links2.link1" /></span></div>
            </div>
            <div className="main-menu part-1">
              <img src={menIcon} /> <span><FormattedMessage id="home.mens" /></span>
            </div>
            <div className="main-menu part-2">
              <img src={womenIcon} />
              <span><FormattedMessage id="home.women" /></span>
            </div>
            <div className="main-menu part-3">
              <img src={kidIcon} />
              <span><FormattedMessage id="home.kids" /></span>
            </div>
            <div></div>
          </nav>
          <div className="row">
            <div className="col span-1-of-2 header-col">
              <MenuOutline
                color={"#fff"}
                title={"Menu"}
                height="36px"
                width="36px"
                className="menu"
                onClick={toggleMenu}
              />
              <Link to="/">
                <img src={Logo} className="logo" alt="logo" />
              </Link>
            </div>
            <div className="col span-1-of-2 header-col">
              <ul className="nav">
                <li>
                  {isSearchboxOpen ? searchBox : null}
                  {searchBoxIcon}
                </li>
                <li>
                  <Link to="/login">
                    <PersonOutline
                      color={"#fff"}
                      title={"Search"}
                      height="30px"
                      width="30px"
                      className="icon"
                    />
                  </Link>
                </li>
                <li>
                  <CartOutline
                    color={"#fff"}
                    title={"Search"}
                    height="30px"
                    width="30px"
                    className="icon"
                  />
                </li>
                <li>
                  <GlobeOutline
                    color={"#fff"}
                    title={"Search"}
                    height="30px"
                    width="30px"
                    className="icon"
                    onClick={togglelanguageDropdown}
                  />
                  {isHiddenLanguageDropdown ? (
                    <LanguageContext.Consumer>
                      {(language) => (
                        <div
                          className="language-dropdown"
                          onClick={togglelanguageDropdown}
                        >
                          <span
                            className={
                              language.language === "en" ? "selected" : null
                            }
                            onClick={props.handleChangeLanguage}
                          >
                            EN
                          </span>
                          <span
                            className={
                              language.language === "es" ? "selected" : null
                            }
                            onClick={props.handleChangeLanguage}
                          >
                            ES
                          </span>
                        </div>
                      )}
                    </LanguageContext.Consumer>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </header>
        </IntlProvider>
      }
    </LanguageContext.Consumer>
  );
};

export default Header;
