"user strict";

const news = require("../model/db.js");

exports.getNews = (req, res) => {
  try {
    const news = News.getAll(); // getting all news
    res.status(200);
    res.send(news);
  } catch (e) {
    console.log("e", e); //handle error if any error
    res.sendStatus(500);
  }
};

exports.postNews = (req, res) => {
  try {
    News.postOne(req.body); //post a news
    res.status(201);
    res.send("News received");
  } catch (e) {
    console.log("e", e); //handle error if any error
    res.sendStatus(500);
  }
};
