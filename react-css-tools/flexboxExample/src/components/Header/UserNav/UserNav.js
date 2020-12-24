import React from "react";
import user from "../../../img/user.jpg";
import sprite from "../../../img/sprite.svg";
import "./UserNav.scss";

const UserNav = () => (
  <nav className="user-nav">
    <div className="user-nav__icon-box">
      <svg className="user-nav__icon">
        <use xlinkHref={`${sprite}#icon-bookmark`} />
      </svg>
      <span className="user-nav__notification">7</span>
    </div>
    <div className="user-nav__icon-box">
      <svg className="user-nav__icon">
        <use xlinkHref={`${sprite}#icon-chat`} />
      </svg>
      <span className="user-nav__notification">13</span>
    </div>
    <div className="user-nav__user">
      <img src={user} alt="User" className="user-nav__user-photo" />
      <span className="user-nav__user-name">Jonas</span>
    </div>
  </nav>
);

export default UserNav;
