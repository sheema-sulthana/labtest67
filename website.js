const express = require('express');
const app = express();	
const port = 3000;

// Route for home page
app.get('/', (req, res) => {	
  res.send('<h1>Welcome to the Home Page</h1><p>This is the homepage of the small website.</p>');
});

// Route for about page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This page gives information about our website.</p>');
});

// Route for contact page
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email us at contact@example.com</p>');
});

// Route for services page
app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><ul><li>Web Development</li><li>Mobile Apps</li><li>SEO</li></ul>');
});

// Catch-all route for undefined paths (404)
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

