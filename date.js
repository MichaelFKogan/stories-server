// date.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const top = require('./stories/top');
// const storiesOne = require('./stories/storiesOne');
// const storiesThree = require('./stories/storiesThree');
const storiesTwo = require('./stories/storiesTwo');

const stories = [
  // ...top,
  // ...storiesOne,
  // ...storiesThree,
  ...storiesTwo,
];

app.get('/date', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
