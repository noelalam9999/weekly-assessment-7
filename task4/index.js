/**
 * Server entry point
 */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URL;

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/posts', require('./routes/post.route'));
app.use('/*', require('./routes/error.route'));

// connect to mongodb
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to mongodb'))
  .then(() =>
    // Server listening port
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error.message));
