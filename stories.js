// stories.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const top = require('./stories/top');

const free = require('./stories/free');
// const fivechapters = require('./stories/fivechapters');


const storiesOne = require('./stories/storiesOne');
const storiesThree = require('./stories/storiesThree');
const storiesTwo = require('./stories/storiesTwo');

const jantwentyfour = require('./stories/jan/jantwentyfour');
const jantwentyfive = require('./stories/jan/jantwentyfive');
const jantwentysix = require('./stories/jan/jantwentysix');
const jantwentyseven = require('./stories/jan/jantwentyseven');
const jantwentyeight = require('./stories/jan/jantwentyeight');

const stories = [
  // ...top,

  ...free,
  // ...fivechapters,

  ...storiesTwo,
  ...storiesOne,
  ...storiesThree,
  ...jantwentyfour,
  ...jantwentyfive,
  ...jantwentysix,
  ...jantwentyseven,
  ...jantwentyeight,
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
