const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  // id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], default: 'Other' },
  mobile: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema);
