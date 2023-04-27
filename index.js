const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const categories = require("./categories/categories.json");
const news = require("./news/news.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello I am working");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryNews = news.filter((nw) => nw.category_id === id);
  res.send(categoryNews);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const singleNews = news.find((nw) => nw._id === id);
  res.send(singleNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
