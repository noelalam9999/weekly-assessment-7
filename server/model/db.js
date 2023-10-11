"user strict";

//define the schema
const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },

  comment: {
    type: String,
  },

  timestamps: {
    type: Date,
    default: Date.now,
  },
});
const News = mongoose.model("News", NewsSchema); //create a model
