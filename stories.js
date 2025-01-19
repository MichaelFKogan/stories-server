const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const stories = [
  {
    title: "The Lighthouse Keeper's Secret",
    genre: "Fiction",
    url: "https://i.imgur.com/OwaspL1.jpeg",
    story: `
      On the edge of the world, where the cliffs kissed the restless sea, stood a solitary lighthouse. It had weathered countless storms and guided countless sailors to safety. Inside, an aging keeper named Elias tended to its glow. He had spent thirty years in the tower, the sound of crashing waves his only companion.
      
      Elias was a man of habit. Every morning, he polished the glass lenses, wound the clockwork mechanism, and recorded weather patterns in a battered logbook. But at night, when the world was cloaked in darkness, he worked on something far more peculiar.
      
      In the room beneath the light, Elias kept an ancient wooden chest, its iron lock rusted from the salt air. Inside were shards of broken mirrors, pieces of glass that shimmered faintly even without light. These shards were remnants of a secret only Elias knew—a mirror that reflected not the present but the past.
      
      Years ago, before his isolation, Elias had been a sailor. One fateful night, his ship was pulled into a storm so fierce it tore the heavens apart. Desperate to survive, Elias and his crew stumbled upon the mirror, buried in the wreck of another vessel. When Elias looked into it, he saw a memory—a moment he’d lost long ago, of a woman’s face and her laughter. She had been his wife before the sea had stolen her away.
      
      The mirror broke when they tried to bring it aboard, shattering into pieces. The shards washed ashore, scattered across the coast, but Elias found them over the years, one by one.
      
      Each night, he worked to reassemble the mirror, hoping to glimpse her again. He whispered apologies as he fit the jagged edges together, his fingers cut and calloused. “Just one more moment,” he’d murmur.
      
      One stormy evening, as lightning split the sky and waves pounded the cliffs, Elias placed the final shard. The mirror flared to life, casting the room in an eerie glow. When Elias looked into it, he saw her, standing on the beach, her hair wild in the wind, her eyes filled with love.
      
      One stormy evening, as lightning split the sky and waves pounded the cliffs, Elias placed the final shard. The mirror flared to life, casting the room in an eerie glow. When Elias looked into it, he saw her, standing on the beach, her hair wild in the wind, her eyes filled with love.

      “Elias,” she whispered, her voice carrying through the glass.

      Tears welled in Elias's eyes. His breath caught in his throat. After so many years, he was finally seeing her again, her image more vivid than he ever imagined. "Lena... it's really you." Tears streamed down his face. “I’ve missed you so much.”

      She smiled, but there was something wrong—something cold in the depths of her eyes that hadn't been there before. Elias reached out, his fingers trembling, and as he did, he noticed the air around him growing unnaturally cold, the flickering candlelight casting twisted shadows.

      "Lena, come back to me," he whispered. "I can bring you back. We can leave this place together."

      But as his fingers brushed the surface of the mirror, the reflection of her began to distort. The sky behind her darkened further, and the sound of waves crashing grew more violent, like an animal thrashing in a fury. Her face began to twist, her eyes widening in unnatural horror.

      "No, Elias... You shouldn't have," she whispered, her voice now rasping with a hollow, otherworldly tone. Her form began to flicker, like a candle in the wind. "I never left. I've been waiting... waiting for you to finish the mirror. To finish what you started."

      Suddenly, her hands reached through the mirror, cold and clammy, grabbing him with an iron grip. Elias tried to pull away, but her fingers held him with a strength he couldn't resist. His chest tightened as the room seemed to grow darker still, the wind howling as if the sea itself had come for him.

      "You brought me back," she said, her voice no longer her own, now a chorus of whispers that echoed from all directions. "But not as I was."

      The mirror shattered with a violent crack, its shards scattering across the room. For a moment, Elias felt the grip of the sea, pulling him into the darkness. The room blurred, and he was drowning, surrounded by her cold, familiar touch, but something else—something ancient and malignant—lingered in her presence.

      And then, there was nothing.

      When the storm subsided, the lighthouse was silent. The light shone steadily, as it always had. But inside the keeper's quarters, the air was heavy with a strange, suffocating chill.

      The chest lay open. The shards of the mirror were gone, scattered into the night, lost to the sea. Elias was never seen again.

      Some say he still walks the cliffs, a shadow on the edge of the world, searching for the wife he thought he had brought back. But the sea does not give back what it has taken. It only takes more.

    `
  },
  {
    title: "Neon Paws",
    genre: "Cyberpunk / Science Fiction",
    url: "https://i.imgur.com/zn8nxHe.jpeg",
    story: `
      In the neon-lit streets of Neo-Tokyo, where towering skyscrapers blocked out the stars and holographic billboards painted the sky in hues of electric blue and magenta, there was a small cat named Kairo. His fur, sleek and black as the shadows that danced in alleyways, blended effortlessly into the city’s nighttime landscape. His eyes, however, shone with an iridescent glow — not entirely natural, a gift from the cybernetic enhancements that ran through his veins.

        Kairo wasn’t just any ordinary cat. In a world of artificial intelligence and rampant genetic modification, he had been transformed from a simple alley stray into an advanced companion, a companion with memories and instincts encoded into his augmented body. His creator, a disillusioned hacker named Ryo, had designed him not only to be a pet but also a tool for surveillance and espionage.

        Tonight, Kairo was on a mission.

        Slipping through the maze of glowing streets and into the heart of the city's underworld, he crept silently, his enhanced paws making no sound against the metallic pavement. His destination: the Central Nexus, where the most influential minds of the corporate world traded secrets, and where the black market dealt in data, dreams, and codes.

        Ryo had given him a single command: retrieve the data chip. It contained the key to the city’s most valuable project — an artificial intelligence that could predict human behavior. Kairo wasn’t sure what Ryo wanted with it, but the hacker’s cold eyes had made it clear that refusal was not an option.

        Kairo reached the heavily guarded building, his cybernetic limbs adapting to the sleek architecture, scaling walls and dodging sensors with ease. Inside, the hum of machinery and the flicker of neon lights felt strangely alive. He could hear the faint clicks of the guards’ footsteps and the whispered conversations between shadowy figures in dark corners.

        With a swift leap, Kairo landed on a high platform where the chip was kept under a glass case. His sensors activated, and he scanned the room for threats. In seconds, he bypassed the security system, the glass case opening silently as if it had never been locked at all.

        The chip was cold and metallic in his mouth, a perfect fit between his teeth. He turned, poised to leave, but a sudden sound made him freeze. A pair of glowing eyes appeared in the shadows — not human, not robotic, but a hybrid. Another creation of the city's ruthless tech giants.

        The creature moved with inhuman speed, its glowing limbs extending as it lunged toward Kairo. But the cat, faster and more agile than any machine, darted into the shadows, his enhanced senses calculating every movement ahead of time.

        A chase ensued through the labyrinth of the Nexus, Kairo darting through corridors, flipping over obstacles, his heart beating fast but steady. The other creature was close, but Kairo knew the city’s dark alleys better than anyone.

        With a final, daring jump, Kairo leapt onto a hovering transport, and in one smooth motion, he disappeared into the night sky. Below, the Central Nexus was nothing more than a blur of lights.

        Kairo landed softly on a rooftop, the neon glow reflecting off the chip in his mouth. The mission was complete. As he made his way back to Ryo’s hidden lair, the city stretched out beneath him — a tangled mess of light, darkness, and possibilities.

        In this world of wires and dreams, Kairo was more than a cat. He was the pulse of something greater, an agent in the quiet war between humanity and the machines that shaped their destiny. And he would continue to walk between the two worlds, his paws leaving no trace in the digital streets.
    `
  },
  {
    title: "The Last Train",
    genre: "Cyberpunk",
    url: "https://i.imgur.com/UoPpVKw.jpeg",
    story: `
      Lena had always been an early riser. The train station was mostly empty at 5:45 AM, with only a few commuters scattered around, staring blankly at the tracks. She sat on the bench, the quiet hum of the waiting train filling the air.

      As the train approached, Lena noticed a man standing at the far end of the platform. He was wearing a long coat, the kind that looked too heavy for the mild autumn morning. His dark eyes flicked to her as the train slowed to a stop.

      She didn’t think much of it. It was a Monday, and she was too tired to engage in any small talk.

      As she boarded the train, she found an empty seat by the window and gazed out at the city as it passed by. The world outside was a blur of early morning fog and the faint glow of streetlights still flickering in the dim light.

      The train jolted, and Lena looked up. The man from the platform had followed her into the car. He stood in the aisle, his eyes fixed on her.

      "Excuse me," he said, his voice low and urgent. "Do you remember me?"

      Lena stared at him, trying to place him. She didn't recognize him at all.

      "I'm sorry, I don't think we’ve met," she replied, her heart starting to race.

      The man hesitated for a moment, then sat down across from her. He leaned in slightly, his gaze never wavering.

      "I know this is going to sound strange, but... you saved me once. You don't remember? It was years ago, at this very station."

      Lena frowned. "I’ve never seen you before in my life."

      The man’s face twitched as if fighting an emotion. “But you did. You helped me off the tracks. I was about to jump... you pulled me back. You said everything would be okay."

      Lena felt a chill crawl up her spine. She had heard of people having near-death experiences, but this... this was something different. "I don’t—"

      Before she could finish, the train shook violently, and the lights flickered. Then, as if a switch had been flipped, everything went black.

      When Lena awoke, she was alone in the train car. The station outside the window looked eerily familiar, but... something was off. She stood up, feeling an overwhelming sense of deja vu.

      She stepped off the train and looked around. It was 5:45 AM again. The station was just as empty as before. The man, the conversation... it was all gone, like it had never happened.

      And yet, as she glanced down at the ground, she saw something that made her blood run cold: a small, crumpled photograph of herself, standing on the train platform, smiling. She didn’t remember taking it.

      She turned, but there was no one there. The last train had already left.
    `
  },
  {
    title: "The Whimsical Guardians of Glimmer Grove",
    genre: "Fantasy/Adventure",
    url: "https://i.imgur.com/ALcFFaD.jpeg",
    story: `
      In the heart of the enchanted Glimmer Grove, where sunlight danced through leaves like twinkling stars, lived a peculiar tribe of tiny creatures known as the Flibberwumps. Each Flibberwump was a burst of color and creativity, with hair that resembled vibrant, coral-like tendrils and eyes as wide as saucers, sparkling with curiosity.

      One serene afternoon, the leader of the Flibberwumps, a bright blue creature named Boggle, gathered the tribe for a crucial meeting. “Friends,” he began, his voice a melodious trill, “a shadow has fallen over our grove. The Great Oaks are withering, and the Grovespirits are losing their shimmer!”

      The others gasped, their colors flickering nervously. “How can we help?” asked Rimbel, a fiery orange Flibberwump, his hair a flurry of flames.

      Boggle, with his deep-set eyes filled with determination, proposed a quest. “We must venture to the Cave of Echoes and ask the ancient Whispering Stone for guidance. Only it holds answers to restore our home.”

      With renewed spirit, Rimbel, the soft-spoken Noor, and the mischievous Dizzledorp eagerly joined Boggle on the journey. They ventured through lush moss, crossed babbling brooks, and climbed over fallen logs, their laughter harmonizing with the gentle breezes.

      As dusk draped the forest, the friends reached the Cave of Echoes. A cool draft surrounded them as they stepped inside, the walls shimmering with mysterious symbols. Boggle approached the Whispering Stone—an opalescent gem pulsating with soft light.

      “Great Whispering Stone,” he called, “we seek your wisdom!”

      The stone glowed brighter, and a voice echoed through the cave. “To heal the grove, you must unite the colors of your hearts. Only through friendship can the magic be restored.”

      Understanding dawned upon them. It was not just the magic of their colors but the strength of their bond that held the power to save Glimmer Grove. They joined hands, combining their vibrant hues into a dazzling display. A whirlwind of color swirled from them, filling the cave and emanating into the forest beyond.

      As they returned to their grove, a miracle unfolded. The Great Oaks burst forth with light and life, leaves shimmering with renewed vigor. The Grovespirits twirled joyfully, their laughter echoing like sweet melodies.

      From that day on, the Flibberwumps learned that true magic thrived not in isolation but in friendship. Together, they safeguarded their colorful realm, forever remembering that in unity, even the faintest spark could ignite the brightest of lights.
    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
  {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
   {
    title: "",
    genre: "",
    url: "",
    story: `

    `
  },
];

app.get('/stories', (req, res) => {
  res.json(stories);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
