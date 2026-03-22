const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Export app (DO NOT listen here)
module.exports = app;
