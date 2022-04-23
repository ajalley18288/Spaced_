import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers';
import thunk from 'redux-thunk'

const store = createStore(allReducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
