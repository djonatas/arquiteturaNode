const express = require('express');

const router = express.Router();
const Controller = require('../controllers/user');

const controller = new Controller();

router.get('/', controller.connect);

module.exports = router;
