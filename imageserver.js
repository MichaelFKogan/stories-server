const OpenAI = require("openai");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config(); // Load environment variables from .env file

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set up
});

// File to save the results
const outputFile = path.join(__dirname, "stories", "new.js");

const removeMarkdown = (text) => {
    // Remove bold (**)
    text = text.replace(/\*\*(.*?)\*\*/g, '$1');
    // Remove italic (*)
    text = text.replace(/\*(.*?)\*/g, '$1');
    // Remove headers (###, ##, #)
    text = text.replace(/^#{1,6}\s*(.*?)$/gm, '$1');
    // Remove horizontal lines (---, ***, ===)
    text = text.replace(/^\s*[-=*]{3,}\s*$/gm, '');
    // Remove code blocks (```)
    text = text.replace(/```[\s\S]*?```/g, '');
    // Remove inline code (`)
    text = text.replace(/`(.*?)`/g, '$1');
    // Remove links [text](url)
    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
    // Remove blockquotes (>)
    text = text.replace(/^>\s?/gm, '');
    // Remove lists (-, *, 1.)
    text = text.replace(/^\s*[-*]?\s*\d*\.\s?/gm, '');
    return text;
};

const imageUrls = [
// "https://i.imgur.com/W397xLR.jpeg",
// "https://i.imgur.com/shqCrOl.jpeg",
// "https://i.imgur.com/66SbEQR.jpeg",
// "https://i.imgur.com/uegPxml.jpeg",
// "https://i.imgur.com/kVYD4Wf.jpeg",
// "https://i.imgur.com/8TrguHp.jpeg",
// "https://i.imgur.com/YXt3l97.jpeg",
// "https://i.imgur.com/YAKPhF7.jpeg",
// "https://i.imgur.com/9HYPYtq.jpeg",
// "https://i.imgur.com/LKklEyD.jpeg",
// "https://i.imgur.com/nbJ12km.jpeg",
// "https://i.imgur.com/ar78fla.jpeg",
// "https://i.imgur.com/OVPjxTE.jpeg",
// "https://i.imgur.com/HiCbCuC.jpeg",
// "https://i.imgur.com/6qFXjDo.jpeg",
// "https://i.imgur.com/yRkxdIX.jpeg",
// "https://i.imgur.com/BRi2G12.jpeg",
// "https://i.imgur.com/5YFWkHB.jpeg",
// "https://i.imgur.com/5msGqsB.jpeg",
// "https://i.imgur.com/LzRSeOV.jpeg",
// "https://i.imgur.com/CzdBOUI.jpeg",
// "https://i.imgur.com/1hpZr7U.jpeg",
// "https://i.imgur.com/2R9r0r6.jpeg",
// "https://i.imgur.com/FrHr0gP.jpeg",
// "https://i.imgur.com/7kilubw.jpeg",
// "https://i.imgur.com/RzAyIkX.jpeg",
// "https://i.imgur.com/KRCjSmY.jpeg",
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const failedImages = []; 

const processImage = async (imageUrl) => {
            try {
                // const imageUrl = "https://i.imgur.com/BlgKiqz.jpg";
                console.log(`Running Image ${imageUrl}`); 

                const response = await openai.chat.completions.create({
                    model: "gpt-4o-mini", // Replace with the correct model name
                    messages: [{
                        role: "user",
                        content: [
                            { type: "text", text: `
              Analyze this image from Midjourney with the purpose of creating a short story.

              Give me a title, genre, 1-2 sentence synopsis, and create a short story based around the image.

              Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.
            ` },
                            {
                                type: "image_url",
                                image_url: { url: imageUrl },
                            },
                        ],
                    }, ],
                });

                // console.log("Full API response:", response);

                const newResponse = response.choices[0].message.content;
                const cleanedResponse = removeMarkdown(newResponse);
                // console.log("Cleaned Response:", cleanedResponse);

                if (!cleanedResponse || !cleanedResponse.trim()) {
                    console.error("Empty response received from the API.");
                    return;
                }

                // Extract components from the cleaned response
                const match = cleanedResponse.match(
                    /Title:\s*(.*?)\s*Genre:\s*(.*?)\s*Synopsis:\s*(.*?)\s*Short Story:([\s\S]+)/
                );


                if (match) {
                    const [_, title, genre, synopsis, story] = match;

                    // Clean the title (remove quotes and markdown)
                    const cleanedTitle = title.trim().replace(/^"|"$/g, '').replace(/[*_~`]/g, '');

                    // Log the title completion
                    console.log(`Title Complete: ${cleanedTitle}`);

                    // Format the result
                    const formattedResult = `
                        {
                          title: "${cleanedTitle.trim()}",
                          genre: "${genre.trim()}",
                          synopsis: "${synopsis.trim()}",
                          url: "${imageUrl}",
                          story: \`
                    ${story.trim()}
                          \`,
                        },`;


                    // console.log("Formatted Result:", formattedResult);



                    // Prepend the result to the file
                    const existingContent = fs.existsSync(outputFile) ?
                        fs.readFileSync(outputFile, "utf8") :
                        "";
                    const newContent = `${formattedResult}\n${existingContent}`;

                    // Save to file
                    fs.writeFileSync(outputFile, newContent, "utf8");



                    console.log("Response saved successfully!");
                } else {
                    console.error("Failed to parse the response. Please check the API output.");
                    failedImages.push(imageUrl); // Add to failed list
                }
            } catch (error) {
                console.error("Error:", error);
                failedImages.push(imageUrl); // Add to failed list
            }
          };

            // Loop through the image URLs
            (async () => {
                for (const imageUrl of imageUrls) {
                    await processImage(imageUrl);
                    await sleep(5000);
                }

                console.log("Initial processing complete. Retrying failed images...");

                for (const imageUrl of failedImages) {
                    await processImage(imageUrl);
                    await sleep(5000);
                }

                console.log("PROCESS COMPLETE");
            })();








            // const OpenAI = require("openai");
            // const dotenv = require("dotenv");

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
            //               image_url: { url: "https://i.imgur.com/UL6GWrD.jpg" },
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