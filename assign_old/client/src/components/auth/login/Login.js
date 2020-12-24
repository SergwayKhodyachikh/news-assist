import React from 'react';
import { Link } from 'react-router-dom';
import { GoProject } from 'react-icons/go';
import OauthButtons from '../OauthButtons';
import UserForm from '../UserForm';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { connect } from 'react-redux';
import { login } from '../../../actions';

const formFields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'i.e. example@example.com',
    icon: MdMailOutline
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'i.e. max@!%$5475347',
    icon: MdLockOutline,
    minLength: 6,
    maxLength: 50
  }
];

const Login = ({login}) => {
  return (
    <div className="pt-20 bg-cover min-h-screen">
      <a href="/" className="text-6xl flex items-center justify-center">
        <GoProject className="text-blue-500" />
        <h1
          style={{ fontFamily: 'Permanent Marker, cursive' }}
          className="text-blue-500 pl-1"
        >
          Assign
        </h1>
      </a>
      <div className="text-center my-4">
        <h2 className="capitalize font-extrabold tracking-wide text-2xl">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-lg">
          Ready to get your team on track? <br />
          then don't delay organize and prioritize your projects <br />
          with Assign!
        </p>
      </div>
      <div className="my-8  flex flex-col max-w-md mx-auto">
        <OauthButtons />

        <UserForm
          onSubmit={values => login(values)}
          ButtonMessage="Agree & Join"
          formFields={formFields}
        />

        <div className="mt-6 text-center">
          <a className="font-semibold text-blue-700" href="/#">
            Forgot Password?
          </a>
        </div>
        <p className="text-center mt-3">
          New to Assign?
          <Link className="ml-2 font-semibold text-blue-700" to="/register">
            Join Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default connect(null, {login})(Login);
