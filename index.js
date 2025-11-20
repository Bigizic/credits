const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const pre_urls = [
  'tohannieesskincare.com',
  'beauty.tohannieesskincare.com',
  'thelinkhangout.com',
  'bbglownatural.com',
]

const httpsOrigins = pre_urls.map(url => `https://${url}`);
const httpOrigins = pre_urls.map(url => `http://${url}`);

const allowedOrigins = [
  ...httpsOrigins,
  ...httpOrigins
].filter(Boolean)

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('not allowed by cors'));
    }
  },
  credentials: true,
}));

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
  const link = 'mailto:olalekanisaac75@gmail.com';
  const target = '_blank';
  const text = 'Powered by Niox';
  res.setHeader('Content-Type', 'application/json');
  return res.json({
    message: 'footer widget server',
    text: `<span style="margin-left: 2px;">
              <a style="color: white; text-decoration: underline; hover: text-gray-300;"
                href=${link} 
                target=${target || '_blank'} 
                rel="noopener noreferrer"
              >  ${text}</a>
            </span>`,
    link,
    target
  })
});

// Start the server
app.listen(PORT, () => {
  console.log(`Credits Widget Server running on port ${PORT}`);
  console.log(`Access the server at: http://localhost:${PORT}`);
  console.log(`Default endpoint: http://localhost:${PORT}/`);
});
