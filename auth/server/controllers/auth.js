const User = require('../models/User');

exports.signin = (req, res) => {
  res.json({ token: req.user.generateAuthToken() });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(422)
        .send({ error: 'You must provide email and password ' });

    let user = await User.findOne({ email });
    if (user) return res.status(422).send({ error: 'Email is in use!' });

    user = new User({
      email,
      password
    });
    
    await user.save();
    res.json({ token: user.generateAuthToken() });  
  } catch (err) {
    next(err);
  }
};
