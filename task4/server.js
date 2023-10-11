'use strict';

//import packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//import local packages
const connectDB = require('./config/db');
const hackerNewsRouter = require('./routes/hackerNews.route');

const app = express();
//use middlewares
app.use(cors({origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use('/api/hacker-news', hackerNewsRouter);


connectDB()
.then(() => {
  console.log(`Database connected successfully`);
  app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
  })
}).catch(error => {
  console.log(error);
})

