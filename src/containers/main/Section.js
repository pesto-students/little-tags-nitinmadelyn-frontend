import React from "react";

export default function Section({ category, imgSrc }) {
  return (
    <section className="section">
      <div className="row">
        <div className="category-bg">
          <div className="category-box-container">
            <div className="hexagon">
              <span>
                <ul>
                  <li>CAP {category}</li>
                  <li>SUN GLASSES</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-2">
              <span>
                <ul>
                  <li>BLAZER</li>
                  <li>JACKET</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-3">
              <span>
                <ul>
                  <li>
                    HALF SLEEVE <br />
                    SHIRT
                  </li>
                  <li>
                    HALF SLEEVE <br />
                    T-SHIRT
                  </li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-4">
              <span>
                <ul>
                  <li>
                    FULL SLEEVE <br />
                    SHIRT
                  </li>
                  <li>
                    FULL SLEEVE <br />
                    T-SHIRT
                  </li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-5">
              <span>
                <ul>
                  <li>BELT</li>
                  <li>UNDERWEAR</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-6">
              <span>
                <ul>
                  <li>WATCHES</li>
                  <li>HAND GLOVES</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-7">
              <span>
                <ul>
                  <li>JEANS</li>
                  <li>FORMALS</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-8">
              <span>
                <ul>
                  <li>SHORTS</li>
                  <li>JOGGERS</li>
                </ul>
              </span>
            </div>
            <div className="hexagon hex-9">
              <span>
                <ul>
                  <li>SHOES</li>
                  <li>SOCKS</li>
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
