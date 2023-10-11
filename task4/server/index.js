const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { getNews, postNews, updateNews } = require("./controllers/index");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.get("/news", getNews);
app.post("/news", postNews);
app.put("/news/:id", updateNews);

(async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/news", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB.");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
