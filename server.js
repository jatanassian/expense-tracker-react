const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// Let dotenv know where the config file is
dotenv.config({ path: './config/config.env' });

// Initialize the express app
const app = express();

// Route
app.get('/', (req, res) => res.send('Hello'));

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));