import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './routes';

const Root = () => (
 <BrowserRouter>
  <App />
 </BrowserRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
