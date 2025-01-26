// stories.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const top = require('./stories/top');
const storiesOne = require('./stories/storiesOne');
const storiesThree = require('./stories/storiesThree');
const storiesTwo = require('./stories/storiesTwo');
const jantwentyfour = require('./stories/jantwentyfour');
const jantwentyfive = require('./stories/jantwentyfive');
const jantwentysix = require('./stories/jantwentysix');
const jantwentyseven = require('./stories/jantwentyseven');

const stories = [
  // ...top,
  ...storiesTwo,
  ...storiesOne,
  ...storiesThree,
  ...jantwentyfour,
  ...jantwentyfive,
  ...jantwentysix,
  ...jantwentyseven,
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
