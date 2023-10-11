const { getALLNewsFromDB, getNewsByIDFromDB, postNewsToDB, postCommentToDB, updateVoteToDB, hideBlogPostToDB } = require('../model');

async function getAllNews(req, res) {
  try {
    const results = await getALLNewsFromDB();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
}

async function getNewsById(req, res) {
  try {
    const { id } = req.params;
    const results = await getNewsByIDFromDB(id);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
}

async function postNews(req, res) {
  try {
    const { title, body } = req.body;
    if (title && body) {
      await postNewsToDB(title, body);
      res.status(201);
      res.send();
    } else {
      res.status(400);
      res.json({error: 'Bad request! Please send title and body as request body.'})
    }
  } catch (error) {
    console.log(error);
  }
}

async function postComment(req, res) {
  try {
    const { id, comment } = req.body;
    if (id && comment) {
      await postCommentToDB(id, comment);
      res.status(201)
      res.send();
    } else {
      res.status(400);
      res.json({error: 'Bad request! please provide id and comment'});
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateVote(req, res) {
  try {
    const { id } = req.params;
    await updateVoteToDB(id);
    res.status(201)
    res.send();
  } catch (error) {
    console.log(error);
  }
}

async function hideBlogPost(req, res) {
  try {
    const { id } = req.params;
    await hideBlogPostToDB(id);
    res.status(201)
    res.send();
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getAllNews,
  getNewsById,
  postNews,
  postComment,
  updateVote,
  hideBlogPost
}