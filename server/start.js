'use strict'

const express = require('express');
const {resolve} = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(require('volleyball'));
}

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any requests.

const PORT = 1337
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));