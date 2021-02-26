import React from 'react';
import maincss from '../../assets/css/main.css';
import footercss from './footer.css';
import visamastercard from '../../assets/img/visa-mastercard.png';

const Footer = (props) => {
  return (
    <footer>
      <ul className="footer-links">
        <li>INFORMATION</li>
        <li>Who We Are</li>
        <li>Terms & Conditions</li>
        <li>Return & Refund Policy</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="footer-links quick-links">
        <li>QUICK LINKS</li>
        <li>Track Order</li>
        <li>Contact Us</li>
        <li>Shipping & Delivery</li>
      </ul>
      <ul className="footer-links quick-links">
        <li>PAYMENT MODE ACCEPTED</li>
        <li className="align-center"><img src={visamastercard} /></li>
      </ul>
      <p className="legal-text">© 2021, KLOTHS PVT LTD. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;