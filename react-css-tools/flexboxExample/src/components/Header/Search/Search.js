import React from "react";
import sprite from "../../../img/sprite.svg";
import "./Search.scss";

const Search = () => (
  <form action="#" className="search">
    <input type="text" className="search__input" placeholder="Search hotels" />
    <button className="search__button">
      <svg className="search__icon">
        <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
      </svg>
    </button>
  </form>
);

export default Search;
