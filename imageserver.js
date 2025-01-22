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
// "https://i.imgur.com/npuGyKd.jpeg",
// "https://i.imgur.com/A6JqnEJ.jpeg",
"https://i.imgur.com/XTNpih0.jpeg",
// "https://i.imgur.com/i9SekWv.jpeg",
// "https://i.imgur.com/ypgjNZD.jpeg",
// "https://i.imgur.com/55zsWCk.jpeg",
// "https://i.imgur.com/E1HSO8W.jpeg",
// "https://i.imgur.com/tBSoT4D.jpeg",
// "https://i.imgur.com/jvovlgl.jpeg",
// "https://i.imgur.com/a1wZmC0.jpeg",
// "https://i.imgur.com/Pt5vp4a.jpeg",
// "https://i.imgur.com/345LXPa.jpeg",
// "https://i.imgur.com/YOMyemx.jpeg",
// "https://i.imgur.com/1D38eki.jpeg",
// "https://i.imgur.com/O18sc79.jpeg",
// "https://i.imgur.com/C0TnQVy.jpeg",
// "https://i.imgur.com/JlhDaXM.jpeg",
// "https://i.imgur.com/dLGJbO4.jpeg",
// "https://i.imgur.com/s5oWzQV.jpeg",
// "https://i.imgur.com/JHhCwqn.jpeg",
// "https://i.imgur.com/V0b5Ai8.jpeg",
// "https://i.imgur.com/f0dfI54.jpeg",
// "https://i.imgur.com/sltKDwS.jpeg",
// "https://i.imgur.com/HwP8pQa.jpeg",
// "https://i.imgur.com/VqXCG8z.jpeg",
// "https://i.imgur.com/L7h1mMu.jpeg",
"https://i.imgur.com/f7ByqPP.jpeg",

];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

              Give me a title, genre, 1-2 senence synopsis, and create a short story based around the image.

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
                }
            } catch (error) {
                console.error("Error:", error);
            }
          };

            // Loop through the image URLs
            (async () => {
                for (const imageUrl of imageUrls) {
                    await processImage(imageUrl);
                    await sleep(5000); // Wait for the API call to finish before moving to the next image
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