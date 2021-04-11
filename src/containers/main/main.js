import React, { useState } from 'react';
import maincss from './main.css';
import newarrival from '../../assets/img/new-arrival.png';
import mens from '../../assets/img/mens.png';
import { LanguageContext, languageObj } from '../../context/language-context';
import ReactHtmlParser from 'react-html-parser';
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from 'react-intl';
import Section from './Section';
import Tab from './Tab';
import Slider from './Slider';

import men from '../../assets/img/men.png';
import kids from '../../assets/img/kids.jpg';
import women from '../../assets/img/women.webp';

import menIcon from '../../assets/img/men-white.svg';
import womenIcon from '../../assets/img/women-white.svg';
import kidIcon from '../../assets/img/kid-white.svg';

import flatten from 'flat';
import Product from '../../components/SearchResult/Product/Product';

const Main = (props) => {
  const [currentSection, setSection] = useState('Men');
  let component;
  const changeSection = (section) => setSection(section);
  const getSection = () => {
    switch (currentSection) {
      case 'Men':
        component = (
          <Section
            category='Men'
            categoryId='60f0c15d-e1c8-428c-96cb-0a47ded6d8ca'
            imgSrc={men}
          />
        );
        break;
      case 'Women':
        component = (
          <Section
            category='Women'
            categoryId='7758f0d3-8713-4943-bf2a-77445d7f3e32'
            imgSrc={women}
          />
        );
        break;
      case 'Kids':
        component = (
          <Section
            category='Kids'
            categoryId='1ea83d29-7617-4e62-9e77-b0e7d2654953'
            imgSrc={kids}
          />
        );
        break;
      default:
        component = (
          <Section
            category='Men'
            categoryId='60f0c15d-e1c8-428c-96cb-0a47ded6d8ca'
            imgSrc={men}
          />
        );
    }
    return component;
  };

  const handleClick = (section) => (e) => {
    e.preventDefault();
    changeSection(section);
  };

  let products;
  if (props.language === 'es') {
    products = [
      {
        id: 1,
        name: 'Sudadera NIKE 1',
        description: 'Sudadera NIKE 1',
        amount: 1,
        currency: '€',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg',
      },
      {
        id: 2,
        name: 'Sudadera NIKE 2',
        description: 'Sudadera NIKE 2',
        amount: 1,
        currency: '€',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg',
      },
      {
        id: 3,
        name: 'Sudadera NIKE 3',
        description: 'Sudadera NIKE 3',
        amount: 1,
        currency: '€',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg',
      },
      {
        id: 4,
        name: 'Sudadera NIKE 4',
        description: 'Sudadera NIKE 4',
        amount: 1,
        currency: '€',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10576462/2020/6/17/691eb1a3-3549-4211-a62f-df38a8c37e481592390098023-Roadster-Men-Tshirts-5491592390094405-1.jpg',
      },
    ];
  } else {
    products = [
      {
        id: 1,
        name: 'NIKE Hoodie',
        description: 'NIKE Hoodie',
        amount: 1,
        currency: '₹',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg',
      },
      {
        id: 2,
        name: 'NIKE Hoodie 1',
        description: 'NIKE Hoodie 1',
        amount: 1,
        currency: '₹',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg',
      },
      {
        id: 3,
        name: 'NIKE Hoodie 2',
        description: 'NIKE Hoodie 2',
        amount: 1,
        currency: '₹',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg',
      },
      {
        id: 4,
        name: 'NIKE Hoodie 3',
        description: 'NIKE Hoodie 3',
        amount: 1,
        currency: '₹',
        price: '999',
        image:
          'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10576462/2020/6/17/691eb1a3-3549-4211-a62f-df38a8c37e481592390098023-Roadster-Men-Tshirts-5491592390094405-1.jpg',
      },
    ];
  }

  return (
    <LanguageContext.Consumer>
      {({ language }) => (
        <IntlProvider
          locale={language}
          messages={flatten(languageObj[language])}
        >
          <main>
            {/*<Slider />*/}
            <section
              className='section new-arrival'
              style={{ backgroundImage: `url(${newarrival})` }}
            >
              <div className='row'>
                <div className='banner-text-box'>
                  <h1>
                    <FormattedMessage id='home.bannerText'>
                      {(text) => ReactHtmlParser(text)}
                    </FormattedMessage>
                  </h1>
                  <button className='button-red'>
                    <FormattedMessage id='home.bannerButton' />
                  </button>
                </div>
              </div>
            </section>
            <section className='section'>
              <div className='row'>
                <div className='main-bg'>
                  <Tab
                    onClick={handleClick('Men')}
                    label={<img src={menIcon} />}
                    isActive={currentSection === 'Men'}
                  />
                  <Tab
                    onClick={handleClick('Women')}
                    label={<img src={womenIcon} />}
                    isActive={currentSection === 'Women'}
                  />
                  <Tab
                    onClick={handleClick('Kids')}
                    label={<img src={kidIcon} />}
                    isActive={currentSection === 'Kids'}
                  />

                  {/*<div className="col span-1-of-3 main-category">
                  <a href="#" className="active">
                  <FormattedMessage id='mens' />
                  </a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='women' /></a>
                </div>
                <div className="col span-1-of-3 main-category">
                  <a href="#"><FormattedMessage id='kids' /></a>
                </div>*/}
                </div>
              </div>
            </section>
            {getSection()}

            <section className='section'>
              <div className='row'>
                <div className='main-bg' style={{ height: 'auto' }}>
                  <div className='row' style={{ padding: '0 20px' }}>
                    <h1>TRENDING</h1>
                    <hr />
                  </div>
                  <div
                    className='item-container'
                    style={{ margin: '0px 10px' }}
                  >
                    <Product product={products[0]} />
                    <Product product={products[1]} />
                    <Product product={products[2]} />
                    <Product product={products[3]} />
                    <Product product={products[1]} />
                  </div>
                  <div className='row'>&nbsp;</div>
                </div>
              </div>
            </section>
          </main>
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  );
};

export default Main;

{
  /*<Product product={product} />*/
}
{
  /*<main>
      <section className="section new-arrival">
        <div className="row">
          <div className="banner-text-box">
            <h1>
              New Arrival <br /> T-Shirt Collections
            </h1>
            <button className="button-red">SHOP NOW</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="row">
          <div className="main-bg">
            <Tab
              onClick={handleClick("Men")}
              label="Men"
              isActive={currentSection === "Men"}
            />
            <Tab
              onClick={handleClick("Women")}
              label="Women"
              isActive={currentSection === "Women"}
            />
            <Tab
              onClick={handleClick("Kids")}
              label="Kids"
              isActive={currentSection === "Kids"}
            />
          </div>
        </div>
      </section>

      {getSection()}
    </main>*/
}
