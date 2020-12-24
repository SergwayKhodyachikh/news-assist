import React, { Fragment, useState } from 'react';
import Modal from '../../Modal';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { Form, Field } from 'react-final-form';
import { GoFileSubmodule } from 'react-icons/go';
import { connect } from 'react-redux';
import { createProject } from '../../../actions';

const renderField = ({ input, meta: { error, touched } }) => (
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
      placeholder="i.e. skynet project"
    />
    {/* Validation message if exist */}
    {error && touched && (
      <p className="text-red-500 font-bold text-sm">{error}</p>
    )}
  </div>
);

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = `Please enter The project title`;
  if (values.title && values.title.length < 1)
    errors.title = `The project title required to
       be at lest 1 characters long.`;
  if (values.title && values.title.length > 255)
    errors.title = 'The project title too long.';
  return errors;
};

const ProjectCreate = ({ createProject }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setShowModal(true)}
        className="rounded-full text-4xl text-blue-500 p-2 hover:bg-blue-100 focus:outline-none focus:shadow-outline"
        title="Create New Project"
      >
        <AiOutlineFolderAdd />
      </button>

      {showModal && (
        <Modal
          className="bg-white mt-40 rounded"
          onDismiss={() => setShowModal(false)}
        >
          <Form
            validate={validate}
            onSubmit={(fromValues) => {
              setShowModal(false);
              createProject(fromValues);
            }}
            render={({ handleSubmit, pristine, invalid, submitting }) => (
              <form
                className="pt-4 pb-2 px-2"
                onSubmit={handleSubmit}
                autoComplete="off"
                noValidate
              >
                <Field name="title" component={renderField} />

                <button
                  type="Create"
                  disabled={submitting || pristine || invalid}
                  className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3
                ${(submitting || pristine || invalid) && 'cursor-not-allowed'}`}
                >
                  Create
                </button>
              </form>
            )}
          />
        </Modal>
      )}
    </Fragment>
  );
};

export default connect(null, { createProject })(ProjectCreate);
