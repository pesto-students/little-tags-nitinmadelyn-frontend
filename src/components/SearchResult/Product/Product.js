import React from 'react'
import { LanguageContext, languageObj } from "../../../context/language-context";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import hoodieimg from '../../../assets/img/hoodie.png';
import flatten from "flat";
import { HeartOutline, Heart } from "react-ionicons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/cart-context";

const Product = (props) => {
  const { remove, increase, decrease, toggleAmount, addToCart } = useGlobalContext();
  const [heart, setHeart] = React.useState(true);
  const handleWishlist = (event) => {
    setHeart(!heart);
    console.log(event.target)
  }

  return (
    <LanguageContext.Consumer>
      {(language) => <IntlProvider
          locale={language.language}
          messages={flatten(languageObj[language.language])}
        >
          <div className="row item">
            <span className="wishlist-icon">
              {
                (heart)?
                  <HeartOutline
                    color={'#c30'} 
                    fill={'#c30'}
                    title={'Wishlist'}
                    height="32px"
                    width="32px"
                    id={props.product.id}
                    onClick={handleWishlist}
                  /> : <Heart
                  color={'#c30'} 
                  fill={'#c30'}
                  title={'Wishlist'}
                  height="32px"
                  width="32px"
                  id={props.product.id}
                  onClick={handleWishlist}
                />
              }
              
            </span>
            <Link to="/product-details/1"><img src={props.product.image} className="item-image" /></Link>
            <h2>{props.product.name}</h2>
            <div className="item-price">{props.product.currency}{props.product.price}</div>
            <button className="button-red item-add-to-cart" onClick={() => addToCart(props.product.id, props.product.name, props.product.price, props.product.description, props.product.image, props.product.amount)}><FormattedMessage id="category.addtocart" /></button>
        </div>
        </IntlProvider>}
    </LanguageContext.Consumer>
  )
}

export default Product;