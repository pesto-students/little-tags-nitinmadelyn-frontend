import React from "react";
import maincss from "../../assets/css/main.css";
import searchresultcss from "./searchresult.css";
import { Link } from "react-router-dom";
import { LanguageContext, languageObj } from "../../context/language-context";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import flatten from "flat";
import { useHistory, useParams } from "react-router-dom";
import hoodieimg from '../../assets/img/hoodie.png'

const SearchResult = (props) => {
  const searchKeyword = useParams();
  const history = useHistory();
  const [products, setProducts] = React.useState([]);
  console.log(props)
  React.useEffect(
    () => {
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://little-tags-app.herokuapp.com/product/search',
        'headers': { 'Content-Type': 'application/json' },
        body: JSON.stringify({"language": props.language})
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        const results = JSON.parse(response.body);
        if(results.status === 'success'){
          setProducts(Object.values(results.items))
        } else {
          alert("There's some error")
        }
      });
    },
    [props.language]
  );

  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language.language}
          messages={flatten(languageObj[language.language])}
        >
          <main>
            <section className="main-container">
              <div className="row">
                <div className="col span-1-of-4">
                  <div className="filter-bg">
                    <div className="row">
                      <h3><FormattedMessage id="category.filters" /></h3>
                      <hr />
                    </div>

                    <div className="row">
                      <div className="col span-2-of-2">
                        <h4><FormattedMessage id="category.allFilters.brand" /></h4>
                        <div className="brand-box">
                        <label><input type="checkbox" /> Puma</label>
                        <label><input type="checkbox" /> Levi's</label>
                        <label><input type="checkbox" /> Pepe Jeans</label>
                        <label><input type="checkbox" /> Adidas</label>
                        <label><input type="checkbox" /> Wrangler</label>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col span-2-of-2">
                        <h4><FormattedMessage id="category.allFilters.price" /></h4>
                        <input
                          type="text"
                          name="minPrice"
                          placeholder="Min"
                          className="price-filter"
                        />
                        <input
                          type="text"
                          name="maxPrice"
                          placeholder="Max"
                          className="price-filter"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col span-2-of-2">
                      <h4><FormattedMessage id="category.allFilters.size" /></h4>
                      <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>XXL</option>
                      </select>
                    </div>
                    </div>
                    <hr />

                    <div className="row">
                    <div className="col span-2-of-2">
                      <h4><FormattedMessage id="category.allFilters.color" /></h4>
                      <div className="color-box">
                      <span className="small-square red"></span>
                      <span className="small-square white"></span>
                      <span className="small-square blue"></span>
                      <span className="small-square green"></span>
                      <span className="small-square black"></span>
                      <span className="small-square yellow"></span>
                      <span className="small-square orange"></span>
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
                <div className="col span-3-of-4">
                  <div className="filter-bg">
                    <div className="row result-title">
                      <h3><FormattedMessage id="category.result" values={{name: searchKeyword.text}}  /></h3>
                      <hr />
                    </div>
                    <div className="item-container">
                    { products.map((product) => 
                            <div className="row item">
                            <Link to="/product-details/1"><img src={hoodieimg} className="item-image" /></Link>
                            <h2>{product.name}</h2>
                            <div className="item-price">{product.currency}{product.price}</div>
                            <button className="button-red item-add-to-cart"><FormattedMessage id="category.addtocart" /></button>
                        </div>
                      ) 
                    }
                    {/*<div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>
                    <div className="row item">
                        <img src={hoodieimg} className="item-image" />
                        <h2>NIKE Hoodie</h2>
                        <div className="item-price">₹999</div>
                        <button className="button-red item-add-to-cart">Add to cart</button>
                    </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default SearchResult;
