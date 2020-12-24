const _ = require('lodash');
const router = require('express').Router();
const { Project, validate } = require('../models/project');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const projects = await Project.find({ author: req.user.id });
  res.send(projects);
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  const project = new Project({ title: req.body.title, author: req.user._id });
  await project.save();

  res.status(201).send(project);
});

router.delete('/:id', auth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project)
    return res.status(404).send('the Project with the given ID was not found.');
  if (!project.author.equals(req.user._id))
    return res
      .status(403)
      .send('Only the author can delete the project with the given ID.');
  project.remove();
  res.status(204).send();
});

router.get('/:id', auth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project)
    return res.status(404).send('the Project with the given ID was not found.');
  res.send(project);
});

// edit project
router.put('/', auth, async (req, res) => {});

module.exports = router;

/**
|--------------------------------------------------
| example
|--------------------------------------------------
*/
/**

router.put('/:id', async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ id: req.params.id });

  if (!user)
    return res.status(404).send('the user with the given ID was not found.');

  const { name: oldName } = user;
  user.name = req.body.name;
  user.email = req.body.email;
  user.address.city = req.body.city;

  await updateUserFileProperties(user.id, oldName, req.body);
  await user.save();
  res.json(user);
});

*/
