import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import history from './history';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
      </App>
    </Router>
  </Provider>,

  document.querySelector('#root')
);
