const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: { type: String },
  section: { type: mongoose.Types.ObjectId, ref: 'Section' },
  deadline: { type: Date },
  description: { type: String },
  participants: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  comments: { type: String }
});

module.exports = mongoose.model('Task', schema);
