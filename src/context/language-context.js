import React from 'react';

export const languageObj = {
  en: {
    footer: {
      legal: '© 2021, KLOTHS PVT LTD. ALL RIGHTS RESERVED.',
      links1: {
        title: 'INFORMATION',
        link1: 'Who We Are',
        link2: 'Terms & Conditions',
        link3: 'Privacy Policy',
      },
      links2: {
        title: 'QUICK LINKS',
        link1: 'Contact Us',
        link2: 'Shipping & Delivery'
      },
      links3: {
        title: 'PAYMENT MODE ACCEPTED',
      }
    },
    home: {
      bannerText: 'New Arrival <br/>T-Shirt Collections',
      bannerButton: "SHOP NOW",
      mens: 'MEN',
      women: 'WOMEN',
      kids: 'KIDS'
    },
    login: {
      title: 'LOGIN',
      or: 'OR',
      placeholder: {
        mobile: 'Mobile Number',
        sendOTP: 'Send OTP',
        OTP: 'OTP'
      },
      signupLink: 'New User? Signup Here',
      socialButtons: {
        google: 'Login With Google',
        facebook: 'Login With Facebook'
      }
    },
    signup: {
      title: 'SIGNUP',
      or: 'OR',
      placeholder: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        mobile: 'Mobile Number',
        sendOTP: 'Send OTP',
        OTP: 'OTP'
      },
      loginLink: 'Already User? Login Here',
      socialButtons: {
        google: 'Signup With Google',
        facebook: 'Signup With Facebook'
      }
    },
    category: {
      filters: "Filters",
      allFilters: {
        brand: "Brand",
        price: "Price",
        size: "Size",
        color: "Color"
      },
      result: "Results for `{name}`",
      addtocart: "Add to cart"
    }
  },
  es: {
    footer: {
      legal: '© 2021, KLOTHS PVT LTD. RESERVADOS TODOS LOS DERECHOS.',
      links1: {
        title: 'INFORMACIÓN',
        link1: 'Quienes somos',
        link2: 'Términos y condiciones',
        link3: 'Política de privacidad',
      },
      links2: {
        title: 'ENLACES RÁPIDOS',
        link1: 'Contacta con nosotros',
        link2: 'Envío y Entrega'
      },
      links3: {
        title: 'MODO DE PAGO ACEPTADO',
      }
    },
    home: {
      bannerText: 'Nueva llegada <br/>Colecciones de camisetas',
      bannerButton: "COMPRA AHORA",
      mens: 'HOMBRES',
      women: 'MUJERES',
      kids: 'NIÑAS / NIÑOS'
    },
    login: {
      title: 'ACCESO',
      or: 'O',
      placeholder: {
        mobile: 'Número de teléfono móvil',
        sendOTP: 'Enviar OTP',
        OTP: 'OTP'
      },
      signupLink: '¿Nuevo Usuario? Registrate aquí',
      socialButtons: {
        google: 'Iniciar sesión con Google',
        facebook: 'Iniciar sesión con Facebook'
      }
    },
    signup: {
      title: 'INSCRIBIRSE',
      or: 'O',
      placeholder: {
        firstName: 'Nombre de pila',
        lastName: 'Apellido',
        email: 'Correo electrónico',
        mobile: 'Número de teléfono móvil',
        sendOTP: 'Enviar OTP',
        OTP: 'OTP'
      },
      loginLink: '¿Ya eres usuario? Entre aquí',
      socialButtons: {
        google: 'Registrarse con Google',
        facebook: 'Registrarse con Facebook'
      }
    },
    category: {
      filters: "Filtros",
      allFilters: {
        brand: "Marca",
        price: "Precio",
        size: "Tamaño",
        color: "Color"
      },
      result: "resultados para `{name}`",
      addtocart: "Añadir a la cesta"
    }
  },
};

export const LanguageContext = React.createContext();