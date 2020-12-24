import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const NavItem = ({ name, link, Icon, lineStyle, linkStyle }) => {
  return (
    <li className={lineStyle}>
      <NavLink
        activeClassName="text-blue-500"
        exact
        to={link}
        className={linkStyle}
      >
        <Icon className="mr-4 text-2xl" />
        <span> {name}</span>
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  lineStyle: PropTypes.string.isRequired,
  linkStyle: PropTypes.string.isRequired
};

export default NavItem;
