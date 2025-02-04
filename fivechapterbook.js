const OpenAI = require("openai");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

const outputFile = path.join(__dirname, "stories", "new.js");

const imageUrls = [
    "https://i.imgur.com/UBssNLo.jpeg",
    // Add more image URLs here
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));





/**
 * Generate a full book (5 chapters) based on an image.
 */
const generateBook = async (imageUrl) => {
    try {


        const outline = await generateOutline(imageUrl);
        const chapterSummaries = []; // Store previous chapter summaries

        let finalBook = `\nImage: ${imageUrl}\n\nOutline:\n${outline}\n\n`;

        for (let i = 1; i <= 5; i++) {
            const chapterText = await generateChapter(outline, i, chapterSummaries);
            finalBook += `\n${chapterText}\n`;

            // Summarize this chapter and store it for continuity
            const summary = await summarizeChapter(chapterText, i);
            chapterSummaries.push(`Chapter ${i} Summary: ${summary}`);

            await sleep(2000); // Prevent API rate limiting
        }

        fs.appendFileSync(outputFile, finalBook + "\n\n", "utf8");

        console.log(`Book for ${imageUrl} saved successfully!`);
    } catch (error) {
        console.error("Error:", error);
    }
};










/**
 * Generate a detailed book outline from an image.
 */
const generateOutline = async (imageUrl) => {
    // console.log(`Generating outline for image: ${imageUrl}`);

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `
                        Analyze this image from Midjourney with the purpose of creating a story, and create a detailed outline for a 5-chapter book. 
                        The outline should include a title, genre, 1-2 sentance synopsis, and create a short story based around the image.
                        Take into account the photo's background, the character, the character's activity, and other characters, when putting the story into context.
                        Write the short story with the following structure. Ensure that each section is clearly labeled:

                        title: "The title of the story.",
                        genre: "The genre of the story (e.g., Fantasy, Sci-Fi, Horror).",
                        synopsis: "A brief overview of the story, summarizing the main plot.".
                        storyDeatils:"
                            Main Characters: (with descriptions & motivations)
                            Setting Details:

                            Chapter Breakdown: (with a summary of what happens in each chapter)
                            Key conflicts & Resolutions:
                        "
                        `,
                    },
                    { type: "image_url", image_url: { url: imageUrl } },
                ],
            },
        ],
    });

    const outline = response.choices[0].message.content.trim();
    console.log("Outline generated successfully!");
    return outline;
};






/**
 * Generate a full chapter while maintaining continuity.
 */
const generateChapter = async (outline, chapterNumber, previousChapterSummaries) => {
    // console.log(`Generating Chapter ${chapterNumber}...`);

    let chapterPrompt = `Based on the following book outline, write Chapter ${chapterNumber} of the book:\n\n${outline}`;

    if (previousChapterSummaries.length > 0) {
        chapterPrompt += `\n\nHere is what has happened so far:\n${previousChapterSummaries.join("\n\n")}\n\nContinue from this point, ensuring consistency with the previous chapters.`;
    }

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: chapterPrompt,
            },
        ],
    });

    return response.choices[0].message.content.trim();
};







/**
 * Summarize a chapter to maintain continuity without exceeding token limits.
 */
const summarizeChapter = async (chapterText, chapterNumber) => {
    console.log(`Summarizing Chapter ${chapterNumber}...`);

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: `Summarize Chapter ${chapterNumber} in 3-5 sentences, keeping the main events and character developments.`,
            },
            {
                role: "assistant",
                content: chapterText,
            },
        ],
    });

    return response.choices[0].message.content.trim();
};





/**
 * Loop through all images and generate books.
 */
(async () => {
    for (const imageUrl of imageUrls) {
        await generateBook(imageUrl);
        await sleep(5000);
    }
    console.log("PROCESS COMPLETE");
})();