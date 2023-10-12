'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router.js');

const app = express();
const PORT = 4000;
const options = {
  origin: '*',
};

// middlewares
app.use(express.json());
app.use(cors(options));
app.use(router);

const serverFunc = async function () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hackerNews_db');
    console.log('Connected to DB.');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverFunc();
