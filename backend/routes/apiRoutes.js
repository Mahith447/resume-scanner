const express = require('express');
const router = express.Router();
const upload = require('../controllers/fileController');

// POST endpoint for file upload
router.post('/upload', upload.fields([{ name: 'resume' }, { name: 'jobDescription' }]), (req, res) => {
    // Handle file processing and analysis here
    res.send('Files uploaded successfully');
});

module.exports = router;
