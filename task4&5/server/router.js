'use strict';

const router = require('express').Router();
const news = require('./controllers/news');

router.get('/news', news.getNews);
router.post('/news', news.postNews);
router.get('/news/:id', news.getNewsById);
router.put('/news/:id', news.postComment);
router.put('/news/:id/up', news.postVote);

module.exports = router;
