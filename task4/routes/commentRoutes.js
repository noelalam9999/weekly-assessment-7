const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const commentController = require('../controllers/commentController');

router.get('/:newsId', commentController.getCommentsForNews);
router.post('/:newsId', commentController.createCommentForNews);

module.exports = router;