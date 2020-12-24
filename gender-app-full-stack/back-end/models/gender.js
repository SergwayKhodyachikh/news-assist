const joi = require('joi');
const mongoose = require('mongoose');

const getFirstWord = sentence => {
  const arr = sentence.split(' ');
  return arr[0];
};

const Gender = mongoose.model(
  'Gender',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      lowercase: true,
      get: name => getFirstWord(name),
      set: name => getFirstWord(name)
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female']
    }
  })
);

const validate = gender => {
  const schema = {
    name: joi
      .string()
      .min(3)
      .required()
      .alphanum(),
    gender: joi.valid('male', 'female')
  };
  return joi.validate(gender, schema);
};

const validateName = name => {
  const schema = {
    name: joi
      .string()
      .min(3)
      .required()
      .alphanum()
  };
  return joi.validate(name, schema);
};

exports.Gender = Gender;
exports.validate = validate;
exports.validateName = validateName;
