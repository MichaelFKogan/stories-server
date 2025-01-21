const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const storiesOne = require('./stories/storiesOne');
// const fantasyStories = require('./stories/fantasy');

const stories = [
  ...storiesOne,
  // ...fantasyStories
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
