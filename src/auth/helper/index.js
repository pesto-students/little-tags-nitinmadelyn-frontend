import config from '../../config/config';

export const userSignup = (user) => {
  return fetch(`${config.apiEndPoint}/user/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const userLogin = (user) => {
  return fetch(`${config.apiEndPoint}/user/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const userLogout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();

    return fetch(`${config.apiEndPoint}/user/logout`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const addToWishlist = (productId) => {
  return fetch(`${config.apiEndPoint}/wishlist`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
    body: JSON.stringify(productId),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const wishlist = () => {
  return fetch(`${config.apiEndPoint}/wishlist`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const userProfile = () => {
  return fetch(`${config.apiEndPoint}/user/profile`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const userProfileUpdate = (user) => {
  return fetch(`${config.apiEndPoint}/user/profile`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const storeShipping = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('shipping', JSON.stringify(data));
    next();
  }
};

export const getShipping = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('shipping')) {
    return JSON.parse(localStorage.getItem('shipping'));
  } else {
    return false;
  }
};

export const storeCart = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(data));
  }
};

export const getCart = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return false;
  }
};

export const makeOrder = (data) => {
  return fetch(`${config.apiEndPoint}/order`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const orders = () => {
  return fetch(`${config.apiEndPoint}/order/list`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateOrder = (data, orderId) => {
  return fetch(`${config.apiEndPoint}/order/${orderId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addAddress = (data) => {
  return fetch(`${config.apiEndPoint}/user/address`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAddress = () => {
  return fetch(`${config.apiEndPoint}/user/address`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
