const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema(
  {
    title: { type: String },
    // the user that created it
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    // private (false) or public (true)
    accessibility: { type: Boolean, default: false },
    // another users that can edit the project
    collaborates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // archived or still in progress if archived can't be changed
    archived: { type: Boolean, default: false },
    // project main feature the lists collections
    lists: [{ type: mongoose.Types.ObjectId, ref: 'List' }]
    // add to user favorite list: considering putting in the the user schema
    // favorite: { type: Boolean, default: false },
    // collections: [{ type: mongoose.Types.ObjectId, ref: 'Collection' }],
  },
  // recording when project was created and updated
  { timestamps: { createdAt: true, updatedAt: true } }
);

exports.validate = values => {
  const schema = {
    title: Joi.string()
      .min(1)
      .max(255)
      .required(),
    author: Joi.objectId(),
    accessibility: Joi.boolean(),
    collaborates: Joi.array().items(Joi.objectId()),
    archived: Joi.boolean(),
    lists: Joi.array().items(Joi.objectId())

    // favorite: Joi.boolean(),
    // collections: Joi.array().items(Joi.objectId()),
  };
  return Joi.validate(values, schema);
};

exports.Project = mongoose.model('projects', schema);
