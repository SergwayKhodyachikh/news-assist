const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {type: String},
  tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Section', schema)