import React from 'react';
import axios from 'axios';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.BASE_URL;
  return <Component {...pageProps} />;
}

export default MyApp;
