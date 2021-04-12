import React from 'react';
import maincss from '../../assets/css/main.css';
import searchresultcss from './searchresult.css';
import { Link } from 'react-router-dom';
import { LanguageContext, languageObj } from '../../context/language-context';
import { HeartOutline, Heart } from 'react-ionicons';
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from 'react-intl';
import flatten from 'flat';
import { useHistory, useParams } from 'react-router-dom';
import hoodieimg from '../../assets/img/hoodie.png';
import Product from './Product/Product';
import config from '../../config/config';
import axios from 'axios';

const SearchResult = (props) => {
  const searchKeyword = useParams();

  const history = useHistory();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    async function getProducts() {
      const response = await axios
        .post(`${config.apiEndPoint}/product/search`, {
          filters: [
            {
              key: 'price',
              value: [0, 1000],
            },
            {
              key: 'name',
              value: '',
            },
            {
              key: 'categoryId',
              value: `${searchKeyword.categoryId}`,
            },
            {
              key: 'subcategoryId',
              value: `${
                searchKeyword.subCategoryId ? searchKeyword.subCategoryId : ''
              }`,
            },
          ],
          language: 'en',
        })
        .catch((error) => console.log(error));

      if (response) {
        setProducts(response.data.items);
        setLoading(false);
      }
    }
    getProducts();
  }, [searchKeyword.text]);

  const loadingMessage = () => {
    return (
      <>
        <div
          className='alert alert-info test-center'
          style={{ display: loading ? '' : 'none' }}
        >
          Loading...
        </div>
      </>
    );
  };

  const noProduct = () => {
    return (
      <>
        <div
          className='alert alert-danger test-center'
          style={{ display: products.length == 0 && !loading ? '' : 'none' }}
        >
          No product found!
        </div>
      </>
    );
  };

  // React.useEffect(
  //   () => {
  //     var request = require('request');
  //     var options = {
  //       'method': 'POST',
  //       'url': config.apiEndPoint+'/product/search',
  //       'headers': { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({"language": props.language})
  //     };
  //     request(options, function (error, response) {
  //       if (error) throw new Error(error);
  //       const results = JSON.parse(response.body);
  //       if(results.status === 'success'){
  //         setProducts(Object.values(results.items))
  //       } else {
  //         alert("There's some error")
  //       }
  //     });
  //   },
  //   [props.language]
  // );

  return (
    <LanguageContext.Consumer>
      {(language) => (
        <IntlProvider
          locale={language.language}
          messages={flatten(languageObj[language.language])}
        >
          <main>
            <section className='main-container'>
              <div className='row'>
                <div className='col span-1-of-4'>
                  <div className='filter-bg'>
                    <div className='row'>
                      <h3>
                        <FormattedMessage id='category.filters' />
                      </h3>
                      <hr />
                    </div>

                    <div className='row'>
                      <div className='col span-2-of-2'>
                        <h4>
                          <FormattedMessage id='category.allFilters.brand' />
                        </h4>
                        <div className='brand-box'>
                          <label>
                            <input type='checkbox' />
                            <span></span> Puma
                          </label>
                          <label>
                            <input type='checkbox' />
                            <span></span> Levi's
                          </label>
                          <label>
                            <input type='checkbox' />
                            <span></span> Pepe Jeans
                          </label>
                          <label>
                            <input type='checkbox' />
                            <span></span> Adidas
                          </label>
                          <label>
                            <input type='checkbox' />
                            <span></span> Wrangler
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className='row'>
                      <div className='col span-2-of-2'>
                        <h4>
                          <FormattedMessage id='category.allFilters.price' />
                        </h4>
                        <input
                          type='text'
                          name='minPrice'
                          placeholder='Min'
                          className='price-filter'
                        />
                        <input
                          type='text'
                          name='maxPrice'
                          placeholder='Max'
                          className='price-filter'
                        />
                      </div>
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col span-2-of-2'>
                        <h4>
                          <FormattedMessage id='category.allFilters.size' />
                        </h4>
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

                    <div className='row'>
                      <div className='col span-2-of-2'>
                        <h4>
                          <FormattedMessage id='category.allFilters.color' />
                        </h4>
                        <div className='color-box'>
                          <span className='small-square red'></span>
                          <span className='small-square white'></span>
                          <span className='small-square blue'></span>
                          <span className='small-square green'></span>
                          <span className='small-square black'></span>
                          <span className='small-square yellow'></span>
                          <span className='small-square orange'></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col span-3-of-4'>
                  <div className='filter-bg'>
                    <div className='row result-title'>
                      {searchKeyword.text && (
                        <h3>
                          <FormattedMessage
                            id='category.result'
                            values={{ name: searchKeyword.text }}
                          />
                        </h3>
                      )}
                      {!searchKeyword.text && <h3>Results</h3>}
                      <hr />
                    </div>

                    <div className='item-container'>
                      {loadingMessage()}
                      {noProduct()}
                      {products.map((product) => (
                        <Product key={product.id} product={product} />
                      ))}
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
