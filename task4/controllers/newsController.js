const News = require('../model/news.js');
const { formatDistanceToNow } = require('date-fns');


exports.createNews = async (req, res) => {
  try {
    const newNews = new News({
      title: req.body.title,
      url: req.body.url,
    });
    const newsData = await newNews.save();
    res.status(200).send(newsData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getNews = async (req, res) => {
  try {
    const newsData = await News.find({});

    const newsWithTime = newsData.map((news) => {
      return {
        _id: news._id,
        title: news.title,
        url: news.url,
        comments:news.comment,
        timeDistance: formatDistanceToNow(new Date(news.date), {
          addSuffix: true
        })
      };
    });
   
    res.status(200).send(newsWithTime);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getNewsById = async (req, res) => {
  try {
    const newsData = await News.findById(req.params.id);
    res.status(200).send({
      _id: newsData._id,
        title: newsData.title,
        url: newsData.url,
        comments:newsData.comment,
        timeDistance: formatDistanceToNow(new Date(newsData.date), {
          addSuffix: true
        })
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
exports.updateComment = async (req, res) => {
  try {
    const newsData = await News.findById(req.params.id);
    console.log(req.body)
    const {comment } = req.body;
    console.log(comment)
    newsData.comment.push(req.body.comment);
    await newsData.save();
    res.status(200).send(newsData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
