const evaluations = {}; // In-memory store: userId -> evaluation results

// Save evaluation results for a user
exports.saveEvaluation = (req, res) => {
  const userId = req.body.userId;
  const results = req.body.results;
  if (!userId || !results) {
    return res.status(400).json({ error: 'userId and results are required' });
  }
  evaluations[userId] = results;
  res.json({ message: 'Evaluation results saved successfully' });
};

// Get evaluation results for a user
exports.getEvaluation = (req, res) => {
  const userId = req.params.userId;
  if (!userId || !evaluations[userId]) {
    return res.status(404).json({ error: 'Evaluation results not found' });
  }
  res.json({ results: evaluations[userId] });
};
