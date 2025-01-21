// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from .env file

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set up
// });

// (async () => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // Replace with the correct model name
//       messages: [
//         {
//           role: "user",
//           content: [
//             { type: "text", text: `

//               Analyze this image from Midjourney with the purpose of creating a short story.

//               Give me a title, genre, 1-2 senence synopsis, and create a short story based around the image.

//               Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.

//             ` },
//             {
//               type: "image_url",
//               image_url: { url: "https://i.imgur.com/HaHNLGK.jpg" },
//             },
//           ],
//         },
//       ],
//     });

//     console.log(response.choices[0].message.content);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();







const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set up
});

(async () => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Replace with the correct model name
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: `
              Analyze this image from Midjourney with the purpose of creating a short story.

              Give me a title, genre, 1-2 senence synopsis, and create a short story based around the image.

              Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.
            ` },
            {
              type: "image_url",
              image_url: { url: "https://i.imgur.com/ygFdEOY.jpg" },
            },
          ],
        },
      ],
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
})();
