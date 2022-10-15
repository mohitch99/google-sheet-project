const { google } = require('googleapis');

const { GOOGLE_CLIENT_ID: client_id, GOOGLE_CLIENT_SECRET: client_secret, GOOGLE_REFRESH_TOKEN: refresh_token } = process.env;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret);
oAuth2Client.setCredentials({refresh_token});

module.exports = google.sheets({ version: 'v4', auth: oAuth2Client });