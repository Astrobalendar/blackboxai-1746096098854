/**
 * Backend entry point for the fitness app
 * Using Node.js with Express framework
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Placeholder for user routes
app.use('/users', require('./routes/users'));

// Placeholder for integration routes
app.use('/integrations', require('./routes/integrations'));

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

module.exports = app;
