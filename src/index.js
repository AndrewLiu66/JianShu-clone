import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js'
import { GlobalIconfont } from './static/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalIconfont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

