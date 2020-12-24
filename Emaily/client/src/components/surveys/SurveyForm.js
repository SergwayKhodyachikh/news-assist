import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => (
      <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
      />
    ));
  }
  render() {
    return (
      <div>
        <Form
          initialValues={this.props.initialValues}
          validate={values => {
            const errors = {};
            errors.recipients = validateEmails(values.recipients || '');
            formFields.forEach(({ name }) => {
              if (!values[name]) errors[name] = `You must provide a ${name}`;
            });
            return errors;
          }}
          onSubmit={formValues => {
            this.props.saveValues(formValues);
            this.props.onSurveySubmit();
          }}
          render={({ handleSubmit, pristine, invalid }) => {
            console.log(pristine, invalid);

            return (
              <form onSubmit={handleSubmit}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="teal btn-flat right white-text"
                >
                  Submit
                  <i className="material-icons right">done</i>
                </button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default SurveyForm;
