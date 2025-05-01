/**
 * User routes for authentication and profile management
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);

// TODO: Add user profile and progress endpoints

const aiController = require('../controllers/aiController');
const analyticsController = require('../controllers/analyticsController');

router.post('/training-plan', aiController.generateTrainingPlan);
router.get('/feedback/:userId', aiController.getPersonalizedFeedback);

router.post('/stats', analyticsController.saveStats);
router.get('/stats/:userId', analyticsController.getStats);

router.get('/', (req, res) => {
  res.json({ message: 'User route placeholder' });
});

module.exports = router;
