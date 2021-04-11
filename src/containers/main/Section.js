import React from 'react';
import { Link } from 'react-router-dom';
import cap from '../../assets/img/categories/cap.svg';
import glasses from '../../assets/img/categories/glasses.svg';
import blazer from '../../assets/img/categories/blazer.svg';
import jacket from '../../assets/img/categories/jacket.svg';
import fullShirt from '../../assets/img/categories/full-shirt.svg';
import halfShirt from '../../assets/img/categories/half-shirt.svg';
import fullTshirt from '../../assets/img/categories/full-tshirt.svg';
import halfTshirt from '../../assets/img/categories/half-tshirt.svg';
import belt from '../../assets/img/categories/belt.svg';
import underwear from '../../assets/img/categories/underwear.svg';
import watches from '../../assets/img/categories/watches.svg';
import gloves from '../../assets/img/categories/gloves.svg';
import formals from '../../assets/img/categories/formals.svg';
import jeans from '../../assets/img/categories/jeans.svg';
import shorts from '../../assets/img/categories/shorts.svg';
import joggers from '../../assets/img/categories/joggers.svg';
import shoes from '../../assets/img/categories/shoes.svg';
import socks from '../../assets/img/categories/socks.svg';

export default function Section({ category, categoryId, imgSrc }) {
  return (
    <section className='section'>
      <div className='row'>
        <div className='category-bg'>
          <div className='category-box-container'>
            <div className='hexagon'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1822ad6-9319-11eb-90f0-8fb1c7d2c872/${category}-Cap`}
                    >
                      <img src={cap} title='Cap' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a18240d4-9319-11eb-90f0-8fb1c7d2c872/${category}-Sunglasses`}
                    >
                      <img src={glasses} title='Sun Glasses' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-2'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1824eda-9319-11eb-90f0-8fb1c7d2c872/${category}-Blazers`}
                    >
                      <img src={blazer} title='Blazer' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1825baa-9319-11eb-90f0-8fb1c7d2c872/${category}-Jackets`}
                    >
                      <img src={jacket} title='Jacket' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-3'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1826686-9319-11eb-90f0-8fb1c7d2c872/${category}-Half Shirt`}
                    >
                      <img src={halfShirt} title='Half Shirt' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1826ffa-9319-11eb-90f0-8fb1c7d2c872/${category}-Half T-shirt`}
                    >
                      <img src={halfTshirt} title='Half T-Shirt' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-4'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1827932-9319-11eb-90f0-8fb1c7d2c872/${category}-Full Shirt`}
                    >
                      <img src={fullShirt} title='Full Shirt' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a182829c-9319-11eb-90f0-8fb1c7d2c872/${category}-Full T-shirt`}
                    >
                      <img src={fullTshirt} title='Full T-shirt' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-5'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1828bc0-9319-11eb-90f0-8fb1c7d2c872/${category}-Belt`}
                    >
                      <img src={belt} title='Belt' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a18294da-9319-11eb-90f0-8fb1c7d2c872/${category}-Underwear`}
                    >
                      <img src={underwear} title='Underwear' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-6'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1829ff2-9319-11eb-90f0-8fb1c7d2c872/${category}-Watches`}
                    >
                      <img src={watches} title='Watches' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a182ab8c-9319-11eb-90f0-8fb1c7d2c872/${category}-Gloves`}
                    >
                      <img src={gloves} title='Gloves' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-7'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1833692-9319-11eb-90f0-8fb1c7d2c872/${category}-Jeans`}
                    >
                      <img src={jeans} title='Jeans' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a18367ac-9319-11eb-90f0-8fb1c7d2c872/${category}-Formals`}
                    >
                      <img src={formals} title='Formals' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-8'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a18376f2-9319-11eb-90f0-8fb1c7d2c872/${category}-Shorts`}
                    >
                      <img src={shorts} title='Shorts' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a18384d0-9319-11eb-90f0-8fb1c7d2c872/${category}-Joggers`}
                    >
                      <img
                        src={joggers}
                        title='Joggers'
                        className='jogger-img'
                      />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className='hexagon hex-9'>
              <span>
                <ul>
                  <li>
                    <Link
                      to={`search/${categoryId}/a183915a-9319-11eb-90f0-8fb1c7d2c872/${category}-Shoes`}
                    >
                      <img src={shoes} title='Shoes' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`search/${categoryId}/a1839dda-9319-11eb-90f0-8fb1c7d2c872/${category}-Socks`}
                    >
                      <img src={socks} title='Socks' />
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <img src={imgSrc} className='mens-category' />
        </div>
      </div>
    </section>
  );
}
