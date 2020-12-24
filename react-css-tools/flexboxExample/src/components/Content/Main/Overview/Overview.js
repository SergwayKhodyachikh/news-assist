import React from 'react';
import sprite from "../../../../img/sprite.svg";

import './Overview.scss';

const Overview = () => (
  <div className="overview">
  <h1 className="overview__heading">Hotel Las Palmas</h1>
  <div className="overview__stars">
    <svg className="overview__icon-star">
      <use xlinkHref={`${sprite}#icon-star`} />
    </svg>
    <svg className="overview__icon-star">
      <use xlinkHref={`${sprite}#icon-star`} />
    </svg>
    <svg className="overview__icon-star">
      <use xlinkHref={`${sprite}#icon-star`} />
    </svg>
    <svg className="overview__icon-star">
      <use xlinkHref={`${sprite}#icon-star`} />
    </svg>
    <svg className="overview__icon-star">
      <use xlinkHref={`${sprite}#icon-star`} />
    </svg>
  </div>
  <div className="overview__location">
    <svg className="overview__icon-location">
      <use xlinkHref={`${sprite}#icon-location-pin`} />
    </svg>
    <button className="btn-inline">Albufeira, Portugal</button>
  </div>
  <div className="overview__rating">
    <div className="overview__rating-average">8.6</div>
    <div className="overview__rating-count">429 votes</div>
  </div>
</div>

);

export default Overview;