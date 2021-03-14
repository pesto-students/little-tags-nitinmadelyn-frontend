import React from "react";
import {Link} from 'react-router-dom';
import cap from '../../assets/img/categories/cap.svg'
import glasses from '../../assets/img/categories/glasses.svg'
import blazer from '../../assets/img/categories/blazer.svg'
import jacket from '../../assets/img/categories/jacket.svg'
import fullShirt from '../../assets/img/categories/full-shirt.svg'
import halfShirt from '../../assets/img/categories/half-shirt.svg'
import fullTshirt from '../../assets/img/categories/full-tshirt.svg'
import halfTshirt from '../../assets/img/categories/half-tshirt.svg'
import belt from '../../assets/img/categories/belt.svg'
import underwear from '../../assets/img/categories/underwear.svg'
import watches from '../../assets/img/categories/watches.svg'
import gloves from '../../assets/img/categories/gloves.svg'
import formals from '../../assets/img/categories/formals.svg'
import jeans from '../../assets/img/categories/jeans.svg'
import shorts from '../../assets/img/categories/shorts.svg'
import joggers from '../../assets/img/categories/joggers.svg'
import shoes from '../../assets/img/categories/shoes.svg'
import socks from '../../assets/img/categories/socks.svg'

export default function Section({ category, imgSrc }) {
  return (
    <section className="section">
      <div className="row">
        <div className="category-bg">
          <div className="category-box-container">
            <div className="hexagon">
              <span>
                <ul>
                  <li><Link to="search/cap"><img src={cap} title="Cap" /></Link></li>
                  <li><Link to="search/sun glasses"><img src={glasses} title="Sun Glasses" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-2">
              <span>
                <ul>
                  <li><Link to="search/blazer"><img src={blazer} title="Blazer" /></Link></li>
                  <li><Link to="search/jacket"><img src={jacket} title="Jacket" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-3">
              <span>
                <ul>
                  <li>
                  <Link to="search/half sleeve shirt"><img src={halfShirt} title="Half Shirt" /></Link>
                  </li>
                  <li>
                  <Link to="search/half sleeve t-shirt"><img src={halfTshirt} title="Half T-Shirt" /></Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-4">
              <span>
                <ul>
                  <li>
                  <Link to="search/full sleeve shirt"><img src={fullShirt} title="Full Shirt" /></Link>
                  </li>
                  <li>
                  <Link to="search/full sleeve t-shirt"><img src={fullTshirt} title="Full T-shirt" /></Link>
                  </li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-5">
              <span>
                <ul>
                  <li><Link to="search/belt"><img src={belt} title="Belt" /></Link></li>
                  <li><Link to="search/underwear"><img src={underwear} title="Underwear" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-6">
              <span>
                <ul>
                  <li><Link to="search/watches"><img src={watches} title="Watches" /></Link></li>
                  <li><Link to="search/hand gloves"><img src={gloves} title="Gloves" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-7">
              <span>
                <ul>
                  <li><Link to="search/jeans"><img src={jeans} title="Jeans" /></Link></li>
                  <li><Link to="search/formals"><img src={formals} title="Formals" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-8">
              <span>
                <ul>
                  <li><Link to="search/shorts"><img src={shorts} title="Shorts" /></Link></li>
                  <li><Link to="search/joggers"><img src={joggers} title="Joggers" /></Link></li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-9">
              <span>
                <ul>
                  <li><Link to="search/shoes"><img src={shoes} title="Shoes" /></Link></li>
                  <li><Link to="search/socks"><img src={socks} title="Socks" /></Link></li>
                </ul>
              </span>
            </div>
          </div>
          <img src={imgSrc} className="mens-category" />
        </div>
      </div>
    </section>
  );
}
