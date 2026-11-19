// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  // Send HTML content with a JavaScript console message
  res.send(`
    <html>
      <head>
        <title>Hello World Program</title>
      </head>
      <body>
        <h1>Welcome Students!</h1>
        <h2>Check your browser console to see the message.</h2>
        <script>
          console.log('Hello World');
        </script>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

