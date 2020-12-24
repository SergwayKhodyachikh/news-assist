import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  const ifs = (((9)));

  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>

            <li className="nav-item mr-4">
              <NavLink className="nav-link" activeClassName="active" to="/namecheck">Name Recognition</NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" activeClassName="active" to="/nameregistration">Name Registration</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//   <li className="nav-item">
//     <NavLink className="nav-link" to="/" >Home</NavLink>
//   </li>
//   <li className="nav-item">
//     <NavLink className="nav-link" to="/GenderList" >GenderList</NavLink>
//   </li>

//   <li className="nav-item">
//     <NavLink className="nav-link" to="nameregistration" >Name Registration</NavLink>
//   </li>
// </ul>
// </nav>