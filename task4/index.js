const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/hackerNews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(cors());
app.use(bodyParser.json());

const newsRoutes = require('./routes/newsRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/news', newsRoutes);
app.use('/comments', commentRoutes);

app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500).json({ error: error.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});