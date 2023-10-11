const { model } = require("mongoose");

const News = model("News", {
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [String],
  },
});

async function getAll() {
  try {
    const allNews = await News.find();
    return allNews;
  } catch (error) {
    console.log(error);
  }
}

async function postOne(news) {
  try {
    const data = await News.create(news);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function updateOne(id, updatedNews) {
  try {
    const updated = await News.findByIdAndUpdate(id, updatedNews, {
      new: true,
    });
    return updated;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, postOne, updateOne };
