import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

const renderLinks = authenticated =>
  authenticated ? (
    <div>
      <Link to="/signout">Sign Out</Link>
      <Link to="/feature">Feature</Link>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );

const Header = ({ authenticated }) => {
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks(authenticated)}
    </div>
  );
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
