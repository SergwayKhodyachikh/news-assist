import React from 'react';
import './Spinner.scss';
import { GoProject } from 'react-icons/go';

const Spinner = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(-225deg, #473B7B 0%, #3584A7 70%, #30D2BE 100%)'
      }}
      className="bg-cover h-screen p-0 flex justify-center items-center"
    >
      <div className="spin rounded-full"></div>
      <a href="/" className=" text-5xl block">
        <GoProject className="text-white inline-block" />
        <h1
          style={{ fontFamily: 'Permanent Marker, cursive' }}
          className="text-white pl-1 inline-block"
        >
          Assign
        </h1>
      </a>
    </div>
  );
};

export default Spinner;
