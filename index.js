const app = require('./app');

// Vercel serverless function handler – uses your Express app
module.exports = (req, res) => {
  return app(req, res);
};
