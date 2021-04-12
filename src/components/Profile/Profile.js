import React, { useState, useEffect } from 'react';
import maincss from '../../assets/css/main.css';
import profilecss from './profile.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import { LanguageContext, languageObj } from '../../context/language-context';
import {
  IntlProvider,
  FormattedMessage,
  FromattedHTMLMessage,
} from 'react-intl';
import flatten from 'flat';
import { useCookies } from 'react-cookie';
import {
  PersonCircleOutline,
  LocationOutline,
  CartOutline,
  HeartCircleOutline,
  LogOutOutline,
} from 'react-ionicons';
import { Input } from '../Form/Form';
import hoodieimg from '../../assets/img/hoodie.png';
import {
  userLogout,
  isAuthenticated,
  authenticate,
  userProfile,
  userProfileUpdate,
  wishlist,
  orders,
  getAddress,
} from '../../auth/helper';
import { useGlobalContext } from '../../context/cart-context';

const Profile = (props) => {
  const { tabName } = useParams();
  const history = useHistory();
  const { addToCart } = useGlobalContext();
  const [cookies, setCookie] = useCookies(['Kloths']);
  const [wishlistData, setWishlistData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [addressData, setAddressData] = useState([]);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    error: '',
    loading: false,
    success: '',
  });

  useEffect(() => {
    //setLoading(true);
    async function getUserDetails() {
      const response = await userProfile();

      if (response) {
        if (response.status === 'success') {
          setValues({
            ...values,
            error: false,
            loading: false,
            firstName: response.items.firstName,
            lastName: response.items.lastName,
            email: response.items.email,
            mobile: response.items.mobile,
          });
        } else {
          setValues({ ...values, error: response.message, loading: false });
        }
      }
    }
    getUserDetails();

    async function getWishlist() {
      const response = await wishlist();

      if (response) {
        if (response.status === 'success') {
          setWishlistData(response.items);
        }
      }
    }
    getWishlist();

    async function getOrders() {
      const response = await orders();

      if (response) {
        if (response.status === 'success') {
          setOrderData(response.items);
        }
      }
    }
    getOrders();

    async function getAddressData() {
      const response = await getAddress();

      if (response) {
        if (response.status === 'success') {
          setAddressData(response.items);
        }
      }
    }
    getAddressData();
  }, []);

  console.log('orderData', orderData, addressData);

  const {
    firstName,
    lastName,
    email,
    mobile,
    error,
    success,
    loading,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const addAddress = () => {
    history.push('/profile/address');
  };

  const loadingMessage = () => {
    return (
      <div
        className='alert alert-info test-center'
        style={{ display: loading ? '' : 'none' }}
      >
        Loading...
        <br />
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className='alert alert-danger test-center'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
        <br />
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className='alert alert-success test-center'
        style={{ display: success ? '' : 'none' }}
      >
        Operation Successful
        <br />
      </div>
    );
  };

  const onProfileSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    userProfileUpdate({ firstName, lastName, email, mobile })
      .then((data) => {
        if (data.status === 'success') {
          authenticate(data, () => {
            setValues({
              ...values,
              success: true,
              loading: false,
            });
          });
          setTimeout(() => {
            setValues({
              ...values,
              success: false,
            });
          }, 5000);
        } else {
          setValues({ ...values, error: data.message, loading: false });
        }
      })
      .catch(console.log('error in profile update'));
  };

  // const handleLogout = () => {
  //   setCookie('username', '', { path: '/' });
  // };
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
                      <ul className='profile-menu'>
                        <li>
                          <Link to='/profile/profile'>
                            <PersonCircleOutline
                              color={'#fff'}
                              title={'Profile'}
                              height='32px'
                              width='32px'
                            />
                            <div>Profile</div>
                          </Link>
                        </li>
                        <li>
                          <Link to='/profile/address'>
                            <LocationOutline
                              color={'#fff'}
                              title={'Addressess'}
                              height='32px'
                              width='32px'
                            />
                            <div>Addresses</div>
                          </Link>
                        </li>
                        <li>
                          <Link to='/profile/orders'>
                            <CartOutline
                              color={'#fff'}
                              title={'Orders'}
                              height='32px'
                              width='32px'
                            />
                            <div>Orders</div>
                          </Link>
                        </li>
                        <li>
                          <Link to='/profile/wishlist'>
                            <HeartCircleOutline
                              color={'#fff'}
                              title={'Wishlist'}
                              height='32px'
                              width='32px'
                            />
                            <div>Wishlist</div>
                          </Link>
                        </li>
                        {isAuthenticated() && (
                          <li
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              userLogout(() => {
                                history.push('/');
                              });
                            }}
                          >
                            <LogOutOutline
                              color={'#fff'}
                              title={'Logout'}
                              height='32px'
                              width='32px'
                            />
                            <div>Logout</div>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col span-3-of-4'>
                  <div className='filter-bg section-right'>
                    <div className='row'>
                      {tabName === 'profile' ? (
                        <>
                          <h3>Edit Profile</h3>
                          <hr />
                          <br />

                          <form>
                            <div className='right-container'>
                              {loadingMessage()}
                              {errorMessage()}
                              {successMessage()}
                              <Input
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={handleChange('firstName')}
                                placeholder='First Name'
                              />
                              <Input
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={handleChange('lastName')}
                                placeholder='Last Name'
                              />
                              <Input
                                type='text'
                                name='email'
                                value={email}
                                onChange={handleChange('email')}
                                placeholder='Email'
                              />
                              <Input
                                type='text'
                                name='mobile'
                                value={mobile}
                                onChange={handleChange('mobile')}
                                placeholder='Mobile Number'
                              />
                              <br />
                              <button
                                type='submit'
                                onClick={onProfileSubmit}
                                className='button-red edit-btn'
                              >
                                EDIT
                              </button>
                            </div>
                          </form>
                        </>
                      ) : null}

                      {tabName === 'address' ? (
                        <>
                          <h3>Addresses</h3>
                          <hr />
                          <br />
                          <div className='right-container'>
                            <div className='row float-right'>
                              <Link to='/profile/add-address'>
                                <button className='button-red edit-btn'>
                                  Add New
                                </button>
                              </Link>
                            </div>
                            {addressData.map((address) => (
                              <div className='address-row'>
                                <h4>Home</h4>
                                <p>
                                  {address.address1}
                                  {address.address2 && `, ${address.address2}`}
                                </p>
                                <p>
                                  {address.city}, {address.state},{' '}
                                  {address.pincode}
                                </p>
                              </div>
                            ))}
                            {/* <div className='address-row'>
                              <h4>Office</h4>
                              <p>
                                1002, Earth arise, beside YMCA club, sg highway
                              </p>
                              <p>Ahmedabad, Gujarat, 380015</p>
                            </div> */}
                          </div>
                        </>
                      ) : null}

                      {tabName === 'add-address' ? (
                        <>
                          <h3>Add Address</h3>
                          <hr />
                          <br />
                          <div className='right-container'>
                            <Input type='text' placeholder='Address 1' />
                            <Input type='text' placeholder='Address 2' />
                            <Input type='text' placeholder='City' />
                            <Input type='text' placeholder='State' />
                            <Input type='text' placeholder='Pincode' />
                            <button
                              className='button-red edit-btn'
                              onClick={addAddress}
                            >
                              ADD
                            </button>
                          </div>
                        </>
                      ) : null}

                      {tabName === 'orders' ? (
                        <>
                          <h3>Orders</h3>
                          <hr />
                          <br />
                          <div className='right-container'>
                            {orderData.map((products) => (
                              <div className='address-row'>
                                <div className='col span-1-of-4'>
                                  <img
                                    src='https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg'
                                    style={{ height: '100%', width: '100%' }}
                                  />
                                </div>
                                <div className='col span-2-of-4'>
                                  <h3>{products.product.name}</h3>
                                  <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                                  <p>Ordered On: 20 Feb 2021</p>
                                  <p>Delivered On: 22 Feb 2021</p>
                                  <button className='button-red edit-btn margin-right-10px'>
                                    Buy It Again
                                  </button>
                                </div>
                                <div
                                  className='col span-1-of-4 float-right'
                                  style={{ padding: '0' }}
                                >
                                  <p>₹ {products.price}</p>
                                </div>
                              </div>
                            ))}

                            {/* <div className='address-row'>
                              <div className='col span-1-of-4'>
                                <img
                                  src='https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg'
                                  style={{ height: '100%', width: '100%' }}
                                />
                              </div>
                              <div className='col span-2-of-4'>
                                <h3>NIKE HOODIE</h3>
                                <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                                <p>Ordered On: 20 Feb 2021</p>
                                <p>Delivered On: 22 Feb 2021</p>
                                <button className='button-red edit-btn margin-right-10px'>
                                  Buy It Again
                                </button>
                              </div>
                              <div
                                className='col span-1-of-4 float-right'
                                style={{ padding: '0' }}
                              >
                                <p>₹999</p>
                              </div>
                            </div> */}
                          </div>
                        </>
                      ) : null}

                      {tabName === 'wishlist' ? (
                        <>
                          <h3>Wishlist</h3>
                          <hr />
                          <br />
                          <div className='right-container'>
                            {wishlistData.map((product) => (
                              <div key={product.id} className='address-row'>
                                <div className='col span-1-of-4'>
                                  <img
                                    src={product.images}
                                    style={{ height: '100%', width: '100%' }}
                                  />
                                </div>
                                <div className='col span-2-of-4'>
                                  <h3>{product.name}</h3>
                                  <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                                  <button
                                    className='button-red edit-btn margin-right-10px'
                                    onClick={() =>
                                      addToCart(
                                        product.id,
                                        product.name,
                                        product.price,
                                        product.name,
                                        product.images,
                                        1
                                      )
                                    }
                                  >
                                    Move to cart
                                  </button>
                                  <button className='button-red edit-btn'>
                                    Delete
                                  </button>
                                </div>
                                <div
                                  className='col span-1-of-4 float-right'
                                  style={{ padding: '0' }}
                                >
                                  <p>₹999</p>
                                </div>
                              </div>
                            ))}
                            {/* <div className='address-row'>
                              <div className='col span-1-of-4'>
                                <img
                                  src={hoodieimg}
                                  style={{ height: '100%', width: '100%' }}
                                />
                              </div>
                              <div className='col span-2-of-4'>
                                <h3>NIKE HOODIE</h3>
                                <p>Size: M &nbsp;&nbsp;&nbsp; Qty: 1</p>
                                <button className='button-red edit-btn margin-right-10px'>
                                  Move to cart
                                </button>
                                <button className='button-red edit-btn'>
                                  Delete
                                </button>
                              </div>
                              <div
                                className='col span-1-of-4 float-right'
                                style={{ padding: '0' }}
                              >
                                <p>₹999</p>
                              </div>
                            </div> */}
                          </div>
                        </>
                      ) : null}
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
