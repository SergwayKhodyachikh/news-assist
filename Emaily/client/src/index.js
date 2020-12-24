import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import axios from 'axios';

window.axios = axios;

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
