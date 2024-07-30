const mongoose = require("mongoose");
require('dotenv').config();

// Define the MongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotel';
const mongoURL = process.env.MONGODB_URL;
// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
      
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

db.on('connected',() => {
    console.log('Connected to server');
});

module.exports = db;