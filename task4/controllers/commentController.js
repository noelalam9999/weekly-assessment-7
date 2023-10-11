const Comment = require('../models/Comment');

exports.getCommentsForNews = async (req, res) => {
  const { newsId } = req.params;
  try {
    const comments = await Comment.find({ newsId }).sort({ createdAt: 1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCommentForNews = async (req, res) => {
  const { newsId } = req.params;
  const { text } = req.body;
  try {
    const comment = new Comment({ newsId, text });
    const createdComment = await comment.save();
    res.status(201).json(createdComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};