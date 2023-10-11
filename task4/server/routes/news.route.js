const express = require("express");
const { getOneNews, updateNews, deleteNews, postNews, getNews, addcomment } = require("../controlers/news.controler");

const news = express();

news.get("/:id", getOneNews);
news.put("/:id", addcomment);
news.patch("/:id", updateNews);
news.delete("/:id", deleteNews);
news.post("/", postNews);
news.get("/", getNews);

module.exports = news;
