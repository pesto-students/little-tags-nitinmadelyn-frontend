import React, { useState, useRef, useEffect } from 'react';
import './Autocomplete.css';
import _debounce from 'lodash-es/debounce';
import { Link } from 'react-router-dom';
import config from '../../config/config'

import axios from 'axios';

const Autocomplete = ({ toggleSearch }) => {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const debouncedHandleChange = _debounce(handleChange, 500);

  useEffect(() => {
    if (userInput) {
      filterData();
    } else {
      setProductList([]);
    }
  }, [userInput]);

  const filterData = async () => {
    setIsLoading(true);
    const response = await axios
      .get(`${config.apiEndPoint}/product/search/${userInput}`)
      .catch((error) => console.log(error));

    if (response) {
      setProductList(response.data.items.product);
      setIsLoading(false);
    }
  };
  return (
    <div className='wrapper'>
      <div className={`control ${!!isLoading ? 'is-loading' : ''}`}>
        <input
          className='search-box-input'
          placeholder='Search product by name'
          onChange={debouncedHandleChange}
        />
      </div>
      <div className='list'>
        {productList.map((product, index) => {
          return (
            <Link
              to={`/product-details/${product.id}`}
              className='list-item'
              style={{ color: 'white' }}
              key={product.id}
              onClick={() => {
                document.getElementsByClassName('search-box-input')[0].value =
                  '';
                toggleSearch();
                setUserInput('');
                setProductList([]);
              }}
              onBlur={toggleSearch}
            >
              {product.name}
            </Link>
          );
        })}
        {userInput && isLoading && (
          <p className='list-item' style={{ color: 'white' }}>
            Loading...
          </p>
        )}
        {userInput && !isLoading && !productList.length && (
          <p className='list-item' style={{ color: 'white' }}>
            No product Found
          </p>
        )}
      </div>
    </div>
  );
};

export { Autocomplete };
