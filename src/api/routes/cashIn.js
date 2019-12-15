const express = require('express');

const router = express.Router();
const Controller = require('../controllers/cashIn');

const controller = new Controller();

router.post('/pay', controller.pay);

module.exports = router;
