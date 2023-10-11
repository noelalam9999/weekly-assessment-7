'use strict';
//import external package to handle potential exception, just being careful
const asyncHandler = require('express-async-handler');
//import local module to handle/interact with database
const News = require('../model/News.model');

//getting all news
const getAllNews = asyncHandler(async (req, res) => {
  try {
    const allNews = await News.find({});
    res.status(200).send(allNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//getting news by id for commenting functionality down the line (still not sure)
const getNewsById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const singleNews = await News.findById(id);
    res.status(200).send(singleNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//posting news to db
const postNews = asyncHandler(async (req, res) => {
  try {
    const newRecord = {
      title: req.body.title,
      url: req.body.url,
  }
  const createdNews = await News.create(newRecord);
  res.status(201).json(createdNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//increasing upvote count
const increaseUpvote = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await News.findByIdAndUpdate(
      { _id: id },
      { $inc: { upvote: 1 } }
    );
    res.status(200).json({data: data});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//decrease upvote count
const decreaseUpvote = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await News.findByIdAndUpdate(
      { _id: id },
      { $inc: { upvote: -1 } }
    );
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllNews,
  getNewsById, 
  postNews,
  increaseUpvote,
  decreaseUpvote
}