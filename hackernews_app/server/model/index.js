const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
  title: String,
  body: String,
  comments: [{ comment: String }],
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
  votes: { type: Number, default: 0 }
});

const Blog = model('Blog', blogSchema);

async function getALLNewsFromDB() {
  try {
    const blogPosts = await Blog.find({hidden: false}).sort({date: -1});
    return blogPosts;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function getNewsByIDFromDB(id) {
  try {
    const blogPost = await Blog.findById(id);
    return blogPost;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function postNewsToDB(title, body) {
  try {
    const result = await Blog.create({title, body});
  } catch (error) {
    console.log(error);
    return;
  }
}

async function postCommentToDB(id, comment) {
  try {
    const result = await Blog.updateOne({_id: id}, {$push: {comments: {comment}}});
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function updateVoteToDB(id) {
  try {
    const result = await Blog.updateOne({_id: id}, {$inc: {votes: 1}});
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function hideBlogPostToDB(id) {
  try {
    const result = await Blog.updateOne({_id: id}, {hidden: true});
    return result;
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = {
  getALLNewsFromDB,
  getNewsByIDFromDB,
  postNewsToDB,
  postCommentToDB,
  updateVoteToDB,
  hideBlogPostToDB
}