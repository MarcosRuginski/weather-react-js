/* eslint-disable */
import React from 'react';
import axios from 'axios';

import '../styles/globals.css';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';

function MyApp({ Component, pageProps }) {
  /* axios.defaults.baseURL = process.env.BASE_URL; */
  return <Component {...pageProps} />;
}

export default MyApp;
