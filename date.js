// date.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const top = require('./stories/top');
const jantwentyeight = require('./stories/jan/jantwentyeight');
const jantwentyseven = require('./stories/jan/jantwentyseven');
const jantwentysix = require('./stories/jan/jantwentysix');
const jantwentyfive = require('./stories/jan/jantwentyfive');
const jantwentyfour = require('./stories/jan/jantwentyfour');

const storiesOne = require('./stories/storiesOne');
const storiesThree = require('./stories/storiesThree');
const storiesTwo = require('./stories/storiesTwo');

const data = [
  {
    date: "Jan 28, 2025",
    stories: [...jantwentyeight],
  },
  {
    date: "Jan 27, 2025",
    stories: [...jantwentyseven],
  },
  {
    date: "Jan 26, 2025",
    stories: [...jantwentysix],
  },
  {
    date: "Jan 25, 2025",
    stories: [...jantwentyfive],
  },
  {
    date: "Jan 24, 2025",
    stories: [...jantwentyfour],
  },
  {
    date: "Jan 23, 2025",
    stories: [...storiesThree],
  },
  {
    date: "Jan 22, 2025",
    stories: [...storiesTwo],
  },
  {
    date: "Jan 21, 2025",
    stories: [...storiesOne],
  },
];

app.get('/date', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
