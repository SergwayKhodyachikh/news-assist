import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  return (
    auth !== null && (
      <Route
        {...rest}
        render={routeProps =>
          auth ? (
            <Component {...routeProps} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location }
              }}
            />
          )
        }
      />
    )
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(PrivateRoute);
