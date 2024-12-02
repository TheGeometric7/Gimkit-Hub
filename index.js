const headings = ["Cosmetics", "Game Modes", "Creative"];
const subheadings = ["View and learn about all Gims, Stickers, Trails, and other cosmetic-based info on the Cosmetics page!", "Access information about all game modes, whether it's Top-Down, Platformer, a Tycoon Twist, and more!", "Learn about Gimkit Creative, as well as its types of Terrain, Devices, Props, and Updates!"];
const links = ["cosmetics.html", "", "", ""];
const cosmeticImage = ["dayOne", "echoAgent", "stripeDoubleGreen", "mustache", "vortexAgent", "grayGradient", "redNinja", "sprinklesRed", "redDeliciousApple", "sunny", "fadedBlueGradient", "glassHalfFull", "whiteAndBlueVerticalStripes", "polkaDotBlueAndYellow", "pinkPaste", "volcanoCracks", "mustachePink", "mountainAndSun", "camoTan", "redDinoCostume", "stripeDoubleRed", "coolRedBlueGradient", "pencilPack", "glyphsYellowBrown", "camoBlue", "purplePaste", "galaxy", "luchador", "fox", "rockyWest", "pumpkin", "mummy", "ghostCostume", "fifthBirthday", "corn", "feast", "pumpkinPie", "frostBuddy", "polkaDotWhiteAndRed", "festiveOnesieBlue", "festiveOnesieGreen", "festiveOnesieRed", "festiveOnesieTan", "hotChocolate", "snowman", "snowglobe", "gift", "polkaDotFestive", "polkaDotFestiveReverse", "mustacheSanta", "firework",  "puzzleYellowPurple", "puzzleGreenBlue", "puzzleOrangeBlue", "puzzleGrayWhite", "puzzleRedGreen", "pirate", "cellGold", "heart", "roses", "detective", "hamster", "leprechaun", "astroHelmet", "constellationPurpleYellow", "constellationBlackWhite", "constellationBlackGreen", "constellationPinkGreen", "constellationYellowPink", "sketch", "mustacheBrown", "yinYang", "fisher", "coffee", "partyPineapple", "graduate", "graduateBlue", "stripeDoublePurple", "bananaSplit", "rockstar", "rainbowWave",  "mountain", "tent", "goat", "daisy", "climber", "cookie", "zebra", "diamondRainbow", "circuitGreen", "circuitBlue", "circuitGray", "clock", "squiggles", "autumnTree", "crashTestDummy", "stripeDoubleYellow", "witch", "skeleton", "spiderWeb", "trickTreat", "calacaOne", "turkey", "farmer", "knight", "yellowCracksPurple", "arcticFox", "whistle", "penguinBlue", "goldenHotChocolate", "blastball", "blastballGimchester", "blastballKitcelona", "pufferJacket", "christmasTree", "rudolph", "snowball", "santaClaus", "causticWaterBlue", "causticWaterRed", "causticWaterGreen", "causticWaterCaribe", "causticWaterOcean", "causticWaterPurple", "taco", "gimKing", "sketchBlue", "valenTime", "referee", "pilot", "sprinklesChocolate", "miningCart", "rainCloud", "watermelon", "terrainBlock", "floatingTube", "miner", "sproutingFlower", "discoBall", "luckyClover", "shark", "axolotlPink", "axolotlBlue", "axolotlYellow", "astroCaptain", "tuxedo", "blacksmith", "eclipse", "redDino", "sockGremlin", "dotsBluePink", "dotsGreenBlue", "dotsPurpleGreen", "dotsPurpleYellow", "dotsYellowOrange", "dotsYellowPurple", "crayonBox", "8bit", "8bitPurple", "8bitYellow", "8bitRed", "8bitBlue", "strawberry", "brainJar", "viking", "marshmallow", "zombieTruckPurple", "rollercoaster", "pufferFish", "zombieGeckoGreen", "8bitFox", "defender", "rainDrop", "doc", "golden", "costumeGimfish", "costumeOctopus", "vanGogh", "beetle", "mantis", "wavesFire", "wavesCalmSea", "wavesApple", "wavesNight", "wavesBorealis", "tennisPlayer", "bigEye", "vampire", "wraith", "frankengim", "deadMariachi", "7thAnniversary", "incognito", "smashedPotatoes", "atom", "wavesCandy", "wavesFantasy", "wavesIcecream", "angel", "ant", "bat", "costumeBear", "bee", "broccoli", "burger", "butterfly", "calacaTwo", "calacaThree", "camoGreen", "caramelApple", "costumeCat", "caterpillar", "glyphsOrangeBlue", "cellBlue", "costumeChicken", "circusBall", "clown", "dragon", "elf", "costumeFish", "gamerGreen", "gamerPink", "gamerPurple", "gamerYellow", "picasso", "hotdogVendor", "ladybug", "mondrian", "moon", "moth", "pinata", "pretzel", "racoon", "redPanda", "toaster", "tourist", "yarn", "sentryRobot", "frozenMummy", "evilPlantGreen", "evilPlantPink", "mayorCoal", "zombieBasicGrey", "zombieCactusGreen", "zombieGeckoGrey", "zombieTornadoBrown", "zombieRockGrey", "zombieCageGrey", "zombieTruckGrey", "zombieBasicTan", "zombieCactusBrightGreen", "zombieTornadoGreen", "zombieRockDarkGrey", "zombieCageTan", "zombieTruckGreen", "zombieBasicPurple", "zombieCactusPurple", "zombieGeckoPurple", "zombieTornadoPurple", "zombieRockPurple", "zombieCagePurple"];
const gadgetImage = ["snowball_launcher", "zapper", "slingshot", "muffin_launcher", "quantum_portal", "evil_eye", "blaster", "pickaxe", "pixel", "rock", "cactus", "tornado", "hammer"];
const images = [`https://www.gimkit.com/assets/map/characters/spine/preview/${cosmeticImage[Math.floor(Math.random() * 261)]}.png`, `https://www.gimkit.com/assets/map/inventory/weapons/${gadgetImage[Math.floor(Math.random() * 13)]}.png`, "https://www.gimkit.com/assets/map/characters/spine/preview/construction.png"];
const contentContainer = document.getElementById("home-container");
headings.forEach((heading, index) => {
    const contentDiv = document.createElement("div");
    contentDiv.className = "content-div";
    if (index % 2 === 0) contentDiv.classList.add("even");
    const textDiv = document.createElement("div");
    textDiv.className = "text-div";
    const h1 = document.createElement('h1');
    h1.textContent = heading;
    const h2 = document.createElement('h2');
    const aTag = document.createElement('a');
    aTag.href = links[index];
    aTag.className = index > 0 ? "alternate" : "default";
    aTag.textContent = "Check It Out Now! >";
    h2.innerHTML = `${subheadings[index]} `;
    h2.appendChild(aTag);
    textDiv.appendChild(h1);
    textDiv.appendChild(h2);
    const imgDiv = document.createElement('div');
    imgDiv.className = "img-div";
    const img = document.createElement('img');
    img.src = images[index];
    img.onerror = () => {
        img.src = "https://www.gimkit.com/assets/map/devices/item_granter/question-mark-2.png";
    };
    imgDiv.appendChild(img);
    if (index % 2 === 0) {
        contentDiv.appendChild(textDiv);
        contentDiv.appendChild(imgDiv);
    } else {
        contentDiv.appendChild(imgDiv);
        contentDiv.appendChild(textDiv);
    }
    contentContainer.appendChild(contentDiv);
});