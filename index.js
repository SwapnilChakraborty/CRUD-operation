const express = require("express");
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const Person = require('./models/Person');

app.get('/', (req, res) => {
    res.send('Welcome to the hotel');
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
