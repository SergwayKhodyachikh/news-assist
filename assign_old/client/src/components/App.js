import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import './App.scss';
import Landing from './Landing/Landing';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './Dashboard/Dashboard';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Spinner from './Loading/Spinner';
import ProjectPage from './Board/Board';
import PropTypes from 'prop-types';
import ErrorPage from './Error/ErrorPage';

function App({ fetchUser, auth }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (auth === null) return <Spinner />;
  return (
    <Router history={history}>
        <Switch>
          <PublicRoute component={Landing} exact path={['/', '/_=_']} />
          <PublicRoute component={Login} exact path="/login" />
          <PublicRoute component={Register} exact path="/register" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
          <PrivateRoute component={ProjectPage} path="/board/:id" />
          <Route to="/" component={ErrorPage} />
        </Switch>
    </Router>
  );
}

App.prototype = {
  auth: PropTypes.any.isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
