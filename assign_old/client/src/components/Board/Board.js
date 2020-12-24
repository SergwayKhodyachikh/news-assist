import React, { Fragment } from 'react';
import { FiLayers, FiHome, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineFolder,
  AiOutlineLogout,
  AiOutlineFolderOpen
} from 'react-icons/ai';
import { GoHome } from 'react-icons/go';

import _ from 'lodash';

import {
  GoKebabVertical,
  GoFileSubmodule,
  GoKebabHorizontal,
  GoProject
} from 'react-icons/go';
import { TiThMenu, TiPlus } from 'react-icons/ti';
import { MdKeyboardArrowDown, MdModeEdit } from 'react-icons/md';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import BoardBackground from './BoardBackground';

const Board = () => {
  return (
    <Fragment>
      <BoardBackground />
      <div className="flex flex-col h-screen">
        <header
          className=" px-3 py-3"
          style={{ zIndex: '1', backgroundColor: 'hsla(0,0%,100%,.24)' }}
        >
          <div className="flex justify-between">
            <a
              href="/"
              className="text-4xl text-white flex items-center justify-center"
            >
              <GoProject className="pr-1" />
              <h1
                style={{ fontFamily: 'Permanent Marker, cursive' }}
              >
                Assign
              </h1>
            </a>
            <button
              className="rounded-full border p-3 text-2xl text-white m-1"
              style={{ backgroundColor: 'rgba(0%,0%,50%,.2)' }}
            >
              <TiThMenu className="" />
            </button>
          </div>
          <div className="flex justify-between">
            <nav className="flex justify-start items-center ">
              <Link
                to="/dashboard"
                className="flex items-center rounded py-1 px-2 text-white"
                style={{ backgroundColor: 'rgba(0%,0%,50%,.2)' }}
              >
                <GoHome className="inline-block mr-1" />
                Dashboard
              </Link>
              <p className="mx-2 text-3xl text-white">/</p>
              <Link
                to="/dashboard/projects"
                className="flex items-center rounded py-1 px-2 text-white"
                style={{ backgroundColor: 'rgba(0%,0%,50%,.2)' }}
              >
                <AiOutlineFolder className="inline-block mr-1" />
                Projects dropdown
              </Link>
              <p className="mx-2 text-3xl text-white">/</p>
              <button
                className="flex items-center rounded py-1 px-2 text-white"
                style={{ backgroundColor: 'rgba(0%,0%,50%,.2)' }}
              >
                {' '}
                <AiOutlineFolderOpen className="inline-block mr-1" />
                project_name
              </button>

              <button
                className="flex items-center rounded py-2 px-1 text-white ml-1 text-lg"
                style={{ backgroundColor: 'rgba(0%,0%,50%,.2)' }}
              >
                <GoKebabVertical className="inline-block mr-1" />
              </button>
            </nav>



            <button>| Members of the project</button>
            <button>
              Visibility public <FaEye className="inline-block" /> /
              <FaEyeSlash className="inline-block" /> private
            </button>
          </div>
        </header>
        <main className="relative mx-3 mt-5 mb-6 overflow-x-auto overflow-y-hidden flex-1 flex justify-start items-start">
          {_.times(50, num => (
            <div
              key={num}
              style={{ minWidth: '16rem', maxHeight: '97%' }}
              className="p-2 flex-1 rounded bg-gray-200 shadow-lg mr-3 overflow-y-auto scroll-color"
            >
              <div className=" mb-1 pl-1 flex justify-between font-bold">
                <h1>List 1 </h1>
                <button className="rounded p-2 hover:bg-gray-400">
                  <GoKebabHorizontal />
                </button>
              </div>
              {_.times(50, num => (
                <div
                  key={num}
                  className="overflow-y-auto bg-white shadow-lg mb-5 rounded pl-4 pr-1 flex justify-between text-lg"
                >
                  <div>
                    <span className="whitespace-no-wrap">random task </span>
                    <FaEye className="inline-block text-base mx-2 text-gray-500" />
                  </div>
                  <button className="rounded p-2 hover:bg-gray-400">
                    <MdModeEdit />
                  </button>
                </div>
              ))}

              <button
                to="/dashboard"
                className="flex items-center text-gray-600 rounded py-1 pl-1 w-full text-left font-bold hover:bg-gray-300 hover:text-black"
              >
                <TiPlus className="mr-1" />
                Create New Task
              </button>
            </div>
          ))}

          <div className="max-w-xs w-full">
            <div className="">
              <div className="font-bold text-xl mb-2">
                <button
                  to="/dashboard"
                  className="rounded py-1 pl-4 text-white w-full shadow text-left font-bold"
                  style={{ backgroundColor: 'hsla(0,0%,100%,.24)' }}
                >
                  <TiPlus className="inline-block mr-1" />
                  Create New List
                </button>
                <Form
                  validate={values => {
                    const errors = {};
                    if (!values.title)
                      errors.title = `Please enter The project title`;
                    if (values.title && values.title.length < 1)
                      errors.title = `The project title required to
                   be at lest 1 characters long.`;
                    if (values.title && values.title.length > 255)
                      errors.title = 'The project title too long.';
                    return errors;
                  }}
                  onSubmit={console.log}
                  render={({ handleSubmit, pristine, invalid, submitting }) => (
                    <form
                      className="pt-4 pb-2 px-2 bg-white my-3"
                      onSubmit={handleSubmit}
                      autoComplete="off"
                      noValidate
                    >
                      <Field
                        name="title"
                        component={({ input, meta: { error, touched } }) => (
                          <div className="text-gray-700 mb-4">
                            <label
                              className="flex items-center capitalize tracking-wide text-lg font-normal mb-1 pl-2 "
                              htmlFor={input.name}
                            >
                              <GoFileSubmodule className="mr-1 text-xl" />
                              {input.name}
                            </label>
                            <input
                              {...input}
                              className={`appearance-none block w-full rounded py-3 px-4 leading-tight border bg-gray-200 focus:outline-none focus:bg-white focus:shadow
      ${
        // when the input invalid change border color from grey to red
        error && touched
          ? 'border-red-600 text-red-700 focus:border-red-500'
          : 'border-gray-200   focus:border-gray-500'
      } 
         `}
                              placeholder="i.e. The Shopping list"
                            />
                            {/* Validation message if exist */}
                            {error && touched && (
                              <p className="text-red-500 font-bold text-sm">
                                {error}
                              </p>
                            )}
                          </div>
                        )}
                      />

                      <button
                        type="Create"
                        disabled={submitting || pristine || invalid}
                        className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3
                ${(submitting || pristine || invalid) && 'cursor-not-allowed'}`}
                      >
                        Create
                      </button>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          #photography
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          #travel
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                          #winter
                        </span>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Board;
