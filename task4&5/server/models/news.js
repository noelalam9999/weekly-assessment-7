const { model, Schema } = require('mongoose');

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  votes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      content: { type: String, required: true },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const News = model('News', newsSchema);

async function getAll() {
  try {
    const allNews = await News.find({});
    // console.log(events);
    return allNews;
  } catch (error) {
    console.log(error);
  }
}

async function postOne(news) {
  try {
    const newNews = await News.create(news);
    return newNews;
  } catch (error) {
    console.log(error);
  }
}

async function getOne(id) {
  try {
    const singleNews = await News.findById(id).exec();
    // console.log(events);
    return singleNews;
  } catch (error) {
    console.log(error);
  }
}

async function postSingleComment(id, comment) {
  try {
    const foundNews = await News.findById(id).exec();
    foundNews.comments = [...foundNews.comments, comment];
    const updatedNews = await foundNews.save();
    return updatedNews;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, postOne, getOne, postSingleComment };
