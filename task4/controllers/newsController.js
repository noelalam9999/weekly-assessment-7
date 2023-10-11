const News = require('../models/News');
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNews = async (req, res) => {
  const { title, url } = req.body;
  try {
    const news = new News({ title, url });
    const createdNews = await news.save();
    res.status(201).json(createdNews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.upvoteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    if (!news) {
      res.status(404).json({ error: 'News item not found' });
      return;
    }
    news.upvotes += 1;
    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.hideNews = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    if (!news) {
      res.status(404).json({ error: 'News item not found' });
      return;
    }
    news.visibility = 0;
    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};