const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const storiesOne = require('./stories/storiesOne');
// const storiesTwo = require('./stories/storiesTwo');

const stories = [
  ...storiesOne,
  // ...storiesTwo
];

app.get('/stories', (req, res) => {
  res.type('application/javascript');
  res.send(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
