// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();  // Load environment variables from .env file
const helmet = require('helmet');
app.use(helmet());

const app = express();
const port = process.env.PORT || 3000;  // Use environment variable for port, default to 3000

// MongoDB connection using environment variable
const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../frontend')));  // Serve static files

// Routes
app.use('/api', apiRoutes);

// Start server
app.listen(port, () => {
  //console.log(`Server running at http://localhost:${port}`);
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error details
    res.status(500).send('Something went wrong!'); // Send a user-friendly error message
  });
  