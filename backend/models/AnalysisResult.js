const mongoose = require('mongoose');

const analysisResultSchema = new mongoose.Schema({
  resumeId: mongoose.Schema.Types.ObjectId,
  suggestions: [String],
  matchedSkills: [String],
});

module.exports = mongoose.model('AnalysisResult', analysisResultSchema);
