const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun } = require('docx');
const Resume = require('../models/Resume');
const AnalysisResult = require('../models/AnalysisResult');
const { analyzeText } = require('../utils/textAnalysis');

// Auto-edit the resume based on suggestions
function autoEditResume(resumeText, suggestions) {
  let editedText = resumeText;

  suggestions.forEach((suggestion) => {
    editedText = editedText.replace(suggestion.oldText, suggestion.newText);
  });

  return editedText;
}

// Save edited resume as a .docx file
function saveResumeAsDocx(resumeText, fileName) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun(resumeText),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(path.join(__dirname, '../uploads', fileName), buffer);
  });
}

// Handle resume upload and analysis
async function uploadResume(req, res) {
  const { resumeText, jobDescriptionText } = req.body;
  const resume = new Resume({ resumeText, jobDescriptionText });
  await resume.save();

  const analysisResults = analyzeText(jobDescriptionText);
  const result = new AnalysisResult({ resumeId: resume._id, suggestions: analysisResults });
  await result.save();

  res.json({ success: true, result });
}

module.exports = { autoEditResume, saveResumeAsDocx, uploadResume };
