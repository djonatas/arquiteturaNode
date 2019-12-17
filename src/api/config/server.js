/* eslint-disable arrow-body-style */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Token = require('../service/token');

const app = express();

app.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        if (req.method === 'OPTIONS') {
            next();
        } else {
            res.status(403).json({ message: 'Permission denied' });
            res.end();
        }
    } else {
        const token = new Token();
        const customer = await token.getCustomerByToken(req.headers.authorization);
        if (!customer) {
            res.status(403).json({ message: 'Permission denied' });
            res.end();
        } else {
            app.currentCustomer = customer;
            next();
        }
    }
});

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
