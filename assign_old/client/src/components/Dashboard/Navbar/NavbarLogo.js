import React from 'react'
import { GoProject } from 'react-icons/go';

const NavbarLogo = () => {
  return (
    <a href="/" className="ml-auto mr-10 px-2 mt-3 focus:outline-none focus:shadow-outline">
      <h1
        style={{ fontFamily: 'Permanent Marker, cursive' }}
        className="text-5xl text-blue-500 inline-block truncate"
      >
        <GoProject className="inline" />
        <span className="inline-block pl-1">Assign</span>
      </h1>
    </a>
  );
}

export default NavbarLogo
