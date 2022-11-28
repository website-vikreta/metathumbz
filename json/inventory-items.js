/**
 * ? POINTS TO REMEMBER
 * 1. Add comma after every entry
 * 2. Dont add comma after last entry
 * 3. Use these category value only
 *      -- background
 *      -- eyebrows
 *      -- eyes
 *      -- hand
 *      -- head
 *      -- lower-face
 *      -- neck
 */

const items = [
  // ! ==============================================
  // ! BACKGROUND
  // ! ==============================================
  {
    name: "Background Dark Shadow",
    image: "/assets/nfts/background_dark-shadow.jpg",
    rarity: "regular",
    category: "background",
  },
  {
    name: "Background Gold",
    image: "/assets/nfts/background_gold.jpg",
    rarity: "rare",
    category: "background",
  },
  {
    name: "Background Green",
    image: "/assets/nfts/background_green.jpg",
    rarity: "regular",
    category: "background",
  },
  {
    name: "Background Grey",
    image: "/assets/nfts/background_grey.jpg",
    rarity: "regular",
    category: "background",
  },
  {
    name: "Background Maroon",
    image: "/assets/nfts/background_maroon.jpg",
    rarity: "uncommon",
    category: "background",
  },
  {
    name: "Background Pink",
    image: "/assets/nfts/background_pink.jpg",
    rarity: "regular",
    category: "background",
  },
  {
    name: "Background Purple",
    image: "/assets/nfts/background_purple.jpg",
    rarity: "regular",
    category: "background",
  },
  {
    name: "Background SOL",
    image: "/assets/nfts/background_sol.jpg",
    rarity: "rare",
    category: "background",
  },
  {
    name: "Background Yellow",
    image: "/assets/nfts/background_yellow.jpg",
    rarity: "uncommon",
    category: "background",
  },

  // ! ==============================================
  // ! EYEBROWS
  // ! ==============================================
  {
    name: "Eyebrows Angry",
    image: "/assets/nfts/eyebrows_angry.jpg",
    rarity: "uncommon",
    category: "eyebrows",
  },
  {
    name: "Eyebrows Happy",
    image: "/assets/nfts/eyebrows_happy.jpg",
    rarity: "regular",
    category: "eyebrows",
  },
  {
    name: "Eyebrows Suspicious",
    image: "/assets/nfts/eyebrows_suspicious.jpg",
    rarity: "rare",
    category: "eyebrows",
  },

  // ! ==============================================
  // ! EYES
  // ! ==============================================
  {
    name: "Eyes 3D Glasses",
    image: "/assets/nfts/eyes_3d-glasses.jpg",
    rarity: "uncommon",
    category: "eyes",
  },
  {
    name: "Eyes Anime Glasses",
    image: "/assets/nfts/eyes_anime-glasses.jpg",
    rarity: "uncommon",
    category: "eyes",
  },
  {
    name: "Eyes eyes",
    image: "/assets/nfts/eyes_eyes.jpg",
    rarity: "regular",
    category: "eyes",
  },
  {
    name: "Eyes Imposter Glasses",
    image: "/assets/nfts/eyes_imposter-glasses.jpg",
    rarity: "uncommon",
    category: "eyes",
  },
  {
    name: "Eyes Laser",
    image: "/assets/nfts/eyes_laser-eyes.jpg",
    rarity: "rare",
    category: "eyes",
  },
  {
    name: "Eyes Love Glasses",
    image: "/assets/nfts/eyes_love-glasses.jpg",
    rarity: "uncommon",
    category: "eyes",
  },
  {
    name: "Eyes Masquerade",
    image: "/assets/nfts/eyes_masquerade.jpg",
    rarity: "rare",
    category: "eyes",
  },
  {
    name: "Eyes Patch",
    image: "/assets/nfts/eyes_patch.jpg",
    rarity: "uncommon",
    category: "eyes",
  },

  // ! ==============================================
  // ! HANDS
  // ! ==============================================
  {
    name: "Hand Flame",
    image: "/assets/nfts/hands_flame.jpg",
    rarity: "rare",
    category: "hand",
  },
  {
    name: "Hand Flesh",
    image: "/assets/nfts/hands_flesh.jpg",
    rarity: "uncommon",
    category: "hand",
  },
  {
    name: "Hand Glass",
    image: "/assets/nfts/hands_glass.jpg",
    rarity: "rare",
    category: "hand",
  },
  {
    name: "Hand Golem",
    image: "/assets/nfts/hands_golem.jpg",
    rarity: "rare",
    category: "hand",
  },
  {
    name: "Hand Hay Hand",
    image: "/assets/nfts/hands_hay-hand.jpg",
    rarity: "uncommon",
    category: "hand",
  },
  {
    name: "Hand Ice",
    image: "/assets/nfts/hands_ice.jpg",
    rarity: "rare",
    category: "hand",
  },
  {
    name: "Hand Knuckle Blade",
    image: "/assets/nfts/hands_knuckle-blade.jpg",
    rarity: "uncommon",
    category: "hand",
  },
  {
    name: "Hand Leather",
    image: "/assets/nfts/hands_leather.jpg",
    rarity: "regular",
    category: "hand",
  },
  {
    name: "Hand Mummy",
    image: "/assets/nfts/hands_mummy.jpg",
    rarity: "uncommon",
    category: "hand",
  },
  {
    name: "Hand Naked",
    image: "/assets/nfts/hands_naked.jpg",
    rarity: "regular",
    category: "hand",
  },
  {
    name: "Hand Robot",
    image: "/assets/nfts/hands_robot.jpg",
    rarity: "regular",
    category: "hand",
  },
  {
    name: "Hand Skeleton",
    image: "/assets/nfts/hands_skeleton.jpg",
    rarity: "rare",
    category: "hand",
  },
  {
    name: "Hand Slimy",
    image: "/assets/nfts/hands_slimy.jpg",
    rarity: "uncommon",
    category: "hand",
  },
  {
    name: "Hand SOL",
    image: "/assets/nfts/hands_sol.jpg",
    rarity: "rare",
    category: "hand",
  },

  // ! ==============================================
  // ! HEAD
  // ! ==============================================
  {
    name: "Head Bald",
    image: "/assets/nfts/head_bald.jpg",
    rarity: "regular",
    category: "head",
  },
  {
    name: "Head Bamboo Copter",
    image: "/assets/nfts/head_bamboo-copter.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Bandana",
    image: "/assets/nfts/head_bandana.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Butchered",
    image: "/assets/nfts/head_butchered-head.jpg",
    rarity: "rare",
    category: "head",
  },
  {
    name: "Head Cap",
    image: "/assets/nfts/head_cap.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Crown",
    image: "/assets/nfts/head_crown.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Halo",
    image: "/assets/nfts/head_halo.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Horns",
    image: "/assets/nfts/head_horns.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Long Hair",
    image: "/assets/nfts/head_long-hair.jpg",
    rarity: "uncommon",
    category: "head",
  },
  {
    name: "Head Mohawk",
    image: "/assets/nfts/head_mohawk.jpg",
    rarity: "rare",
    category: "head",
  },
  {
    name: "Head Safety Pin",
    image: "/assets/nfts/head_safety-pin.jpg",
    rarity: "rare",
    category: "head",
  },
  {
    name: "Head Snake Head",
    image: "/assets/nfts/head_snake-head.jpg",
    rarity: "rare",
    category: "head",
  },
  {
    name: "Head Spartan",
    image: "/assets/nfts/head_spartan.jpg",
    rarity: "rare",
    category: "head",
  },
  {
    name: "Head Umbrella",
    image: "/assets/nfts/head_umbrella.jpg",
    rarity: "uncommon",
    category: "head",
  },

  // ! ==============================================
  // ! LOWER FACE
  // ! ==============================================
  {
    name: "Lower Face Fangs",
    image: "/assets/nfts/lower-face_fangs.jpg",
    rarity: "uncommon",
    category: "lower-face",
  },
  {
    name: "Lower Face Golden Tooth",
    image: "/assets/nfts/lower-face_golden-tooth.jpg",
    rarity: "uncommon",
    category: "lower-face",
  },
  {
    name: "Lower Face Mask",
    image: "/assets/nfts/lower-face_mask.jpg",
    rarity: "uncommon",
    category: "lower-face",
  },
  {
    name: "Lower Face Moustache",
    image: "/assets/nfts/lower-face_moustache.jpg",
    rarity: "uncommon",
    category: "lower-face",
  },
  {
    name: "Lower Face Pipe",
    image: "/assets/nfts/lower-face_pipe.jpg",
    rarity: "uncommon",
    category: "lower-face",
  },
  {
    name: "Lower Face Pizza",
    image: "/assets/nfts/lower-face_pizza.jpg",
    rarity: "rare",
    category: "lower-face",
  },
  {
    name: "Lower Face Teeth",
    image: "/assets/nfts/lower-face_teeth.jpg",
    rarity: "regular",
    category: "lower-face",
  },

  // ! ==============================================
  // ! NECK
  // ! ==============================================
  {
    name: "Neck 6th Thumb",
    image: "/assets/nfts/neck_6th-thumb.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck Bat Wings",
    image: "/assets/nfts/neck_bat-wings.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Blue Cape",
    image: "/assets/nfts/neck_blue-cape.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Blue Stone Ring",
    image: "/assets/nfts/neck_blue-stone-ring.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck Gold Chain",
    image: "/assets/nfts/neck_gold-chain.jpg",
    rarity: "uncommon",
    category: "neck",
  },
  {
    name: "Neck Green Stone Ring",
    image: "/assets/nfts/neck_green-stone-ring.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck Pink Cape",
    image: "/assets/nfts/neck_pink-cape.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Red Cape",
    image: "/assets/nfts/neck_red-cape.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Red Stone Ring",
    image: "/assets/nfts/neck_red-stone-ring.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck Scarf",
    image: "/assets/nfts/neck_scarf.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Silver Chain",
    image: "/assets/nfts/neck_silver-chain.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Snake",
    image: "/assets/nfts/neck_snake.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck SOL Stone Ring",
    image: "/assets/nfts/neck_sol-stone-ring.jpg",
    rarity: "rare",
    category: "neck",
  },
  {
    name: "Neck Tie",
    image: "/assets/nfts/neck_tie.jpg",
    rarity: "regular",
    category: "neck",
  },
  {
    name: "Neck Wings",
    image: "/assets/nfts/neck_wings.jpg",
    rarity: "regular",
    category: "neck",
  },
];
