'use strict';

const mongoose = require('mongoose');
//creating schema with timestamps for sorting by date later
const News = mongoose.model('News', new mongoose.Schema({
  title: {type: String, required: true},
  url: {type: String, required: true},
  upvote: {type: Number, default: 0}
},{timestamps:true}));

module.exports = News;