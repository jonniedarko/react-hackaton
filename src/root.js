import React, { Component } from 'react';
import BaseComponent from 'BaseComponent';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import middleware from './middleware';

let store = createStore(
    rootReducer,
    middleware
  );

export default class Root extends BaseComponent {
  render() {
    return (
      <div>
       <Provider store={ store }>
        <Routes />
        </Provider>
      </div>

    )
  }
}
