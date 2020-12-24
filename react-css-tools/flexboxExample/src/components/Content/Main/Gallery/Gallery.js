import React from "react";
import hotel1 from "../../../../img/hotel-1.jpg";
import hotel2 from "../../../../img/hotel-2.jpg";
import hotel3 from "../../../../img/hotel-3.jpg";
import "./Gallery.scss";

const Gallery = () => (
  <div className="gallery">
    <figure className="gallery__item">
      <img src={hotel1} alt="hotel example" className="gallery__photo" />
    </figure>
    <figure className="gallery__item">
      <img src={hotel2} alt="hotel example" className="gallery__photo" />
    </figure>
    <figure className="gallery__item">
      <img src={hotel3} alt="hotel example" className="gallery__photo" />
    </figure>
  </div>
);

export default Gallery;
