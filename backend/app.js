// Import the express library
const express = require('express');
const path = require('path');
const app = express(); // Create an Express application
const port = 3000; // Define the port for the server
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded files
// Middleware to parse JSON data (if needed)
app.use(express.json()); // Allows Express to parse JSON requests

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Define a route for the root path "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html')); // Serve the main HTML file from the frontend folder
});

// Example route for another path
app.get('/about', (req, res) => {
  res.send('<h2>About Us</h2><p>This is a simple resume scanner application.</p>'); // Example content for /about
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log that the server is running
});
// Serve the upload page
app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/upload.html'));
  });
  // Handle file upload
  app.post('/upload', upload.single('resume'), (req, res) => {
    console.log('File uploaded:', req.file);
    res.send('File uploaded successfully!');
  });  