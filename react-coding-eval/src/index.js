import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
import { store } from './Redux/store';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <AuthContextProvider>
      <Provider store = {store} >
          <App />
      </Provider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
