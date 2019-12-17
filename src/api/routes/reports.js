const express = require('express');

const router = express.Router();
const Controller = require('../controllers/reports');

const controller = new Controller();

router.get('/available', controller.availableResource);

module.exports = router;
