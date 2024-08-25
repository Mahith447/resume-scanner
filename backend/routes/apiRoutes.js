const express = require('express');
const router = express.Router();
const { autoEditResume, saveResumeAsDocx, uploadResume } = require('../controllers/fileController');

// Route to upload and analyze resume
router.post('/upload-resume', uploadResume);

// Route to edit and download the resume
router.post('/edit-resume', (req, res) => {
  const { resumeText, suggestions } = req.body;
  const editedText = autoEditResume(resumeText, suggestions);
  const fileName = 'edited_resume.docx';

  saveResumeAsDocx(editedText, fileName);

  res.download(path.join(__dirname, '../uploads', fileName));
});

module.exports = router;
