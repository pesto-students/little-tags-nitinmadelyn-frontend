import React from "react";
import maincss from "../../assets/css/main.css";
import profilecss from "./profile.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { LanguageContext, languageObj } from "../../context/language-context";
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from "react-intl";
import flatten from "flat";
import { useCookies } from "react-cookie";
import {
  PersonCircleOutline,
  LocationOutline,
  CartOutline,
  HeartCircleOutline,
  LogOutOutline,
} from "react-ionicons";
import { Input } from '../Form/Form';
import hoodieimg from '../../assets/img/hoodie.png'

const Profile = (props) => {
  const {tabName} = useParams();
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['Kloths']);
  

  const addAddress = () => {
    history.push("/profile/address")
  }

  const handleLogout = () => {
    setCookie('username', '', { path: '/' });
  }

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
                      <ul className="profile-menu">
                        <li>
                          <Link to="/profile/profile">
                          <PersonCircleOutline
                            color={"#fff"}
                            title={"Profile"}
                            height="32px"
                            width="32px"
                          />
                          <div>Profile</div>
                          </Link>
                        </li>
                        <li>
                        <Link to="/profile/address">
                          <LocationOutline
                            color={"#fff"}
                            title={"Addressess"}
                            height="32px"
                            width="32px"
                          />
                          <div>Addresses</div>
                          </Link>
                        </li>
                        <li>
                        <Link to="/profile/orders">
                          <CartOutline
                            color={"#fff"}
                            title={"Orders"}
                            height="32px"
                            width="32px"
                          />
                          <div>Orders</div>
                          </Link>
                        </li>
                        <li>
                        <Link to="/profile/wishlist">
                          <HeartCircleOutline
                            color={"#fff"}
                            title={"Wishlist"}
                            height="32px"
                            width="32px"
                          />
                          <div>Wishlist</div>
                          </Link>
                        </li>
                        <li>
                        <Link to="/">
                          <LogOutOutline
                            color={"#fff"}
                            title={"Logout"}
                            height="32px"
                            width="32px"
                            onClick={handleLogout}
                          />
                          <div>Logout</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col span-3-of-4">
                  <div className="filter-bg section-right">
                    <div className="row">
                      {
                        (tabName === 'profile')?<><h3>Edit Profile</h3>
                        <hr />
                        <br/>
                        <div className="right-container">
                          <Input type="text" placeholder="First Name" />
                          <Input type="text" placeholder="Last Name" />
                          <Input type="text" placeholder="Email" />
                          <Input type="text" placeholder="Mobile Number" />
                          <button className="button-red edit-btn">EDIT</button>
                        </div></> : null
                      }

                      {
                        (tabName === 'address')?<><h3>Addresses</h3>
                        <hr />
                        <br/>
                        <div className="right-container">
                          <div className="row float-right">
                          <Link to="/profile/add-address">
                          <button className="button-red edit-btn">
                            Add New
                          </button>
                          </Link>
                          </div>
                          <div className="address-row">
                            <h4>Home</h4>
                            <p>C1002, Aakash Residency, beside YMCA club, sg highway</p>
                            <p>Ahmedabad, Gujarat, 380015</p>
                          </div>
                          <div className="address-row">
                            <h4>Office</h4>
                            <p>1002, Earth arise, beside YMCA club, sg highway</p>
                            <p>Ahmedabad, Gujarat, 380015</p>
                          </div>
                        </div></> : null
                      }

                      {
                        (tabName === 'add-address')?<><h3>Add Address</h3>
                        <hr />
                        <br/>
                        <div className="right-container">
                          <Input type="text" placeholder="Address 1" />
                          <Input type="text" placeholder="Address 2" />
                          <Input type="text" placeholder="City" />
                          <Input type="text" placeholder="State" />
                          <Input type="text" placeholder="Pincode" />
                          <button className="button-red edit-btn" onClick={addAddress}>ADD</button>
                        </div></> : null
                      }

                      {
                        (tabName === 'orders')?<><h3>Orders</h3>
                        <hr />
                        <br/>
                        <div className="right-container">
                          <div className="address-row">
                            <div className="col span-1-of-4">
                              <img src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg" style={{height: "100%", width:"100%"}} />
                            </div>
                            <div className="col span-2-of-4">
                              <h3>NIKE HOODIE</h3>
                              <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                              <p>Ordered On: 20 Feb 2021</p>
                              <p>Delivered On: 22 Feb 2021</p>
                              <button className="button-red edit-btn margin-right-10px">
                                Buy It Again
                              </button>
                            </div>
                            <div className="col span-1-of-4 float-right" style={{padding:"0"}}>
                              <p>₹999</p>
                            </div>
                          </div>
                          <div className="address-row">
                            <div className="col span-1-of-4">
                              <img src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" style={{height: "100%", width:"100%"}} />
                            </div>
                            <div className="col span-2-of-4">
                              <h3>NIKE HOODIE</h3>
                              <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                              <p>Ordered On: 20 Feb 2021</p>
                              <p>Delivered On: 22 Feb 2021</p>
                              <button className="button-red edit-btn margin-right-10px">
                                Buy It Again
                              </button>
                            </div>
                            <div className="col span-1-of-4 float-right" style={{padding:"0"}}>
                              <p>₹999</p>
                            </div>
                          </div>
                        </div></> : null
                      }

{
                        (tabName === 'wishlist')?<><h3>Wishlist</h3>
                        <hr />
                        <br/>
                        <div className="right-container">
                          <div className="address-row">
                            <div className="col span-1-of-4">
                              <img src={hoodieimg} style={{height: "100%", width:"100%"}} />
                            </div>
                            <div className="col span-2-of-4">
                              <h3>NIKE HOODIE</h3>
                              <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                              <button className="button-red edit-btn margin-right-10px">
                                Move to cart
                              </button>
                              <button className="button-red edit-btn">
                                Delete
                              </button>
                            </div>
                            <div className="col span-1-of-4 float-right" style={{padding:"0"}}>
                              <p>₹999</p>
                            </div>
                          </div>
                          <div className="address-row">
                            <div className="col span-1-of-4">
                              <img src={hoodieimg} style={{height: "100%", width:"100%"}} />
                            </div>
                            <div className="col span-2-of-4">
                              <h3>NIKE HOODIE</h3>
                              <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                              <button className="button-red edit-btn margin-right-10px">
                                Move to cart
                              </button>
                              <button className="button-red edit-btn">
                                Delete
                              </button>
                            </div>
                            <div className="col span-1-of-4 float-right" style={{padding:"0"}}>
                              <p>₹999</p>
                            </div>
                          </div>
                        </div></> : null
                      }

                      
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

export default Profile;
