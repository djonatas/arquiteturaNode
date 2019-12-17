/* eslint-disable arrow-body-style */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Load Routes
const userRoutes = require('../routes/user');
const cashIn = require('../routes/cashIn');
const reports = require('../routes/reports');

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use('/user', userRoutes);
app.use('/cashIn', cashIn);
app.use('/reports', reports);

module.exports = app;
