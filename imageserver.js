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
"https://i.imgur.com/FRJn14Q.jpeg",
"https://i.imgur.com/wqfDppr.jpeg",
"https://i.imgur.com/iREGbKQ.jpeg",
"https://i.imgur.com/cSpJylX.jpeg",
"https://i.imgur.com/2PZoqqe.jpeg",
"https://i.imgur.com/uMXfsBa.jpeg",
"https://i.imgur.com/xjIrZbM.jpeg",
"https://i.imgur.com/TNy4WkX.jpeg",
"https://i.imgur.com/WuVtUw6.jpeg",
"https://i.imgur.com/iEUMOzX.jpeg",
"https://i.imgur.com/uePI7Uo.jpeg",
"https://i.imgur.com/YKh6ZT4.jpeg",
"https://i.imgur.com/y8VyEQm.jpeg",
"https://i.imgur.com/pAvxKb2.jpeg",
"https://i.imgur.com/O3Tnga9.jpeg",
"https://i.imgur.com/KIwLAwf.jpeg",
"https://i.imgur.com/wjxJZaq.jpeg",
"https://i.imgur.com/nR7d5GV.jpeg",
"https://i.imgur.com/iFGda1h.jpeg",
"https://i.imgur.com/bVGeVIe.jpeg",
"https://i.imgur.com/PW1P9q1.jpeg",
"https://i.imgur.com/oC787MC.jpeg",
"https://i.imgur.com/gCNblho.jpeg",
"https://i.imgur.com/4ubT3PC.jpeg",
"https://i.imgur.com/tMsZJ6t.jpeg",
"https://i.imgur.com/uJKG1n7.jpeg",
"https://i.imgur.com/6g0IubD.jpeg",
"https://i.imgur.com/BbpjS8N.jpeg",
"https://i.imgur.com/FKumNYg.jpeg",
"https://i.imgur.com/7oEzASS.jpeg",
"https://i.imgur.com/FdjiW7G.jpeg",
"https://i.imgur.com/2tfmboi.jpeg",
"https://i.imgur.com/ERMUJuE.jpeg",
"https://i.imgur.com/DX9AwvY.jpeg",
"https://i.imgur.com/VzVBMS8.jpeg",
"https://i.imgur.com/pW4ZxON.jpeg",
"https://i.imgur.com/MJ5OIep.jpeg",
"https://i.imgur.com/dj1kHpL.jpeg",
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

              Give me a title, genre, 1-2 sentence synopsis, and create a story based around the image.

              Take into account the photo's background, the character, the character's activity, and other characters, when putting the short story into context.

              Also make sure the short story has either a good ending, a unique ending, or a plot twist ending.
            ` },
                            {
                                type: "image_url",
                                image_url: { url: imageUrl },
                            },
                        ],
                    }, ],
                });

                console.log("Full API response:", response);
                console.log("Full API response:", JSON.stringify(response, null, 2));

                const newResponse = response.choices[0].message.content;
                const cleanedResponse = removeMarkdown(newResponse);
                // console.log("Cleaned Response:", cleanedResponse);

                if (!cleanedResponse || !cleanedResponse.trim()) {
                    console.error("Empty response received from the API.");
                    failedImages.push(imageUrl); // Add to failed list
                    return;
                }

                // Extract components from the cleaned response
                const match = cleanedResponse.match(
                    /Title:\s*(.*?)\s*Genre:\s*(.*?)\s*Synopsis:\s*(.*?)\s*Story:([\s\S]+)/
                );

                if (!match) {
                    console.error("Failed to parse response content. Cleaned response:", cleanedResponse);
                    failedImages.push(imageUrl);
                    return;
                

                const [, title, genre, synopsis, story] = match;
                console.log("Parsed response successfully:", { title, genre, synopsis, story });


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