const express = require("express");
const cors = require('cors');
require('./config/db');
const route = require("./routes/route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(route)

module.exports = app;
