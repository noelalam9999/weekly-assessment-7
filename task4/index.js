
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5020;
require('dotenv').config();
const mongoose = require('mongoose');

const newsRoutes = require('./routes/newsRoutes');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uiqovdn.mongodb.net/?retryWrites=true&w=majority`;

// CONNECTION
const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('db is connected');
  } catch (error) {
    console.log('db is not connected');
    console.log(error.message);
  }
};

app.listen(port, async () => {
  console.log(`api running on port ${port}`);
  await dbConnect();
});

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/', newsRoutes);
