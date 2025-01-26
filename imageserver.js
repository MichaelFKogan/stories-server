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
"https://i.imgur.com/tUNmyze.jpeg",
// "https://i.imgur.com/1HzRTxe.jpeg",
// "https://i.imgur.com/AhXX78h.jpeg",
// "https://i.imgur.com/9hx9CSw.jpeg",
// "https://i.imgur.com/aA8Kucd.jpeg",
// "https://i.imgur.com/8uNIrIk.jpeg",
// "https://i.imgur.com/JVJTZ3M.jpeg",
// "https://i.imgur.com/h6PcfhK.jpeg",
// "https://i.imgur.com/LCNSoAK.jpeg",
// "https://i.imgur.com/uCUrdaq.jpeg",
// "https://i.imgur.com/xlyabYE.jpeg",
// "https://i.imgur.com/zyxAv0P.jpeg",
// "https://i.imgur.com/gfteMh7.jpeg",
// "https://i.imgur.com/7Z59bFl.jpeg",
// "https://i.imgur.com/0H9KusF.jpeg",
// "https://i.imgur.com/U5hTwLa.jpeg",
// "https://i.imgur.com/r8XsESu.jpeg",
// "https://i.imgur.com/QN56Mck.jpeg",
// "https://i.imgur.com/EZ3dJtE.jpeg",
// "https://i.imgur.com/hN4OPfS.jpeg",
// "https://i.imgur.com/qh1NlsK.jpeg",
// "https://i.imgur.com/8iJ7Zft.jpeg",
// "https://i.imgur.com/Z1X0eDw.jpeg",
// "https://i.imgur.com/JT4KeWD.jpeg",
// "https://i.imgur.com/1qd3YSt.jpeg",
// "https://i.imgur.com/GWxFnXD.jpeg",
// "https://i.imgur.com/xiGZ8J8.jpeg",
// "https://i.imgur.com/hjAJ1In.jpeg",
// "https://i.imgur.com/31Bg4LO.jpeg",
// "https://i.imgur.com/UgalgcA.jpeg",
// "https://i.imgur.com/o91YaPt.jpeg",
// "https://i.imgur.com/RkbabSN.jpeg",
// "https://i.imgur.com/5XZVNfn.jpeg",
// "https://i.imgur.com/4uI8yRI.jpeg",
// "https://i.imgur.com/5EkNWwx.jpeg",
// "https://i.imgur.com/Ti3gLQc.jpeg",
// "https://i.imgur.com/yHWgMRM.jpeg",
// "https://i.imgur.com/D1TO9Q1.jpeg",
// "https://i.imgur.com/SPkBDYk.jpeg",
// "https://i.imgur.com/pxwXdnW.jpeg",
// "https://i.imgur.com/Ch8Ozjt.jpeg",
// "https://i.imgur.com/zg3O7Jq.jpeg",
// "https://i.imgur.com/FyHi5Ri.jpeg",
// "https://i.imgur.com/Mx5zWo2.jpeg",
// "https://i.imgur.com/T99uMCW.jpeg",
// "https://i.imgur.com/fM86sp5.jpeg",
// "https://i.imgur.com/UNs2wrZ.jpeg",
// "https://i.imgur.com/EZh1j9Q.jpeg",
// "https://i.imgur.com/Y07bmip.jpeg",
// "https://i.imgur.com/DgQvGVy.jpeg",
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

              Give me a title, genre, 1-2 sentance synopsis, and create a short story based around the image.

              The story should be a minimum of 6 paragraphs or more.

              Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.

              Write the short story with the following structure. Ensure that each section is clearly labeled:

                Title: The title of the story.
                Genre: The genre of the story (e.g., Fantasy, Sci-Fi, Horror).
                Synopsis: A brief overview of the story, summarizing the main plot.
                Short Story: The full text of the story.
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