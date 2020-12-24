import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../store/actions/nameRegistrationActions';

import NameInput from '../components/nameRegistration/NameInput';
import GenderSelect from '../components/nameRegistration/GenderSelect';
import SubmitButton from '../components/nameRegistration/SubmitButton';
import RegisterOutput from '../components/nameRegistration/RegisterOutput';

export class NameRegistration extends Component {
  postGenderHandler = e => {
    const { registerName, registerGender, postGender } = this.props;
    e.preventDefault();
    postGender(registerName, registerGender);
  };

  render() {
    const {
      registerName,
      registerGender,
      registerNameChange,
      registerGenderSelect,
      loading,
      getFailure,
      res
    } = this.props;

    return (
      <div className="jumbotron d-flex flex-column">
        <form className="form-group" onSubmit={this.postGenderHandler}>
          <NameInput
            registerName={registerName}
            registerNameChange={registerNameChange}
          />
          <GenderSelect
            registerGender={registerGender}
            registerGenderSelect={registerGenderSelect}
          />
          <SubmitButton />
          <RegisterOutput loading={loading} getFailure={getFailure} res={res} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerName: state.nameRegistration.registerName,
  registerGender: state.nameRegistration.registerGender,
  loading: state.nameRegistration.loading,
  getFailure: state.nameRegistration.getFailure,
  res: state.nameRegistration.res
});

const mapDispatchToProps = {
  registerNameChange: actions.registerNameChange,
  registerGenderSelect: actions.registerGenderSelect,
  postGender: actions.postGender
};

NameRegistration.propTypes = {
  registerName: PropTypes.string.isRequired,
  registerGender: PropTypes.string.isRequired,
  registerNameChange: PropTypes.func.isRequired,
  registerGenderSelect: PropTypes.func.isRequired,
  postGender: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getFailure: PropTypes.bool.isRequired,
  res: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameRegistration);
