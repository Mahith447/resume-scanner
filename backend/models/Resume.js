const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: String,
  resumeText: String,
  jobDescriptionText: String,
});

module.exports = mongoose.model('Resume', resumeSchema);
