const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
});

// On Save Hook, encrypt password
userSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

userSchema.methods.generateAuthToken = function() {
  const timestamp = new Date().getTime();
  
  return jwt.sign(
    {
      sub: this._id,
      iat: timestamp
    },
    config.get('jwtPrivateKey')
  );
};

module.exports = mongoose.model('user', userSchema);
