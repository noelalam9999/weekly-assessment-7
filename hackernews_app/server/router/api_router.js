const express = require('express');
const { getAllNews, postNews, postComment, updateVote, getNewsById, hideBlogPost } = require('../controller/newsController');

const router = express.Router();

router.get('/news', getAllNews);
router.get('/news/:id', getNewsById);
router.post('/news', postNews);
router.put('/comment', postComment);
router.put('/vote/:id', updateVote);
router.put('/hide/:id', hideBlogPost);

module.exports = router;
