const textAnalysis = require('../utils/textAnalysis');

// Analyze the uploaded resume and job description
exports.analyzeText = (req, res) => {
    const resumeText = req.body.resume;
    const jobDescriptionText = req.body.jobDescription;

    const analysisResult = textAnalysis.analyze(resumeText, jobDescriptionText);
    
    res.json(analysisResult);
};
