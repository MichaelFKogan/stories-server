// date.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const top = require('./stories/top');
const storiesOne = require('./stories/jan24');
const storiesOne = require('./stories/storiesOne');
const storiesThree = require('./stories/storiesThree');
const storiesTwo = require('./stories/storiesTwo');

const data = [
    {
    date: "Jan, 24 2025",
    stories: [...jan24],
  },
  {
    date: "Jan, 23 2025",
    stories: [...storiesThree],
  },
  {
    date: "Jan, 22 2025",
    stories: [...storiesTwo],
  },
  {
    date: "Jan, 21 2025",
    stories: [...storiesOne],
  },
];

app.get('/date', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
