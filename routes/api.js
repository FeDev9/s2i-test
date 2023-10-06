// routes/api.js
const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController');

router.get('/v1/ranking', rankingController.getRanking);

module.exports = router;