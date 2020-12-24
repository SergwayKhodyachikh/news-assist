import React, { useState } from 'react';
import history from '../../../history';
import Modal from '../../Modal';
import { GoAlert } from 'react-icons/go';
import { connect } from 'react-redux';
import { createProject } from '../../../actions';
import _ from 'lodash';

const ProjectDelete = ({ createProject }) => {
  const [value, setValue] = useState('');
  const checkValue = _.toLower(value) === _.toLower('project_name');
  console.log(checkValue);

  return (
    <Modal
      className="bg-white mt-40 rounded max-w-lg"
      onDismiss={() => history.push('/dashboard/projects')}
    >
      <h1 className="flex justify-start items-center font-bold text-xl p-4  shadow">
        <GoAlert className="mr-2 text-2xl text-red-600" />
        Are you absolutely sure?
      </h1>
      <p
        style={{
          backgroundColor: '#fffbdd',
          color: '#735c0f',
          border: '1px solid rgba(27,31,35,.15)'
        }}
        className="p-4 "
      >
        Unexpected bad things will happen if you don’t read this!
      </p>
      <div className="px-4 pt-4">
        <p className="pb-3">
          This action <strong>cannot</strong> be undone. This will permanently
          delete the <br />
          <strong>{'project_name'}</strong> project, lists, tasks, and activity,
          and remove all <br /> collaborator associations.
        </p>
        <p className="pb-3">
          <strong>Note:</strong> there is an option to put your project in the
          archive. <br />
          Once <strong>archived</strong>, a project's access changes to{' '}
          <strong>view only</strong> for all participants. Archiving a project
          allows you to retain historical information so nothing will be lost.
        </p>
        <p className="pb-3">
          Please type in the name of the repository to confirm.
        </p>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('test');
        }}
        className="px-4 pb-4"
        autoComplete="off"
        noValidate
      >
        <div className="text-gray-700">
          <input
            onChange={e => setValue(e.target.value)}
            value={value}
            name="title"
            className="appearance-none block w-full rounded py-3 px-4 leading-tight border bg-gray-200 focus:outline-none focus:bg-white focus:shadow
         "
          />
        </div>
        <button
          type="Create"
          disabled={!checkValue}
          className={`w-full shadow font-bold py-2 px-4 rounded mt-3 bg-grey-500
          border-red-600 border text-red-600
          ${
            checkValue
              ? 'hover:bg-red-600 hover:text-white'
              : 'cursor-not-allowed opacity-50'
          }
          `}
        >
          I understand the consequences, delete this project
        </button>
      </form>
    </Modal>
  );
};

export default connect(null, { createProject })(ProjectDelete);
