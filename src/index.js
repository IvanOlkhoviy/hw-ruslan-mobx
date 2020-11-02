import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Store from './Store/Store'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...{ Store }}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);