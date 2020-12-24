import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewUserForm = ({ onSubmit }) => {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
    setValue({
      firstName: '',
      lastName: '',
    });
  }

  function handleInput(e) {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          placeholder="first name"
          name="firstName"
          onChange={handleInput}
          value={value['firstName']}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          placeholder="last name"
          name="lastName"
          onChange={handleInput}
          value={value['lastName']}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

NewUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewUserForm;
