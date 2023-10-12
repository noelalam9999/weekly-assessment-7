'use strict';

const news = require('../models/news');

exports.getNews = async (req, res) => {
  try {
    const allNews = await news.getAll();
    console.log(allNews);
    res.status(200).json(allNews);
  } catch (error) {
    console.log('error:', error);
    res.sendStatus(500);
  }
};

exports.postNews = async (req, res) => {
  try {
    const newNews = await news.postOne(req.body);
    res.status(201);
    res.json(newNews);
  } catch (error) {
    console.log('error:', error);
    res.sendStatus(400);
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const singleNews = await news.getOne(id);
    console.log(singleNews);
    res.status(200).json(singleNews);
  } catch (error) {
    console.log('error:', error);
    res.sendStatus(500);
  }
};

exports.postComment = (req, res) => {
  try {
    const id = req.params.id;
    const updatedNews = news.postSingleComment(id, req.body);
    res.status(201);
    res.json(updatedNews);
  } catch (error) {
    console.log('error:', error);
    res.sendStatus(400);
  }
};

exports.postVote = (req, res) => {
  try {
    const id = req.params.id;
    const vote = req.body.vote;
    const updatedNews = news.upVoteOne({ id, vote });
    res.status(201);
    res.json(updatedNews);
  } catch (error) {
    console.log('error:', error);
    res.sendStatus(400);
  }
};
