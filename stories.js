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
    genre: "Mystery",
    url: "https://i.imgur.com/OaZJmqt.png",
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
    title: "The Last Shimmer of Fur",
    genre: "Fantasy/Adventure",
    url: "https://i.imgur.com/7y4RHQA.jpeg",
    story: `
      In the heart of a forgotten forest, where light struggled to break through the dense canopy, lived a peculiar creature named Flicker. Flicker was not just any ordinary inhabitant; he was a fluffy, blue-gray being with wild tufts of hair that danced in the breeze, and enormous, expressive eyes that held a spark of curiosity.

      For many years, Flicker had watched the world from the shadows, captivated by tales whispered among the trees—stories of a magical place where all creatures lived in harmony. However, the forest surrounding him was losing its magic. The flowers wilted, the streams dried up, and his friends were disappearing one by one, turned to whispers on the wind.

      One fateful day, as Flicker sulked beneath a gnarled oak tree, he overheard a group of forest sprites discussing a legendary artifact—a glowing crystal known as the Heart of Radiance, said to restore life and magic to the land. Flicker’s heart raced with hope; this was his chance!

      With a newfound determination, Flicker packed some berries and set off on an adventure into the depths of the forest, navigating through tangled vines and over moss-covered stones. He encountered challenges along the way: a wise old owl who asked riddles, a brook that demanded a song, and a thicket of brambles that whispered his fears.

      Despite feeling lost, every step he took was guided by an inner light—the belief that he could change not just his fate, but the fate of his home. Flicker’s spirit soared as he drew closer to the peak of the mountain where the crystal resided, the air thrumming with magic.

      At the summit, surrounded by swirling clouds, Flicker finally spotted the Heart of Radiance. It pulsed with a vibrant glow, illuminating the shadows around him. With careful steps, he approached. As he reached out, the Heart resonated with Flicker’s essence, intertwining their energies.

      In that moment, Flicker's wild fur shimmered with brightness, and he felt a rush of power. The forest below reacted instantly—the trees burst into bloom, the streams flowed again, and laughter echoed through the air as creatures emerged from their hiding. Flicker realized he wasn’t just restoring the forest; he had awakened its spirit.

      Flicker returned home a hero, surrounded by friends old and new. With his heart now aglow with magical energy, he understood that even the smallest creature could lead to the greatest change. The whispers of the forest changed from sadness to joy, and Flicker—once a forgotten being—became the guardian of the Heart of Radiance, forever ensuring that the forest would flourish.

      As the sun dipped low, Flicker gazed at the vibrant colors painting the sky, knowing that every shadow held the potential for light and every creature the possibility for greatness. And in the spirit of adventure, he knew his story had just begun.
    `
  },
  {
    title: "Whispers of the Night",
    genre: "Horror/Fantasy",
    url: "https://i.imgur.com/zZstOPn.jpeg",
    story: `
      In the desolate village of Elmsworth, the crimson moon loomed over the ancient hills, casting eerie shadows that flickered like restless spirits. The townsfolk spoke in hushed tones of a curse that had befallen young Clara Hawthorne, a girl whose beauty was overshadowed by an abiding darkness. 

      Clara had always been different, marked by a mysterious birthright whispered through generations. Her eyes glowed with an otherworldly luminescence, an unsettling trait that made the villagers wary. Cracks marred her porcelain skin, resembling fissures in the very fabric of reality. They said she was a harbinger of doom, and many believed it to be true as strange occurrences unraveled in Elmsworth.

      It began with the dolls—the haunting porcelain faces that lined the shelves of her home. Each one was alive with a sinister enchantment, their eyes blinking with malevolence when Clara’s back was turned. At night, they whispered dark secrets, compelling her to act against her will, tugging at the edges of her mind.

      One fateful evening, Clara ventured to the outskirts of the village, drawn by an insatiable urge. The wind howled like the damned, and a chilling fog enveloped her, revealing the twisted shapes of forgotten trees. Dread tainted the air as she stumbled upon an ancient graveyard, its headstones whispered long-lost names.

      In the pale moonlight, she could see figures emerging from the shadows—wraiths of those wronged in life. Among them stood a grotesque puppet-like creature, adorned in tattered clothing. Its laugh—mechanical and hollow—sent shivers down her spine. Beside it loomed a shadowy figure, more monstrous than the last, its eyes glimmering like burning coals. Clara recognized the truth behind the curse: her connection to these spirits was inescapable.

      “You’ve awakened us!” the doll-man rasped, his voice echoing back from the grave. “Join us, Clara. Embrace your legacy.”

      With each word, Clara felt the tether to her memories fray, allowing the darkness to seep in. She resisted, but the whispers encircled her mind, promising power and acceptance in exchange for her soul. The line between right and wrong blurred in the face of temptation.

      As she fought back against the looming shadows, the ground beneath them trembled. The wails of the villagers echoed in her ears—a cacophony of fear and betrayal. Realizing that the fate of Elmsworth rested upon her choices, Clara made her stand.

      “No more!” she shouted, her voice breaking through the encroaching dark. Drawing upon the remnants of her will, she grasped the talisman hidden in her heart—a piece of light left behind by her ancestors. It glowed fiercely, illuminating the graveyard and dispelling the malice that engulfed her.

      With a surge of energy, Clara unleashed the pulsing light upon her spectral captors. The wraiths shrieked, their forms dissolving into the ether, and the doll fell silent, its secrets vanishing with the night. They were free, and so was she.

      As dawn broke over Elmsworth, the villagers gathered to find Clara standing in the center of the graveyard, her eyes reflecting the gold of the rising sun. She was transformed, free from the shadows that once clung to her. But the sacrifices made that night weighed heavy in her heart, a reminder that darkness is never truly vanquished; it lingers, waiting for the next unfortunate soul to beckon it forth.

      Thus, Clara Hawthorne became a guardian of Elmsworth, a keeper of the whispers that haunted the night, ever vigilant against the encroaching shadows. For in her eyes, lingering amber flames told tales of the battles fought in the depths of the unknown.
    `
  },
   {
    title: "Emergence",
    genre: "Post-Apocalyptic Fantasy",
    url: "https://i.imgur.com/I5QZAUX.jpeg",
    story: `
In a world ravaged by war and environmental devastation, humanity’s folly had stirred something ancient, something primordial. In the ashes of civilization, where skyscrapers stood shattered and the ground was littered with remnants of the past, a lone figure appeared amidst the chaos. His name was Kael, a child of the old world, one of the few survivors who had witnessed the fall of the once-prosperous cities.

Kael stood, facing the horizon where the sun dipped below a churning sky, darkened by smoke and debris. Clad in rags, his bare skin bore the marks of a struggle for survival, yet within him burned a flickering light of hope. Years had passed since the last remnants of society crumbled, but a deep-rooted feeling whispered of an awakening—a resurgence of what had been lost.

As he ventured deeper into the wasteland, the ground trembled beneath him, sending tremors surging up his legs. Kael sensed a powerful energy rising from the earth, a heartbeat that resonated with his own. He approached the epicenter, an area scorched by a cataclysmic event long forgotten. There, amidst the charred remains, a massive figure began to materialize—a titan borne of fire and ash, a manifestation of nature's wrath and humanity's hubris.

It loomed above Kael, crafted from the very elements that had wrought destruction—a colossal being of molten rock and ember, its form pulsating with an ethereal glow. The Titan's eyes shone like suns, reflecting pain, anger, and an indescribable wisdom. This was not just a harbinger of doom; it was a force of renewal, a guardian of the earth rising from the depths of despair.

Kael felt drawn to it, an inexplicable connection coursing through his veins. He raised his arms, palms open, unafraid. In that moment, he understood—the Titan was not only a savior but a reflection of what humanity could become if it learned to respect and harmonize with nature. The ashes of the past gave birth to seeds of the future, and it was within him to change the narrative.

As the Titan descended, flames swirling around them, Kael was enveloped by a gentle warmth rather than destruction. Instead of being consumed, he felt empowered, ignited by the Titan's essence. Visions flooded his mind—images of rebirth, greenery sprouting from the ruins, communities flourishing side by side with nature, a world united by understanding and care.

“Together,” Kael whispered, his voice rising above the cacophony of the pyre. “Together, we can start anew.”

In answer, the Titan roared, its voice echoing through the hollow canyons of the past. With a sweep of its arm, the earth began to tremble in a different way—as if responding to Kael's call. The fires receded, and before him, patches of green began to emerge, modest at first, but persistent and resolute. 

With the Titan by his side, Kael knew he had become part of something greater—a movement not just for survival, but for revival. As the sun rose again, casting golden light over the forgotten land, he stepped forward, ready to lead others toward a new chapter—a testament to resilience, hope, and rebirth in the face of devastation.

The Titan remained in the backdrop, a guardian watching over the resurrection of a world once lost. Together, they would reclaim the earth, transformed by the ashes of the past.
    `
  },
  {
    title: "Emerald Shadows",
    genre: "Post-Apocalyptic Sci-Fi",
    url: "https://i.imgur.com/nFnyCMJ.jpeg",
    story: `
In the year 2142, the world was a haunting landscape of crumbling skyscrapers and tangled underbrush, remnants of humanity's discarded dreams. Nature had reclaimed what technology had once dominated, intertwining concrete and steel with vibrant green life. Amid this overgrown chaos wandered Lena, a fierce young scavenger with striking red hair that flickered like flames against the muted backdrop of decay.

Lena stood at the edge of what used to be downtown, her form silhouetted against a once-bustling skyline now reduced to ruin. Her emerald green eyes, vibrant and unnerving, were her most prized possession—an uncanny result of the genetic modifications that had kept her alive in this dystopian wilderness. She was one of the last of the "Renovators," a group born from the remaining pockets of advanced civilization trying to weave their essence into a reality so vastly changed. 

Every day, Lena scoured the remnants of the past, searching for lost resources and technology, determined to find viable components to create a sustainable life in the wasteland. Her backpack was filled with forgotten gadgets, pieces of metal, and traces of old machinery, all infused with her hopes of restoring her world.

On this particular day, as morning dew still clung to the tattered vines wrapping the remnants of civilization, Lena sensed a disturbance—a faint humming, buried deep beneath the layers of decay. Exhilaration coursed through her veins, battling the instinctual dread that often threaded its way through the lives of scavengers. This was no ordinary noise; it was a pulse, a heartbeat of technology yearning to be awakened.

Venturing toward the sound, Lena pushed through the underbrush, her boots crunching over layers of fallen leaves and broken glass. She stumbled upon what seemed like the entrance to a hidden chamber, half-buried beneath an avalanche of vines and rusted beams. The low hum grew louder as she neared, drawing her in like a moth to a flickering flame.

With fervent determination, Lena cleared away the debris, revealing an ancient elevator shaft that disappeared into darkness. After a moment of hesitation, she activated her handheld scanner, the screen flickering to life, illuminating the glyphs engraved around the entrance. They told stories of a forgotten society—one that had built wonders yet never envisaged their fall.

Taking a deep breath, Lena descended into the depths, her heart pounding in time with the thrumming sound. If the source of the hum were what she suspected, it could change everything. What lay ahead could either be her salvation or her most significant failure.

The darkness enveloped her as the shaft widened into a cavernous room, the source of the hum pulsating brighter now—a shimmering orb encased in a mesh of wires and glowing symbols, suspended in mid-air like a lost star. It radiated an energy that felt both ancient and new, inviting her forward.

Lena stepped closer, her hand outstretched. The moment her fingers brushed against the orb, visions flooded her mind—memories of the world before, now tinged with faded glory. But there were snippets of something else too—a beacon of hope, a plan to restore the balance. Lena felt the weight of responsibility press upon her shoulders.

As she pulled her hand back, the orb began to fade, leaving a lingering whisper of knowledge behind. If she could harness it, there might still be a chance to revive her world, to bring life back to the shadows of this ruin.

Emerging from the depths, the sunlight kissed her skin once more as she climbed back to the surface. The lush green of the wilderness surrounded her, and she felt something shift within—a connection to the past and a renewed commitment to the future.

With the orb’s echo still in her heart, Lena knew her journey was just beginning. The world had not yet lost its spark; it merely awaited a touch of humanity’s resilience. With determination igniting her spirit, she set off into the verdant expanse, ready to reclaim hope from the ruins.

    `
  },
  {
    title: "Echoes of Silence",
    genre: "Slice of Life / Coming-of-Age",
    url: "https://i.imgur.com/R3saZ4k.jpeg",
    story: `
As the sun dipped below the horizon, casting a warm glow through her bedroom window, Hana lay on her bed, enveloped in the soft embrace of her favorite oversized sweatshirt. It was an ordinary evening in the bustling heart of the city, yet for Hana, it felt like a moment suspended in time.

With her headphones snug over her ears, she drifted into a world of sound. Each note from her carefully curated playlist resonated deep within her, telling stories that words alone could not. The soothing melodies spoke of dreams and adventures, drawing her into memories of laughter shared with friends and moments of solitude that shaped who she was becoming.

Hana often found solace in music; it was her refuge from the pressures of school, expectations, and the hurried lifestyle of city life. She had recently navigated the labyrinth of high school, feeling both liberated and lost as she stood at the threshold of adulthood. It wasn't easy—it never was—but this peaceful cocoon of sound was a sweet reminder that she was not alone in her journey.

Outside her window, the everyday life of the city continued. She could hear the faint hum of traffic, snippets of laughter from neighbors, and the occasional bark of a dog. But inside, it was a sanctuary, a space where she could dream about her future, where her heart raced with the thought of exploring distant lands, writing stories of her own, and finding her place in the vast tapestry of life.

As she let the music wash over her, thoughts began to crystallize. In the back of her mind, a dream was forming—a dream of a small café tucked away in a quiet corner of the city, where she would write and share her creations with the world. She pictured the warm aroma of coffee, the laughter of friends, and the pages of her stories brought to life.

In this moment, the weight of uncertainty lifted. She imagined herself sitting in that café, pen in hand, surrounded by people who were not just patrons but fellow dreamers. Voices melded with the soft jazz playing in the background, creating a beautiful symphony that mirrored her own.

Hana took a deep breath, inhaling the familiar scent of her room mixed with the faint aroma of rain outside. Perhaps she couldn’t see the future yet, but with each beat of the music, she understood she was closer to discovering who she truly wanted to be. For now, she’d allow herself this moment—dreaming, creating, and soaking in the echoes of silence that filled her room.

As night fully enveloped the city, Hana lingered in her reverie, fueled by the melodies that wrapped around her like a comforting blanket, promising that tomorrow would bring new chances and new stories to tell.

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
