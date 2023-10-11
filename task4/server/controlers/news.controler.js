const { create, getAll, getOne, updateOne, deleteOne } = require("../models/news.model");

const postNews = async (req, res) => {
  try {
    const {title,details} = req.body;
    const news = await create({title,details})
    res.status(200).json(news);
  } catch (error) {
    res.status(501).json({
      message: "An error occurred",
    });
  }
};

const getNews = async (req, res) => {
  try {
    const news = await getAll()
    res.status(200).json(news);
  } catch (error) {
    res.status(501).json({
      message: "An error occurred",
    });
  }
};

const getOneNews = async (req, res) => {
  try {
    const news = await getOne(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    res.status(501).json({
      message: "An error occurred",
    });
  }
};

const addcomment = async (req, res) => {
  try {
   const news = await updateOne(req.params.id,req.body.comment)
   console.log(news)
    res.status(200).json(news);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateNews = async (req, res) => {
  try {
   const news = await updateOne(req.body)
    res.status(200).json(news);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteNews = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(200).json({
      message: "news Deleted",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getNews,
  postNews,
  updateNews,
  deleteNews,
  getOneNews,
  addcomment
};
