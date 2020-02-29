const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Let dotenv know where the config file is
dotenv.config({ path: './config/config.env' });

// Connect to the database
connectDB();

const transactions = require('./routes/transactions');

// Initialize the express app
const app = express();

// Connect to the transactions route
app.use('/api/v1/transactions', transactions);

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));