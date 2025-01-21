// stories.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const storiesOne = require('./stories/storiesOne');
const storiesTwo = require('./stories/storiesTwo');

const stories = [
  ...storiesTwo,
  ...storiesOne,
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
