

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const storiesOne = require('./stories/storiesOne');
const storiesTwo = require('./stories/storiesTwo');

const stories = [
  // ...storiesTwo,
  ...storiesOne
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});








// import OpenAI from "openai";
// import dotenv from "dotenv";
// import fs from "fs/promises";  // Using fs.promises for async/await
// import path from "path";

// dotenv.config(); // Load environment variables from .env file

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set up
// });

// const generateStory = async () => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // Replace with the correct model name
//       messages: [
//         {
//           role: "user",
//           content: `
//             Analyze this image from Midjourney with the purpose of creating a short story.
//             Give me a title, genre, 1-2 sentence synopsis, and create a short story based around the image.
//             Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.
//           `,
//         },
//         {
//           type: "image_url",
//           image_url: { url: "https://i.imgur.com/0KtqRbu.jpeg" },
//         },
//       ],
//     });

//     const storyContent = response.choices[0].message.content;
//     console.log(storyContent);

//     const storyData = {
//       title: "Generated Story Title", // You can customize how to parse the title from the response
//       genre: "Generated Genre", // Similarly, extract or set the genre from the response
//       synopsis: "Generated synopsis...", // You can extract a synopsis if it's provided in the response
//       url: "", // Provide any URL if applicable
//       story: storyContent,
//     };

//     return storyData;
//   } catch (error) {
//     console.error("Error generating story:", error);
//   }
// };

// const saveStoryToFile = async (storyData) => {
//   const storiesTwoPath = path.join(__dirname, 'stories', 'storiesTwo.js');

//   try {
//     // Read the current content of storiesTwo.js
//     const data = await fs.readFile(storiesTwoPath, 'utf8');
//     console.log("Current content of storiesTwo.js:", data); // Log content for debugging

//     const storiesTwo = JSON.parse(data); // Assuming the file exports a JSON array

//     // Prepend the new story to the stories array
//     storiesTwo.unshift(storyData);

//     // Write the updated content back to storiesTwo.js
//     const updatedContent = `const storiesTwo = ${JSON.stringify(storiesTwo, null, 2)};\n\nexport default storiesTwo;`;
//     await fs.writeFile(storiesTwoPath, updatedContent, 'utf8');
//     console.log("Story added to storiesTwo.js");
//   } catch (err) {
//     console.error("Error reading or writing to storiesTwo.js:", err);
//   }
// };


// // Express server setup
// import express from "express";
// const app = express();
// const port = process.env.PORT || 3000;

// import { storiesOne } from './stories/storiesOne.js'; // Assuming you're using ES module import syntax

// const stories = [
//   ...storiesOne,
// ];

// app.get('/stories', async (req, res) => {
//   const storyData = await generateStory();
//   if (storyData) {
//     await saveStoryToFile(storyData); // Wait until the story is saved before responding
//   }
//   res.json(stories);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
