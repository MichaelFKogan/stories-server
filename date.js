// date.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const storiesOne = require('./stories/storiesOne');
const storiesTwo = require('./stories/storiesTwo');

const data = [
  {
    date: "Jan, 23 2025",
    stories: storiesOne,
  },
  {
    date: "Jan, 22 2025",
    stories: storiesTwo,
  },
];

app.get('/date', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
