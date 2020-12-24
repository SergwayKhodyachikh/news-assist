const mongoose = require('mongoose');
const express = require('express');
const { Gender, validate } = require('../models/gender');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let gender = await Gender.find({ name: req.body.name });
  if (gender.length)
    return res.status(400).send(new Error(`can't create a name that already exist`));

  gender = new Gender({
    name: req.body.name,
    gender: req.body.gender
  });
  gender = await gender.save();
  res.send(gender);
});

router.get('/', async (req, res) => {
  const genderList = await Gender.find().sort({ name: 1 });
  res.send(genderList);
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  console.log(name);
  const gender = await Gender.findOne({ name });
  if (!gender) return res.send({gender:'unknown'});
  res.send(gender);
});

module.exports = router;
