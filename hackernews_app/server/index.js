const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/api_router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(3000, async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/hackernews');
  console.log('Connected to DB.');
  console.log('Server is listening at http://localhost:3000');
})