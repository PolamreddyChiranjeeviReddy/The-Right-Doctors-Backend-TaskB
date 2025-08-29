const express = require('express');
const router = express.Router();
const Person = require('../models/person');


router.get('/', async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const newPerson = await Person.create({ name, age, gender, mobile });
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /people/:id/edit - form to edit
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});


router.put('/:_id', async (req, res) => {
  try {
    const { name, age, gender, mobile } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params._id,
      { name, age, gender, mobile },
      { new: true }
    );
    if (!updatedPerson) return res.status(404).json({ error: 'Person not found' });
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete('/:_id', async (req, res) => {
  try {
    const {_id} = req.params;
    const deletedPerson = await Person.findByIdAndDelete(_id);
    if (!deletedPerson) return res.status(404).json({ error: 'Person not found' });
    res.json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
