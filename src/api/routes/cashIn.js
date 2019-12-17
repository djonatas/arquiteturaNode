const express = require('express');

const router = express.Router();
const Controller = require('../controllers/cashIn');

const controller = new Controller();

router.post('/pay', controller.pay);

router.get('/transactions', controller.getMine);

module.exports = router;
