export const developersData = {
  "PixelWolf Studios": {
    name: "PixelWolf Studios",
    avatar: "🐺",
    bio: "Indie studio of 2 making dark, atmospheric platformers. Inspired by Hollow Knight, Dark Souls, and classic Metroidvanias. Based in Berlin 🇩🇪",
    followers: 1240,
    twitter: "https://twitter.com",
    itchio: "https://itch.io",
    discord: "https://discord.com",
  },
  "NovaByte": {
    name: "NovaByte",
    avatar: "🌌",
    bio: "Solo dev building chill space games. I love procedural generation, ambient music, and making games that help people relax. Based in Toronto 🇨🇦",
    followers: 876,
    twitter: "https://twitter.com",
    itchio: "https://itch.io",
    discord: null,
  },
  "GlitchForge": {
    name: "GlitchForge",
    avatar: "⚡",
    bio: "Two friends making fast, stylish action games. Big fans of Devil May Cry, Katana ZERO, and anything cyberpunk. Based in Tokyo 🇯🇵",
    followers: 654,
    twitter: "https://twitter.com",
    itchio: "https://itch.io",
    discord: "https://discord.com",
  },
  "TwoLeafDev": {
    name: "TwoLeafDev",
    avatar: "🍃",
    bio: "A couple making cozy games together. We believe games should feel like a warm hug. Inspired by Stardew Valley, Animal Crossing, and Studio Ghibli. 🌿",
    followers: 2310,
    twitter: "https://twitter.com",
    itchio: "https://itch.io",
    discord: "https://discord.com",
  },
};

export const gamesData = [
  {
    id: 1,
    title: "Hollow Depths",
    developer: "PixelWolf Studios",
    description: "A dark souls-inspired 2D platformer set in a crumbling underground kingdom. Fight terrifying creatures and uncover a forgotten civilization.",
    longDescription: "Hollow Depths is a challenging 2D action platformer that draws inspiration from classic soulslike games. Set in a vast underground kingdom that has been slowly crumbling for centuries, you play as a lone explorer who descends into the darkness seeking answers. The world is hand-crafted with intricate level design, hidden passages, and environmental storytelling.",
    tags: ["Action", "Platformer", "Dark Fantasy"],
    status: "Alpha",
    upvotes: 342,
    comments: 47,
    thumbnail: "🏰",
    devUpdates: [
      { date: "Mar 28, 2026", title: "Boss Fight #3 Complete!", body: "We just finished implementing the third boss — The Stone Warden. It took 3 weeks but the fight feels incredible now!" },
      { date: "Mar 10, 2026", title: "New Zone: The Ashen Caves", body: "Added a brand new zone with 12 new enemy types and a mini-boss." },
      { date: "Feb 20, 2026", title: "Alpha Build Released!", body: "Our first alpha build is now available for testing!" },
    ],
    commentsList: [
      { user: "DarkSoulsVet", text: "The movement feels incredibly smooth. Reminds me of Hollow Knight!", time: "2 hours ago" },
      { user: "IndieHunter99", text: "Boss fight 2 destroyed me but I couldn't stop playing.", time: "5 hours ago" },
    ],
  },
  {
    id: 2,
    title: "Stellar Drift",
    developer: "NovaByte",
    description: "A relaxing space exploration game where you navigate procedurally generated galaxies, trade resources, and build your own space station.",
    longDescription: "Stellar Drift is a meditative space exploration experience designed for players who want to unwind. There are no enemies, no fail states — just the vast beauty of procedurally generated galaxies waiting to be discovered.",
    tags: ["Exploration", "Casual", "Sci-Fi"],
    status: "Demo Available",
    upvotes: 218,
    comments: 31,
    thumbnail: "🚀",
    devUpdates: [
      { date: "Mar 30, 2026", title: "Demo v0.4 is Live!", body: "New demo update includes 3 new galaxy types and improved trading UI." },
      { date: "Mar 5, 2026", title: "Space Station Builder Preview", body: "Sneak peek at the station builder coming in the next update!" },
    ],
    commentsList: [
      { user: "CosmicDreamer", text: "This is exactly the chill game I needed. Played for 3 hours straight.", time: "1 hour ago" },
      { user: "SpaceCadet77", text: "The procedural generation is impressive — every galaxy feels different.", time: "3 hours ago" },
    ],
  },
  {
    id: 3,
    title: "Neon Blades",
    developer: "GlitchForge",
    description: "Fast-paced cyberpunk hack-and-slash with a unique time-rewind mechanic. Chain combos and rewind mistakes in bullet time.",
    longDescription: "Neon Blades is an adrenaline-fueled hack-and-slash set in a neon-drenched cyberpunk city. The time-rewind mechanic lets you rewind up to 5 seconds at any point during combat and try a different approach.",
    tags: ["Action", "Cyberpunk", "Hack & Slash"],
    status: "Prototype",
    upvotes: 195,
    comments: 28,
    thumbnail: "⚔️",
    devUpdates: [
      { date: "Mar 25, 2026", title: "Time Rewind System v2", body: "Completely rebuilt the rewind mechanic from scratch. It's now frame-perfect." },
    ],
    commentsList: [
      { user: "CyberSlasher", text: "The rewind mechanic is genius. Never seen anything like it.", time: "4 hours ago" },
      { user: "NeonFan2077", text: "Prototype already feels more polished than most finished games.", time: "6 hours ago" },
    ],
  },
  {
    id: 4,
    title: "Mossy Hollow",
    developer: "TwoLeafDev",
    description: "A cozy farming and crafting game set in an enchanted forest. Grow magical plants, befriend woodland creatures and build your dream cottage.",
    longDescription: "Mossy Hollow is the ultimate cozy game set deep in an enchanted forest. You inherit a small clearing and slowly transform it into a thriving magical homestead. Plant and harvest over 60 unique magical plants, each with special properties.",
    tags: ["Cozy", "Farming", "Fantasy"],
    status: "Early Access",
    upvotes: 410,
    comments: 63,
    thumbnail: "🌿",
    devUpdates: [
      { date: "Apr 1, 2026", title: "Spring Season Update!", body: "Spring is here! 15 new plants, 3 new characters, and a spring festival event." },
      { date: "Mar 15, 2026", title: "Creature Friendship System", body: "The friendship system is now live. Build relationships with woodland creatures." },
    ],
    commentsList: [
      { user: "CozyGamer", text: "I've been waiting for a game like this my whole life.", time: "30 mins ago" },
      { user: "ForestWitch", text: "The art style is so gorgeous. Every screen is wallpaper-worthy.", time: "2 hours ago" },
    ],
  },
];

export const allTags = ["Action", "Platformer", "Dark Fantasy", "Exploration", "Casual", "Sci-Fi", "Cyberpunk", "Hack & Slash", "Cozy", "Farming", "Fantasy"];
export const allStatuses = ["Alpha", "Prototype", "Demo Available", "Early Access"];

export function getStatusColor(status) {
  switch (status) {
    case "Alpha": return "#f59e0b";
    case "Demo Available": return "#10b981";
    case "Prototype": return "#6366f1";
    case "Early Access": return "#3b82f6";
    default: return "#888888";
  }
}