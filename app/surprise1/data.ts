import { Location } from "./types";

/* =========================================================
   MEMORIES

   Real memories, unchanged. Presentation around them is what
   this pass improves — not the words themselves.
========================================================= */

export const locations: Location[] = [
  {
    name: "Iceland",
    country: "Iceland",
    emoji: "🇮🇸",
    x: 16,
    y: 16,
    memories: [
      {
        title: "The Aurora Photo",
        emoji: "🌌",
        description: [
          "It was nighttime in Iceland.",
          "The aurora was in the background.",
          "I asked for a photo because I wanted a picture with you.",
          "Then we somehow decided that pointing our phones at each other like pistols was the correct pose.",
        ],
        scene: {
          title: "ICELAND",
          subtitle: "The northern lights",
          emoji: "🌌",
          type: "aurora",
          lines: [
            { speaker: "NARRATOR", text: "It was cold. Really cold." },
            { speaker: "NARRATOR", text: "But the sky looked incredible." },
            { speaker: "HAYDEN", text: "Wait..." },
            { speaker: "HAYDEN", text: "Can we take a photo?" },
            { speaker: "KELLY", text: "A photo of what?" },
            { speaker: "HAYDEN", text: "Us." },
            { speaker: "NARRATOR", text: "So we took out our phones." },
            {
              speaker: "NARRATOR",
              text: "And somehow turned them into imaginary pistols.",
            },
            { speaker: "KELLY", text: "🔫" },
            { speaker: "HAYDEN", text: "🔫" },
            {
              speaker: "NARRATOR",
              text: "Behind us, the aurora filled the sky.",
            },
          ],
        },
      },

      {
        title: "The Snowball Attack",
        emoji: "❄️",
        description: [
          "Another day in Iceland.",
          "You threw a snowball directly at my face.",
          "I was completely stunned.",
          "Somehow this became one of those jokes we still bring up from time to time.",
        ],
        scene: {
          title: "ICELAND",
          subtitle: "The attack",
          emoji: "❄️",
          type: "snowball",
          lines: [
            { speaker: "NARRATOR", text: "Another day." },
            { speaker: "NARRATOR", text: "More snow." },
            { speaker: "KELLY", text: "Hey Hayden." },
            { speaker: "HAYDEN", text: "Yeah?" },
            { speaker: "NARRATOR", text: "Kelly picked up a snowball." },
            { speaker: "HAYDEN", text: "Don't." },
            { speaker: "KELLY", text: "🙂" },
            { speaker: "NARRATOR", text: "She threw it." },
            {
              speaker: "NARRATOR",
              text: "Directly at Hayden's face.",
            },
            { speaker: "HAYDEN", text: "..." },
            { speaker: "HAYDEN", text: "I was stunned." },
            {
              speaker: "NARRATOR",
              text: "And somehow, we still talk about this.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Norway",
    country: "Norway",
    emoji: "🇳🇴",
    x: 29,
    y: 25,
    memories: [
      {
        title: "The First Snowman",
        emoji: "☃️",
        description: [
          "You built your first snowman.",
          "It wasn't my first snowman.",
          "But I got to build it with you.",
        ],
        scene: {
          title: "NORWAY",
          subtitle: "A snowy day",
          emoji: "☃️",
          type: "snowman",
          lines: [
            { speaker: "NARRATOR", text: "There was snow everywhere." },
            {
              speaker: "KELLY",
              text: "I've never built a snowman before.",
            },
            {
              speaker: "HAYDEN",
              text: "Then let's build one.",
            },
            {
              speaker: "NARRATOR",
              text: "You started rolling the snow.",
            },
            { speaker: "KELLY", text: "Is this big enough?" },
            { speaker: "HAYDEN", text: "Bigger." },
            {
              speaker: "NARRATOR",
              text: "Piece by piece, it started taking shape.",
            },
            { speaker: "KELLY", text: "We actually made one." },
            { speaker: "NARRATOR", text: "Your first snowman." },
            {
              speaker: "NARRATOR",
              text: "And I got to build it with you.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Denmark",
    country: "Denmark",
    emoji: "🇩🇰",
    x: 40,
    y: 36,
    memories: [
      {
        title: "The Bumper Cars",
        emoji: "🎡",
        description: [
          "We went to a carnival with the group.",
          "You chose to sit in my bumper car.",
          "I drove.",
          "Things got chaotic.",
        ],
        scene: {
          title: "DENMARK",
          subtitle: "Carnival",
          emoji: "🎡",
          type: "bumpercars",
          lines: [
            {
              speaker: "NARRATOR",
              text: "The group went to a carnival.",
            },
            {
              speaker: "NARRATOR",
              text: "There were rides everywhere.",
            },
            {
              speaker: "KELLY",
              text: "I'm sitting in your car.",
            },
            {
              speaker: "HAYDEN",
              text: "You're trusting me with this?",
            },
            { speaker: "KELLY", text: "Yes." },
            {
              speaker: "NARRATOR",
              text: "Hayden became the driver.",
            },
            { speaker: "HAYDEN", text: "Alright. Let's go." },
            {
              speaker: "NARRATOR",
              text: "The car immediately went somewhere it probably shouldn't have.",
            },
            {
              speaker: "KELLY",
              text: "WHY ARE WE GOING THAT WAY?",
            },
            { speaker: "HAYDEN", text: "I'M DRIVING." },
            {
              speaker: "NARRATOR",
              text: "Bumper car driving: questionable.",
            },
            {
              speaker: "NARRATOR",
              text: "Memory: excellent.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Czechia",
    country: "Czech Republic",
    emoji: "🇨🇿",
    x: 47,
    y: 48,
    memories: [
      {
        title: "Another Stop",
        emoji: "🗺️",
        description: [
          "Not every place needs a dramatic story.",
          "It was another country.",
          "Another stop.",
          "Another part of the journey.",
        ],
      },
    ],
  },

  {
    name: "Budapest",
    country: "Hungary",
    emoji: "🇭🇺",
    x: 53,
    y: 59,
    memories: [
      {
        title: "Budapest",
        emoji: "🏙️",
        description: [
          "Budapest.",
          "Another stop during exchange.",
          "Another place that became part of the story.",
        ],
      },
    ],
  },

  {
    name: "Italy",
    country: "Italy",
    emoji: "🇮🇹",
    x: 59,
    y: 70,
    memories: [
      {
        title: "The Coat — Venice",
        emoji: "🧥",
        description: [
          "It was cold in Venice.",
          "I went back to the hostel to get your coat.",
          "I just didn't want you to be cold.",
        ],
        scene: {
          title: "VENICE",
          subtitle: "A small thing",
          emoji: "🧥",
          type: "coat",
          lines: [
            { speaker: "NARRATOR", text: "Venice was beautiful." },
            {
              speaker: "NARRATOR",
              text: "But it was getting cold.",
            },
            { speaker: "HAYDEN", text: "You're cold." },
            { speaker: "KELLY", text: "A little." },
            { speaker: "HAYDEN", text: "Wait here." },
            {
              speaker: "NARRATOR",
              text: "Hayden went back to the hostel.",
            },
            {
              speaker: "NARRATOR",
              text: "Just to get your coat.",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "Thank you." },
            {
              speaker: "NARRATOR",
              text: "Sometimes caring about someone is as simple as making sure they're warm.",
            },
          ],
        },
      },

      {
        title: "The Power Bank — Rome",
        emoji: "🔋",
        description: [
          "In Rome, another friend's bag had been stolen.",
          "You were waiting for them.",
          "I rushed back to find you.",
          "Then I gave you my power bank.",
        ],
        scene: {
          title: "ROME",
          subtitle: "Don't let your phone die",
          emoji: "🔋",
          type: "powerbank",
          lines: [
            { speaker: "NARRATOR", text: "Rome." },
            {
              speaker: "NARRATOR",
              text: "Something unexpected happened.",
            },
            {
              speaker: "NARRATOR",
              text: "Another friend's bag had been stolen.",
            },
            {
              speaker: "KELLY",
              text: "I'm waiting for them.",
            },
            {
              speaker: "NARRATOR",
              text: "So Hayden rushed back to find you.",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "What's this?" },
            { speaker: "HAYDEN", text: "My power bank." },
            { speaker: "HAYDEN", text: "You'll need it." },
            { speaker: "NARRATOR", text: "A small thing." },
            {
              speaker: "NARRATOR",
              text: "But I wanted to make sure you were okay.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "London",
    country: "United Kingdom",
    emoji: "🇬🇧",
    x: 69,
    y: 80,
    memories: [
      {
        title: "The Confession",
        emoji: "❤️",
        description: [
          "May 20, 2026.",
          "On a train from Coventry to London.",
          "I was incredibly nervous.",
          "I scratched my hand while trying to figure out how to say it.",
          "And then I asked.",
        ],
        scene: {
          title: "MAY 20, 2026",
          subtitle: "Coventry → London",
          emoji: "🚆",
          type: "confession",
          lines: [
            {
              speaker: "NARRATOR",
              text: "The train was heading towards London.",
            },
            {
              speaker: "NARRATOR",
              text: "Everything looked normal.",
            },
            {
              speaker: "NARRATOR",
              text: "Except Hayden was extremely nervous.",
            },
            {
              speaker: "NARRATOR",
              text: "He kept scratching his hand.",
            },
            { speaker: "KELLY", text: "Are you okay?" },
            { speaker: "HAYDEN", text: "Yeah..." },
            { speaker: "NARRATOR", text: "He wasn't." },
            { speaker: "HAYDEN", text: "Kelly..." },
            { speaker: "KELLY", text: "Yeah?" },
            {
              speaker: "HAYDEN",
              text: "Can you be my boyfriend?",
            },
            { speaker: "NARRATOR", text: "..." },
            { speaker: "KELLY", text: "HAHAHAHA" },
            { speaker: "HAYDEN", text: "WAIT—" },
            { speaker: "KELLY", text: "Yes." },
            {
              speaker: "NARRATOR",
              text: "And just like that, everything changed.",
            },
          ],
        },
      },

      {
        title: "Borough Market",
        emoji: "🍓",
        description: [
          "We went to Borough Market.",
          "Fish and chips.",
          "Strawberry chocolate.",
          "And the special crème brûlée donut.",
          "It was somewhere you had wanted to visit for a while.",
        ],
        scene: {
          title: "LONDON",
          subtitle: "Borough Market",
          emoji: "🍓",
          type: "borough",
          lines: [
            {
              speaker: "NARRATOR",
              text: "First stop: Borough Market.",
            },
            {
              speaker: "KELLY",
              text: "I've wanted to come here for ages.",
            },
            {
              speaker: "HAYDEN",
              text: "Then today we're coming here.",
            },
            { speaker: "NARRATOR", text: "Fish and chips." },
            { speaker: "NARRATOR", text: "Strawberry chocolate." },
            {
              speaker: "NARRATOR",
              text: "And the special crème brûlée donut.",
            },
            {
              speaker: "HAYDEN",
              text: "This is actually really good.",
            },
            { speaker: "KELLY", text: "Told you." },
          ],
        },
      },

      {
        title: "Crazy Taxi",
        emoji: "🎮",
        description: [
          "We went to the Science Museum.",
          "There was a special video game exhibit.",
          "You played Crazy Taxi.",
          "Your driving skills were... questionable.",
          "You crashed a lot.",
        ],
        scene: {
          title: "SCIENCE MUSEUM",
          subtitle: "Video game exhibit",
          emoji: "🎮",
          type: "gaming",
          lines: [
            {
              speaker: "NARRATOR",
              text: "Then we went to the Science Museum.",
            },
            {
              speaker: "NARRATOR",
              text: "There was a special video game exhibition.",
            },
            { speaker: "HAYDEN", text: "YES. GAMES." },
            {
              speaker: "KELLY",
              text: "I'm going to try this one.",
            },
            {
              speaker: "NARRATOR",
              text: "Kelly chose Crazy Taxi.",
            },
            { speaker: "NARRATOR", text: "The driving began." },
            { speaker: "NARRATOR", text: "CRASH." },
            { speaker: "KELLY", text: "Oops." },
            { speaker: "NARRATOR", text: "Another crash." },
            {
              speaker: "HAYDEN",
              text: "Your driving is terrible.",
            },
            { speaker: "KELLY", text: "I KNOW." },
          ],
        },
      },

      {
        title: "The Flowers",
        emoji: "🌹",
        description: [
          "We went to Flat Iron.",
          "The steak was great.",
          "During the meal, I went outside.",
          "I came back with flowers.",
        ],
        scene: {
          title: "FLAT IRON",
          subtitle: "A little surprise",
          emoji: "🌹",
          type: "flowers",
          lines: [
            { speaker: "NARRATOR", text: "We went to Flat Iron." },
            { speaker: "NARRATOR", text: "The steak was great." },
            { speaker: "HAYDEN", text: "I'll be back in a minute." },
            { speaker: "KELLY", text: "Where are you going?" },
            { speaker: "HAYDEN", text: "You'll see." },
            { speaker: "NARRATOR", text: "Hayden went outside." },
            {
              speaker: "NARRATOR",
              text: "A few minutes later...",
            },
            { speaker: "HAYDEN", text: "Here." },
            { speaker: "KELLY", text: "Flowers?" },
            { speaker: "HAYDEN", text: "For you." },
          ],
        },
      },

      {
        title: "Big Ben & London Eye",
        emoji: "🎡",
        description: [
          "After dinner we went to see Big Ben and the London Eye.",
          "You hadn't been there before.",
          "So we got to see them together.",
        ],
        scene: {
          title: "LONDON",
          subtitle: "The night continues",
          emoji: "🎡",
          type: "bigben",
          lines: [
            { speaker: "NARRATOR", text: "The day wasn't over yet." },
            { speaker: "NARRATOR", text: "We went to see Big Ben." },
            {
              speaker: "KELLY",
              text: "I've never been here before.",
            },
            {
              speaker: "HAYDEN",
              text: "Then I'm glad I get to see it with you.",
            },
            {
              speaker: "NARRATOR",
              text: "Then we walked towards the London Eye.",
            },
            { speaker: "NARRATOR", text: "A long day." },
            { speaker: "NARRATOR", text: "A lot of memories." },
            {
              speaker: "NARRATOR",
              text: "And the beginning of something even bigger.",
            },
          ],
        },
      },
    ],
  },

  {
    name: "Hong Kong",
    country: "Hong Kong",
    emoji: "🇭🇰",
    x: 82,
    y: 89,
    memories: [
      {
        title: "Sushiro",
        emoji: "🍣",
        description: [
          "After coming back from Warwick, we missed sushi.",
          "So naturally, we went to Sushiro.",
        ],
        scene: {
          title: "HONG KONG",
          subtitle: "Sushiro",
          emoji: "🍣",
          type: "sushi",
          lines: [
            { speaker: "NARRATOR", text: "Back in Hong Kong." },
            {
              speaker: "NARRATOR",
              text: "After exchange, there was something we both missed.",
            },
            { speaker: "KELLY", text: "Sushi." },
            { speaker: "HAYDEN", text: "Sushi." },
            { speaker: "NARRATOR", text: "So we went to Sushiro." },
            {
              speaker: "NARRATOR",
              text: "Sometimes the simplest dates are the best ones.",
            },
          ],
        },
      },

      {
        title: "Movie Dates",
        emoji: "🎬",
        description: [
          "We watched 給阿嬤的情書.",
          "And on another date, Obsession.",
          "Different movies.",
          "Different days.",
          "More memories.",
        ],
        scene: {
          title: "HONG KONG",
          subtitle: "Movie night",
          emoji: "🎬",
          type: "movie",
          lines: [
            { speaker: "NARRATOR", text: "Another day." },
            { speaker: "NARRATOR", text: "Another movie." },
            {
              speaker: "NARRATOR",
              text: "We watched 給阿嬤的情書.",
            },
            {
              speaker: "NARRATOR",
              text: "Another time, we watched Obsession.",
            },
            {
              speaker: "KELLY",
              text: "What should we watch next?",
            },
            {
              speaker: "HAYDEN",
              text: "We'll figure it out.",
            },
            {
              speaker: "NARRATOR",
              text: "And there will probably be another memory.",
            },
          ],
        },
      },
    ],
  },
];
