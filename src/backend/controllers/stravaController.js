const axios = require('axios');

const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID || 'your_strava_client_id';
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET || 'your_strava_client_secret';
const STRAVA_REDIRECT_URI = process.env.STRAVA_REDIRECT_URI || 'http://localhost:3000/integrations/strava/callback';

// Redirect user to Strava authorization page
exports.authorize = (req, res) => {
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(STRAVA_REDIRECT_URI)}&approval_prompt=auto&scope=read,activity:read_all`;
  res.redirect(authUrl);
};

// Handle Strava OAuth callback and exchange code for access token
exports.callback = async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Authorization code not provided');
  }
  try {
    const tokenResponse = await axios.post('https://www.strava.com/oauth/token', null, {
      params: {
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
      },
    });
    const accessToken = tokenResponse.data.access_token;
    // TODO: Save access token to user profile in database

    res.json({ message: 'Strava connected successfully', accessToken });
  } catch (error) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).send('Failed to connect to Strava');
  }
};

// Fetch user activities from Strava API
exports.getActivities = async (req, res) => {
  const accessToken = req.headers.authorization?.split(' ')[1];
  if (!accessToken) {
    return res.status(401).send('Access token required');
  }
  try {
    const activitiesResponse = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    res.json(activitiesResponse.data);
  } catch (error) {
    console.error('Error fetching activities:', error.response?.data || error.message);
    res.status(500).send('Failed to fetch activities from Strava');
  }
};
