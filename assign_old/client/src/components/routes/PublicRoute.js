import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ component: Component, auth, ...rest }) =>
  auth !== null && (
    <Route
      {...rest}
      render={routeProps =>
        !auth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(PublicRoute);
