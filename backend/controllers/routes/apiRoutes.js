const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const analysisController = require('../controllers/analysisController');

// Upload routes
router.post('/upload-resume', fileController.uploadResume);
router.post('/upload-job-description', fileController.uploadJobDescription);

// Analysis route
router.post('/analyze', analysisController.analyzeText);

module.exports = router;
