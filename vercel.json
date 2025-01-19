const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const stories = [
  {
    title: "AI Journey: The Girl Who Knew Too Much",
    genre: "Cyberpunk",
    url: "https://i.imgur.com/OwaspL1.jpeg",
    story: "... This is the first story"
  },
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
