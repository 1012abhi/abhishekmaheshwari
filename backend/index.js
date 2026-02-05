require('dotenv').config();    
const express = require('express');
const path = require('path');
const connectDB = require('./db/db.js');
const cors = require('cors');
const fs = require('fs');


connectDB();
const app = express();

// const allowedOrigins = (process.env.CORS_ORIGINS || '')
//   .split(',')
//   .map((s) => s.trim())
//   .filter(Boolean);

// const corsOptions = {
//   origin(origin, cb) {
//     // Allow non-browser tools (curl/postman) with no Origin header
//     if (!origin) return cb(null, true);

//     // Allow any localhost port in dev (Vite can pick different ports)
//     if (/^https?:\/\/localhost:\d+$/.test(origin)) return cb(null, true);

//     // Allow configured origins for production/staging
//     if (allowedOrigins.includes(origin)) return cb(null, true);

//     return cb(new Error(`CORS blocked for origin: ${origin}`));
//   },
//   // credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'x-forwarded-for', 'Authorization'],
// };

// Allow both production and local development origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = 5000;  
const dataFile = path.join(__dirname, 'visitors.json');

// Middleware
app.use(express.json());

// Route to get total visitor count
// app.get('/api/visitors/total', (req, res) => {
//   const data = JSON.parse(fs.readFileSync(dataFile));
//   res.json({ totalVisitors: data.count });
// });

const visitorRoutes = require('./routes/visitor.routes.js');
app.use('/api/visitors', visitorRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});