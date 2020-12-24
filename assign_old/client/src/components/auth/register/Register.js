import React from 'react';
import { Link } from 'react-router-dom';
import { GoProject } from 'react-icons/go';
import OauthButtons from '../OauthButtons';
import UserForm from '../UserForm';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';

const formFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'i.e. Steve Rozmarin',
    icon: IoMdPerson,
    minLength: 2,
    maxLength: 255
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'i.e. example@example.com',
    icon: MdMailOutline,
    minLength: 5,
    maxLength: 255
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'i.e. max@!%$5475347',
    icon: MdLockOutline,
    minLength: 6,
    maxLength: 255
  }
];

const Register = ({ registerUser }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(-225deg, #473B7B 0%, #3584A7 70%, #30D2BE 100%)'
      }}
      className=" pt-20 bg-cover min-h-screen"
    >
      <a href="/" className=" text-5xl block mx-auto w-56">
        <GoProject className="text-white inline-block" />
        <h1
          style={{ fontFamily: 'Permanent Marker, cursive' }}
          className="text-white pl-1 inline-block"
        >
          Assign
        </h1>
      </a>
      <p className="text-white mb-12 text-center">
        Make most of your teamwork!
      </p>

      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
        <OauthButtons />
        <UserForm
          onSubmit={registerUser}
          ButtonMessage="Agree & Join"
          formFields={formFields}
        />
        <p className="text-xs px-4 pt-1">
          You agree to the{' '}
          <a className="text-blue-700" href="/register/#">
            User Agreement
          </a>
          ,{' '}
          <a className="text-blue-700" href="/register/#">
            Privacy Policy
          </a>
          ,<br /> and{' '}
          <a className="text-blue-700" href="/register/#">
            Terms of Use
          </a>
          .
        </p>
        <p className="text-center mt-3">
          Already on Assign?
          <Link className="ml-2 font-semibold text-blue-700" to="/login">
            Sign in
          </Link>
        </p>
      </div>
      <footer className="text-white text-xs text-center">
        ©2019 Sergway Khodyachikh. All rights reserved.
      </footer>
    </div>
  );
};

export default connect(
  null,
  { registerUser }
)(Register);
