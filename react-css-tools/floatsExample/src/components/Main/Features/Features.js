import React from "react";
import { IoIosHeartEmpty, IoIosGlobe } from "react-icons/io";
import { GiCompass } from "react-icons/gi";
import { FiMap } from "react-icons/fi";
import "./Features.scss";

const Features = () => (
  <section className="section-features">
    <div className="row">
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-world">
            <IoIosGlobe color="#55c57a" />
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Explore the world
          </h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-compass">
            <GiCompass color="#55c57a" />
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Meet nature
          </h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-map">
            <FiMap color="#55c57a" />
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Find your way
          </h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-heart">
            <IoIosHeartEmpty color="#55c57a" />
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live a healthier life
          </h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
