/**
 * Post - Controller
 */

const Post = require('../models/post.model');

//! get all posts from database
const getAllPosts = async (req, res) => {
  try {
    const response = await Post.find({});
    res.status(200).json({
      data: response,
      msg: 'Request successful.',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};

//! get single posts from database
const getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Post.findOne({ _id: id });
    res.status(200).json({
      data: response,
      msg: 'Successfully posted.',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};

//! create a new post
const addNewPost = async (req, res) => {
  const { title, venue, date } = await req.body;
  console.log(title, venue, date);
  try {
    const newEvent = new Post(req.body);
    await newEvent.save();
    res.status(201).json({
      data: newEvent,
      msg: 'Added successfully',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};

// TODO: delete a post may not be needed
//! delete a post

const deleteSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({
      data: data,
      msg: 'Deleted',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};

//! increase vote
const increaseVoteOfAPost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.findByIdAndUpdate(
      { _id: id },
      { $inc: { votes: 1 } }
    );
    res.status(200).json({
      data: data,
      msg: 'Vote updated!',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};
//! decrease vote
const decreaseVoteOfAPost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.findByIdAndUpdate(
      { _id: id },
      { $inc: { votes: -1 } }
    );
    res.status(200).json({
      data: data,
      msg: 'Vote updated!',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Ops! something went wrong!',
    });
  }
};

module.exports = {
  getAll: getAllPosts,
  getSingle: getSinglePost,
  create: addNewPost,
  increaseVote: increaseVoteOfAPost,
  decreaseVote: decreaseVoteOfAPost,
  delete: deleteSinglePost,
};
