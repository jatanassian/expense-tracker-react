// Connect to our database

const mongoose = require('mongoose');

// Any calls with mongoose to connect, find or create return a promise so we use async/await
const connectDB = async () => {
  try {
    // Connection variable that returns a promise
    // The second parameter is an object with some properties to stop some of the warnings mongoose might give us
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); // Exit with failure, the application shuts down.
  }
}

module.exports = connectDB;