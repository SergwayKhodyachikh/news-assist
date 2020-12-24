import React from "react";
import PropTypes from "prop-types";
import sprite from "../../../../../img/sprite.svg";
import "./SideNavItem.scss";

const SideNavItem = ({ text, icon }) => (
  <li
    className={`side-nav__item side-nav__item${
      text === "Hotel" ? "--active" : null
    }`}
  >
    <a href="#!" className="side-nav__link">
      <svg className="side-nav__icon">
        <use xlinkHref={`${sprite}#${icon}`} />
      </svg>
      <span>{text}</span>
    </a>
  </li>
);

SideNavItem.prototype = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default SideNavItem;
