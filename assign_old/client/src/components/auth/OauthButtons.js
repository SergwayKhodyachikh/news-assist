import React, { Fragment } from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
const OauthButtons = () => {
  return (
    <Fragment>
      <a
        href="/api/auth/google"
        className="flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-5"
      >
        <IoLogoGoogle className="mr-3 text-xl" />
        Continue with Google
      </a>
      <a
        href="api/auth/facebook/"
        className="flex items-center bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mb-5"
      >
        <FaFacebookF className="mr-3 text-xl" />
        Continue with facebook
      </a>
    </Fragment>
  );
};

export default OauthButtons;
