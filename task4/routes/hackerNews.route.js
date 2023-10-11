'use strict';
//bring in express router
const express = require('express');
const router = express.Router();
//will bring in controller
const { getAllNews, getNewsById, postNews } = require('../controllers/hackerNews.controller');

//specified action routes
router.get('/', getAllNews);
router.get('/:id', getNewsById);
router.post('/', postNews);




//catch-all routes
router.get('**', (req, res) => {
  res.status(404).send('Page Not Found!')
})
module.exports = router;
