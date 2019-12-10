/* eslint-disable arrow-body-style */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


/*
require('./models/transaction-model');
require('./models/customer-model');
require('./models/token-model');
require('./models/subAccount-model');
 */

// Load Routes
const userRoutes = require('../routes/user');

const cashIn = require('../routes/cashIn');
const cashOut = require('../routes/cashOut');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use('/user', userRoutes);
app.use('/cashIn', cashIn);
app.use('/cashOut', cashOut);

module.exports = app;
