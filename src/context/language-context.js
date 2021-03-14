import React from "react";

export const languageObj = {
  en: {
    footer: {
      legal: "© 2021, KLOTHS PVT LTD. ALL RIGHTS RESERVED.",
      credits:
        "Made with love by <a href='https://github.com/nitinmadelyn' target='_blank'>@nitin</a> & <a href='https://github.com/shubhadeep29' target='_blank'>@shubhdeep</a>",
      links1: {
        title: "INFORMATION",
        link1: "Who We Are",
        link2: "Terms & Conditions",
        link3: "Privacy Policy",
      },
      links2: {
        title: "QUICK LINKS",
        link1: "Contact Us",
        link2: "Shipping & Delivery",
      },
      links3: {
        title: "PAYMENT MODE ACCEPTED",
      },
    },
    home: {
      bannerText: "New Arrival <br/>T-Shirt Collections",
      bannerButton: "SHOP NOW",
      mens: "MEN",
      women: "WOMEN",
      kids: "KIDS",
    },
    login: {
      title: "LOGIN",
      or: "OR",
      placeholder: {
        mobile: "Mobile Number",
        sendOTP: "Send OTP",
        OTP: "OTP",
      },
      signupLink: "New User? Signup Here",
      socialButtons: {
        google: "Login With Google",
        facebook: "Login With Facebook",
      },
    },
    signup: {
      title: "SIGNUP",
      or: "OR",
      placeholder: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        mobile: "Mobile Number",
        sendOTP: "Send OTP",
        OTP: "OTP",
      },
      loginLink: "Already User? Login Here",
      socialButtons: {
        google: "Signup With Google",
        facebook: "Signup With Facebook",
      },
    },
    category: {
      filters: "Filters",
      allFilters: {
        brand: "Brand",
        price: "Price",
        size: "Size",
        color: "Color",
      },
      result: "Results for `{name}`",
      addtocart: "Add to cart",
    },
    productDetails: {
      addToCart: "Add to cart",
      addToWishList: "Add to wishlist",
      quantity: "Quantity",
    },
    cart: {
      bagEmpty: "Your bag is empty",
      backHome: "Back to home",
      shoppingCart: "Shopping Cart",
      image: "Image",
      product: "Product",
      price: "Price",
      remove: "Remove",
      quantity: "Quantity",
      subTotal: "Subtotal",
      tax: "Tax",
      shipping: "Shipping",
      grandTotal: "Grand Total",
      checkout: "Checkout",
      clearCart: "Clear cart",
      continueShopping: "Continue shopping",
    },
  },
  es: {
    footer: {
      legal: "© 2021, KLOTHS PVT LTD. RESERVADOS TODOS LOS DERECHOS.",
      credits:
        "Made with love by <a href='https://github.com/nitinmadelyn' target='_blank'>@nitin</a> & <a href='https://github.com/shubhadeep29' target='_blank'>@shubhdeep</a>",
      links1: {
        title: "INFORMACIÓN",
        link1: "Quienes somos",
        link2: "Términos y condiciones",
        link3: "Política de privacidad",
      },
      links2: {
        title: "ENLACES RÁPIDOS",
        link1: "Contacta con nosotros",
        link2: "Envío y Entrega",
      },
      links3: {
        title: "MODO DE PAGO ACEPTADO",
      },
    },
    home: {
      bannerText: "Nueva llegada <br/>Colecciones de camisetas",
      bannerButton: "COMPRA AHORA",
      mens: "HOMBRES",
      women: "MUJERES",
      kids: "NIÑOS",
    },
    login: {
      title: "ACCESO",
      or: "O",
      placeholder: {
        mobile: "Número de teléfono móvil",
        sendOTP: "Enviar OTP",
        OTP: "OTP",
      },
      signupLink: "¿Nuevo Usuario? Registrate aquí",
      socialButtons: {
        google: "Iniciar sesión con Google",
        facebook: "Iniciar sesión con Facebook",
      },
    },
    signup: {
      title: "INSCRIBIRSE",
      or: "O",
      placeholder: {
        firstName: "Nombre de pila",
        lastName: "Apellido",
        email: "Correo electrónico",
        mobile: "Número de teléfono móvil",
        sendOTP: "Enviar OTP",
        OTP: "OTP",
      },
      loginLink: "¿Ya eres usuario? Entre aquí",
      socialButtons: {
        google: "Registrarse con Google",
        facebook: "Registrarse con Facebook",
      },
    },
    category: {
      filters: "Filtros",
      allFilters: {
        brand: "Marca",
        price: "Precio",
        size: "Tamaño",
        color: "Color",
      },
      result: "resultados para `{name}`",
      addtocart: "Añadir a la cesta",
    },
    productDetails: {
      addToCart: "Añadir a la cesta",
      addToWishList: "Añadir a la lista de deseos",
      quantity: "Cantidad",
    },
    cart: {
      bagEmpty: "Tu bolsa esta vacia",
      backHome: "De vuelta a casa",
      shoppingCart: "Carrito de compras",
      image: "Imagen",
      product: "Producto",
      price: "Precio",
      remove: "Eliminar",
      quantity: "Cantidad",
      subTotal: "Total parcial",
      tax: "Impuesto",
      shipping: "Transporte",
      grandTotal: "Gran total",
      checkout: "Revisa",
      clearCart: "Vaciar carrito",
      continueShopping: "Seguir comprando",
    },
  },
};

export const LanguageContext = React.createContext();
