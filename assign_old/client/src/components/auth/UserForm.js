import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class UserForm extends Component {
  state = {
    showPassword: false
  };

  renderPasswordButton = () => (
    <span
      onClick={() => this.setState({ showPassword: !this.state.showPassword })}
      className="text-blue-700 lowercase text-xs cursor-pointer underline ml-auto"
    >
      show
    </span>
  );

  renderField = ({
    input,
    meta: { error, touched },
    icon: Icon,
    placeholder
  }) => {
    return (
      <div className="text-gray-700 mb-4">
        <label
          className="flex items-center capitalize tracking-wide text-lg font-normal mb-1 pl-2 "
          htmlFor={input.name}
        >
          <Icon className="mr-1 text-xl" />
          {input.name}
          {/* Button to toggle password visibility  */}
          {input.name === 'password' && this.renderPasswordButton()}
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
          placeholder={placeholder}
        />
        {/* Validation message if exist */}
        {error && touched && (
          <p className="text-red-500 font-bold text-sm">{error}</p>
        )}
      </div>
    );
  };

  validate = values => {
    const errors = {};
    this.props.formFields.forEach(({ name, minLength, maxLength }) => {
      // Required
      if (!values[name]) errors[name] = `Please enter your ${name}`;
      // Required minLength if provided
      if (values[name] && values[name].length < minLength)
        errors[name] = `Your ${name} required to
         be at lest ${minLength} characters long.`;
      // Required maxLength if provided
      if (values[name] && values[name].length > maxLength)
        errors[
          name
        ] = `Your ${name} required to be less then ${maxLength} characters long.`;
    });
    // Email validation if the Field exist
    if (
      values.email &&
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    )
      errors.email = 'Invalid email!';

    return errors;
  };

  renderFields = () =>
    this.props.formFields.map(props => {
      if (props.name === 'password') {
        if (this.state.showPassword) props.type = 'text';
        else props.type = 'password';
      }
      return <Field key={props.name} {...props} component={this.renderField} />;
    });

  render() {
    return (
      <Form
        validate={this.validate}
        onSubmit={this.props.onSubmit}
        render={({ handleSubmit, pristine, invalid, submitting }) => {
          return (
            <form
              className="pt-4 pb-2"
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate
            >
              {this.renderFields()}
              <button
                type="submit"
                disabled={submitting || pristine || invalid}
                className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3
                ${(submitting || pristine || invalid) && 'cursor-not-allowed'}`}
              >
                {this.props.ButtonMessage}
              </button>
            </form>
          );
        }}
      />
    );
  }
}
export default UserForm;
