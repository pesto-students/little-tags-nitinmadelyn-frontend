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
import { LanguageContext } from "../../context/language-context";
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isSearchboxOpen, setIsSearchboxOpen] = React.useState(false);
  const [isSearchIcon, setIsSearchIcon] = React.useState(true);
  const [
    isHiddenLanguageDropdown,
    setIsHiddenLanguageDropdown,
  ] = React.useState(false);

  const searchInput = React.createRef();

  const toggleSearch = (event) => {
    setIsSearchboxOpen(!isSearchboxOpen);
    setIsSearchIcon(!isSearchIcon);
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

  let searchBox = (
      <input
        type="text"
        name="search"
        placeholder="Search"
        onBlur={toggleSearch}
        ref={searchInput}
      />
    ),
    searchBoxIcon = (
      <SearchOutline
        color={"#444"}
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

  return (
    <header className="section black-bg">
      <div className="row">
        <div className="col span-1-of-2 header-col">
          <MenuOutline
            color={"#fff"}
            title={"Menu"}
            height="36px"
            width="36px"
            className="menu"
          />
          <Link to="/"><img src={Logo} className="logo" alt="logo" /></Link>
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
                  color={"#444"}
                  title={"Search"}
                  height="30px"
                  width="30px"
                  className="icon"
                />
              </Link>
            </li>
            <li>
              <CartOutline
                color={"#444"}
                title={"Search"}
                height="30px"
                width="30px"
                className="icon"
              />
            </li>
            <li>
              <GlobeOutline
                color={"#444"}
                title={"Search"}
                height="30px"
                width="30px"
                className="icon"
                onClick={togglelanguageDropdown}
              />
              {isHiddenLanguageDropdown ? (
                <LanguageContext.Consumer>
                  {(language) => (
                    <div className="language-dropdown" onClick={togglelanguageDropdown}>
                      <span className={(language.language === 'EN')?'selected':null} onClick={props.handleChangeLanguage}>EN</span>
                      <span className={(language.language === 'ES')?'selected':null} onClick={props.handleChangeLanguage}>ES</span>
                    </div>
                  )}
                </LanguageContext.Consumer>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
