document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const resumeText = 'Extracted resume text here'; // Extract text from uploaded resume
    const jobDescriptionText = 'Extracted job description text here'; // Extract text from job description

    const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume: resumeText, jobDescription: jobDescriptionText }),
    });

    const result = await response.json();
    document.getElementById('results').innerHTML = `
        <h3>Match Percentage: ${result.matchPercentage}%</h3>
        <h4>Suggestions:</h4>
        <ul>
            ${result.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
        </ul>
    `;
});
