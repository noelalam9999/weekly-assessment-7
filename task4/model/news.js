const mongoose = require('mongoose');


const news = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
  },
  comment:[String],
  vote:{
    type: Number,
    default: 0}
});
const News = new mongoose.model('news', news);
module.exports = News;
