import React from 'react'
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux'

const renderInput = ({ input, label }) => {
  return (
    <fieldset>
      <label>{`${label}: `}</label>
      <input {...input} autoComplete="off" />
    </fieldset>
  );
};

const UserForm = ({onSubmit, errorMessage}) => (
  <Form
        onSubmit={onSubmit}
        initialValues={{ email: '', password: '' }}
        render={({ handleSubmit, form, submitting, pristine}) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              component={renderInput}
              type="text"
              label="Email"
            />
            <Field
              name="password"
              component={renderInput}
              type="password"
              label="Password"
            />
            <div>{errorMessage}</div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
)

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default connect(
  mapStateToProps
)(UserForm);
