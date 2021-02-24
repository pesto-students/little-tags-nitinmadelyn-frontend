import React from 'react';
import maincss from '../../assets/css/main.css';
import headerCSS from './header.css';
import Logo from '../../assets/img/logo.png';
import { MenuOutline, SearchOutline, GlobeOutline, CartOutline, PersonOutline } from 'react-ionicons'

const Header = (props) => {
  const [isSearchboxOpen, setIsSearchboxOpen] = React.useState(false);
  const [isSearchIcon, setIsSearchIcon] = React.useState(true);

  const searchInput = React.createRef();

  const toggleSearch = (event) => {
    setIsSearchboxOpen(!isSearchboxOpen); 
    setIsSearchIcon(!isSearchIcon);
  }

  React.useEffect((element) => {
    if(isSearchboxOpen){
      searchInput.current.focus();
    }
  }, [searchInput])


  let searchBox = <input type="text" name="search" placeholder="Search" onBlur={toggleSearch} ref={searchInput} />, 
  searchBoxIcon = <SearchOutline
                    color={'#444'} 
                    title={'Search'}
                    height="30px"
                    width="30px"
                    className="icon"
                    onClick={toggleSearch}
                  />;
  if(!isSearchIcon){
    searchBoxIcon = ''
  }

  return (
    <header className="section black-bg">
        <div className="row">
          <div className="col span-1-of-2">
            <MenuOutline
              color={'#fff'} 
              title={'Menu'}
              height="36px"
              width="36px"
              className="menu"
            />
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <div className="col span-1-of-2">
            <ul className="nav">
              <li>
                {(isSearchboxOpen)? searchBox : null}
                {searchBoxIcon}
              </li>
              <li>
                <PersonOutline
                  color={'#444'} 
                  title={'Search'}
                  height="30px"
                  width="30px"
                  className="icon"
                />
              </li>
              <li>
                <CartOutline
                  color={'#444'} 
                  title={'Search'}
                  height="30px"
                  width="30px"
                  className="icon"
                />
              </li>
              <li>
                <GlobeOutline
                  color={'#444'} 
                  title={'Search'}
                  height="30px"
                  width="30px"
                  className="icon"
                />
              </li>
            </ul>
          </div>
        </div>
    </header>
  );
};

export default Header;