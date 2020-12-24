import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GoKebabVertical,
  GoX,
  GoArchive,
  GoStar,
  GoTag,
  GoPencil
} from 'react-icons/go';
import { Link } from 'react-router-dom';

const ProjectMenu = ({ project }) => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setMenuState(false);
      document.removeEventListener('click', closeMenu);
    };
    if (menuState) document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuState]);


  const showMenu = async () => {
    setMenuState(!menuState);
  };

  return (
    <div className="flex items-center justify-center relative">
      <button
        className={`rounded-lg text-3xl ${menuState &&
          'text-blue-500'} p-2 hover:text-blue-400 `}
        onClick={showMenu}
      >
        <GoKebabVertical />
      </button>
      {menuState && (
        <div style={{top:'5.5rem'}} className="right-0 absolute whitespace-no-wrap flex flex-col bg-white text-lg font-bold py-4 shadow z-10">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-4 pr-6 rounded  text-left">
            <GoPencil className="inline-block mr-3" /> Edit{' '}
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-4 pr-6 rounded  text-left">
            <GoTag className="inline-block mr-3" /> Add To Collection{' '}
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-4 pr-6 rounded  text-left">
            <GoStar className="inline-block mr-3" /> Add to favorites{' '}
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-4 pr-6 rounded  text-left">
            <GoArchive className="inline-block mr-3" /> Drop to the archive{' '}
          </button>
          <Link
            to={`/dashboard/projects/delete/${project._id}`}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-4 pr-6 rounded  text-left"
          >
            <GoX className="inline-block mr-3" /> Delete{' '}
          </Link>
        </div>
      )}
    </div>
  );
};
ProjectMenu.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectMenu;
