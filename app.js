const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database, {
  useNewUrlParser: true
});

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '); //+config.database
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Create Server
const app = express();

// Routes
const users = require('./routes/users');
const polices = require('./routes/polices');

// Port Number
const port = 3000; // When deploying change to process.env.PORT || 8080; heroku doah

// CORS Middleware
app.use(cors());

// Set Static Folder - Folder for frontend - public will populate with client side files on ng build
// Changed the output of ng build from dist/ to public/
app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// This was exported as a function so it takes an argument
require('./config/passport')(passport);

// Body Parser Middleware
app.use(bodyParser.json());

// Located in routes
app.use('/users', users);
app.use('/polices', polices);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Reroute
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});