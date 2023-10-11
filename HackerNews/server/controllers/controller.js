const NewsModel = require('../models/model');


module.exports.getNews = async (_req, res) => {
      try {
            const news = await NewsModel.find();
            res.send(news);
      } catch (error) {
            console.error('Error fetching news:', error);
            res.status(500).json({ error: 'Server error' });
      }
};

module.exports.saveNews = async (req, res) => {
      try {
            console.log(req.body);

            const newNews = await NewsModel.create({ ...req.body });

            console.log('Added successfully...');
            console.log(newNews);

            res.send(newNews);
      } catch (error) {
            console.error('Error adding news:', error);
            res.status(500).json({ error: 'Server error' });
      }
};