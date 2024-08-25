// Example text analysis using simple keyword matching
exports.analyze = (resumeText, jobDescriptionText) => {
    const resumeWords = resumeText.toLowerCase().split(' ');
    const jobDescriptionWords = jobDescriptionText.toLowerCase().split(' ');

    let matchCount = 0;
    const suggestions = [];

    jobDescriptionWords.forEach((word) => {
        if (resumeWords.includes(word)) {
            matchCount++;
        } else {
            suggestions.push(`Consider adding or highlighting the word: ${word}`);
        }
    });

    const matchPercentage = (matchCount / jobDescriptionWords.length) * 100;

    return {
        matchPercentage,
        suggestions,
    };
};
