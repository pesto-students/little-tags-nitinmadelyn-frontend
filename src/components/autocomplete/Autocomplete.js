import React, { useState, useRef, useEffect } from 'react';
import './Autocomplete.css';
import _debounce from 'lodash-es/debounce';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Autocomplete = ({ toggleSearch }) => {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const debouncedHandleChange = _debounce(handleChange, 500);

  const rootUrl =
    'http://ec2-13-127-218-228.ap-south-1.compute.amazonaws.com:3000';

  useEffect(() => {
    if (userInput) {
      filterData();
    } else {
      setProductList([]);
    }
  }, [userInput]);

  const filterData = async () => {
    setIsLoading(true);

    // const response = await axios(
    //   `${rootUrl}/product/${userInput}`
    // ).catch((error) => console.log(error));

    const response = await axios
      .post(`${rootUrl}/product/search`, {
        filters: [
          {
            key: 'price',
            value: [0, 1000],
          },
          {
            key: 'name',
            value: userInput,
          },
        ],
        language: 'en',
      })
      .catch((error) => console.log(error));

    if (response) {
      setProductList(response.data.items);
      console.log('productList', productList);
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
              to={`/product-details/${product.name}`}
              className='list-item'
              style={{ color: 'white' }}
              key={index}
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
