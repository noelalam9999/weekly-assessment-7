const { Model } = require("mongoose");
const models = require("../models/index");

exports.getNews = async (req, res) => {
  try {
    const data = await models.getAll();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.postNews = async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ error: "parameter is missing" });
    }
    const news = await models.postOne({ title, url });
    res.status(201).send(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const { score } = req.body;
    const updated = await models.updateOne(newsId, { score });
    if (updated) {
      res.status(200).json({ message: "List updated successfully" });
    } else {
      res.status(404).json({ error: "News not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
