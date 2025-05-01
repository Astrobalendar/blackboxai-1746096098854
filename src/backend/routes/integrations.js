/**
 * Integration routes for third-party platforms: Strava, Apple Health, Garmin Connect
 */

const express = require('express');
const router = express.Router();
const stravaController = require('../controllers/stravaController');

// Strava OAuth routes
router.get('/strava/authorize', stravaController.authorize);
router.get('/strava/callback', stravaController.callback);
router.get('/strava/activities', stravaController.getActivities);

const appleHealthController = require('../controllers/appleHealthController');
const garminController = require('../controllers/garminController');

// TODO: Add Apple Health and Garmin Connect integration routes
router.post('/applehealth/sync', appleHealthController.syncData);
router.post('/garmin/sync', garminController.syncData);

router.get('/', (req, res) => {
  res.json({ message: 'Integrations route placeholder' });
});

module.exports = router;
