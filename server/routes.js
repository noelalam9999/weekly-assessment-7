"user strict";

const router = require("express").Router();
const news = require("./controller/controller");

router.get("/news", news.getNews); //get all news
router.post("/news", news.postNews); //post a news

module.exports = router;
