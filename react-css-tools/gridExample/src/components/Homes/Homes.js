import React from "react";
import house1 from "../../img/house-1.jpeg";
import house2 from "../../img/house-2.jpeg";
import house3 from "../../img/house-3.jpeg";
import house4 from "../../img/house-4.jpeg";
import house5 from "../../img/house-5.jpeg";
import house6 from "../../img/house-6.jpeg";
import sprite from "../../img/sprite.svg";

import "./Homes.scss";

const Homes = () => {
  return (
    <section className="homes">
      <div className="home">
        <img src={house1} alt="House 1" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Beautiful Familiy House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
      <div className="home">
        <img src={house2} alt="House 2" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$2,750,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
      <div className="home">
        <img src={house3} alt="House 3" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$850,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
      <div className="home">
        <img src={house4} alt="House 4" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$1,950,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
      <div className="home">
        <img src={house5} alt="House 5" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$9,500,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
      <div className="home">
        <img src={house6} alt="House 6" className="home__img" />
        <svg className="home__like">
          <use xlinkHref={`${sprite}#icon-heart-full`} />
        </svg>
        <h5 className="home__name">Modern Familiy Apartment</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref={`${sprite}#icon-profile-male`} />
          </svg>
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref={`${sprite}#icon-expand`} />
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref={`${sprite}#icon-key`} />
          </svg>
          <p>$600,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;
