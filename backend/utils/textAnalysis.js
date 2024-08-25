const nlp = require('compromise');

function analyzeText(text) {
  const doc = nlp(text);
  const keywords = doc.topics().out('array');
  return keywords.map(keyword => ({ oldText: keyword, newText: keyword + ' (suggestion)' }));
}

module.exports = { analyzeText };
