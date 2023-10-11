const express = require('express');
const router = express.Router();
const News = require('../models/News');
const newsController = require('../controllers/newsController');

router.get('/', newsController.getAllNews);
router.post('/', newsController.createNews);
router.post('/upvote/:id', newsController.upvoteNews);
router.post('/hide/:id', newsController.hideNews);

module.exports = router;