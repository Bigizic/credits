const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes with no restrictions
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Default endpoint that returns JSON
app.get('/', (req, res) => {
  res.json({
    message: 'Isaac Credits Widget Server',
    version: '1.0.0',
    endpoints: {
      '/': 'This endpoint - returns server info',
      '/widget': 'Serves the credits widget JavaScript file',
    },
    timestamp: new Date().toISOString()
  });
});

// Serve the credits widget JavaScript file
app.get('/widget', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.json({
    message: 'footer widget server',
    text: 'Powered by Niox',
    link: 'mailto:olalekanisaac75@gmail.com',
    target: '_blank'
  })
});

// Start the server
app.listen(PORT, () => {
  console.log(`Credits Widget Server running on port ${PORT}`);
  console.log(`Access the server at: http://localhost:${PORT}`);
  console.log(`Default endpoint: http://localhost:${PORT}/`);
});
