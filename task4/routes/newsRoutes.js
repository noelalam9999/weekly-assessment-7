const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.post('/news', newsController.createNews)

router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewsById);
router.post('/news/:id', newsController.updateComment);


module.exports = router;
