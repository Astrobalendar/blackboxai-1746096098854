const userStats = {}; // In-memory store: userId -> stats

// Save or update user stats
exports.saveStats = (req, res) => {
  const userId = req.body.userId;
  const stats = req.body.stats;
  if (!userId || !stats) {
    return res.status(400).json({ error: 'userId and stats are required' });
  }
  userStats[userId] = stats;
  res.json({ message: 'User stats saved successfully' });
};

// Get user stats
exports.getStats = (req, res) => {
  const userId = req.params.userId;
  if (!userId || !userStats[userId]) {
    return res.status(404).json({ error: 'User stats not found' });
  }
  res.json({ stats: userStats[userId] });
};
