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
    "https://i.imgur.com/DgQvGVy.jpg",
    // Add more image URLs here
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));








const generateOutline = async (imageUrl) => {
    console.log(`Generating outline for image: ${imageUrl}`);

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `Analyze this image and create a detailed outline for a short story. The outline should include:
                        - **Title**
                        - **Genre**
                        - **Synopsis**
                        - **Main character introduction**
                        - **Story beats (beginning, middle, and end)**
                        - **Key conflicts and resolutions**
                        - **Setting details**
                        - **Supporting characters (if any)**
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









const expandStorySection = async (outline, sectionTitle) => {
    console.log(`Expanding section: ${sectionTitle}`);

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: `Based on the following outline, write a fully detailed version of the section **${sectionTitle}**:
                
                ${outline}

                Ensure the section is detailed, engaging, and flows naturally into the rest of the story.`,
            },
        ],
    });

    return response.choices[0].message.content.trim();
};










const generateStory = async (imageUrl) => {
    try {
        const outline = await generateOutline(imageUrl);

        const sections = [
            "Main character introduction",
            "Beginning",
            "Middle",
            "End",
            "Resolution",
        ];

        let finalStory = `\nImage: ${imageUrl}\n\nOutline:\n${outline}\n\n`;

        for (const section of sections) {
            const expandedSection = await expandStorySection(outline, section);
            finalStory += `\n### ${section} ###\n${expandedSection}\n`;
            await sleep(2000);
        }

        fs.appendFileSync(outputFile, finalStory + "\n\n", "utf8");

        console.log(`Story for ${imageUrl} saved successfully!`);
    } catch (error) {
        console.error("Error:", error);
    }
};







(async () => {
    for (const imageUrl of imageUrls) {
        await generateStory(imageUrl);
        await sleep(5000);
    }
    console.log("PROCESS COMPLETE");
})();
