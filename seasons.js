
const names = ["Zenith", "Peggie", "Gus", "Daisy", "Summit Seeker", "Crumble", "Fizz", "Sprout", "Coil", "2024 Season 1 Ticket", "Summit Sunset", "Kite", "Climbing Rope", "Lily Pad", "Climbing Axe", "Ladder", "Boing", "Flurry", "Whistler", "Harold", "Golden Cocoa", "BlastBro", "Gimaldo", "Gimessi", "Speech Blast", "Iceprints", "Ball Blast", "2024 Season 2 Ticket", "Red Card", "Yellow Card", "Ref's Whistle", "Gimchester United", "Kitcelona", "MineRide", "Cumulus", "Melody", "Block Party", "Life Saver", "Doug", "Sprout", "Tweeters", "Dug Up", "Beachfall", "2024 Season 3 Ticket", "What A Slice!", "Flip Flops", "Sunglasses", "Lil' Sprout", "Pickaxe", "Truck-O-Tron", "Custom Coaster", "Poppy", "Geckasaurus", "DODG3", "Crimson Cruz", "Drizzle", "Dr. Synapse", "Downpour", "Fruit By The Bit", "Boo!", "Zombie Treats", "2025 Season 1 Ticket", "R.I.P", "Top Of The World", "Chemical Supreme", "Web", "'Brella"];
const filenames = ["mountain", "tent", "goat", "daisy", "climber", "cookie", "bubble", "flowers", "metal_spring", "season_1_2024", "mountain_sunset", "kite", "rope", "lily_pad", "climbing_axe", "ladder", "metal_spring",  "arcticFox", "whistle", "penguinBlue", "goldenHotChocolate", "blastball", "blastballGimchester", "blastballKitcelona", "blastball_phrases", "penguin_footprints", "blastball", "season_2_2024", "red_card", "yellow_card", "metal_whistle", "gimchester_united", "kitcelona", "miningCart", "rainCloud", "watermelon", "terrainBlock", "floatingTube", "miner", "sproutingFlower", "birds", "mining_terrains", "beachball", "season_3_2024", "watermelon_slice", "flipflops", "sunglasses", "sprouting_flower", "pickaxe", "zombieTruckPurple", "rollercoaster", "pufferFish", "zombieGeckoGreen", "8bitFox", "defender", "rainDrop", "doc", "raindrop", "block_fruits", "ghosts", "brain", "season_1_2025", "tombstone", "coaster", "chemicals", "spider_web", "umbrella"];
const cosmeticType = ["Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Trail", "Trail", "Trail", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Trail", "Trail", "Trail", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Trail", "Trail", "Trail", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Gim", "Trail", "Trail", "Trail", "Trail", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker", "Sticker"];
const seasonNum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
const rarities = ["Legendary", "Epic", "Epic", "Epic", "Rare", "Rare", "Epic", "Rare", "Rare", "Legendary", "Epic", "Epic", "Rare", "Rare", "Rare", "Uncommon", "Uncommon", "Legendary", "Epic", "Epic", "Epic", "Rare", "Rare", "Rare", "Legendary", "Rare", "Rare", "Legendary", "Epic", "Epic", "Rare", "Rare", "Rare", "Legendary", "Epic", "Epic", "Epic", "Rare", "Rare", "Rare", "Epic", "Rare", "Rare", "Legendary", "Epic", "Epic", "Rare", "Uncommon", "Uncommon", "Legendary", "Legendary", "Epic", "Epic", "Epic", "Rare", "Rare", "Rare", "Legendary", "Epic", "Rare", "Rare", "Legendary", "Rare", "Rare", "Rare", "Rare", "Rare"];
const description = ["Never stop. Reach the top.", "A checkpoint between each adventure.", "Champion. Legend. Greatest Of All Time", "Always pointing up towards the sun.", "Up to the top, no matter what.", "Not a chip on my shoulder.", "Float away.", "Growing wisely.", "A springy good time.", "All aboard! Your ticket for 2024 Season 1.", "Was well worth the climb.", "Wave in the wind.", "Up we go!", "Hop on!", "Claw your way to the top.", "Step by step.", "Spring into action!", "Frosty fur, fiery spirit.", "Someone you don't want to hear from.", "Ready to wattle.", "24 karat cocoa.", "Used to being knocked around.", "Gimchester United's star striker.", "Kitcelona's top goal scorer.", "Communication is key.", "Those sure are some happy feet.", "Roll with the flow.", "Blast off! Your ticket for 2024 Season 2.", "You're outta here!", "You've been warned!", "Stop the play!", "Represent Gimchester United!", "Represent Kitcelona!", "Keeping production on track.", "The forecast calls for rain.", "Slice into summer.", "Animated: cycles through different terrains!", "Keeping it afloat.", "Keep digging just a little further!", "Flower power!", "Fly away!", "Look what I discovered!", "Get it over the net!", "Discover new treasure! Your ticket for 2024 Season 3.", "Refreshing!", "Might want to use these on Sandy Shores.", "Shades on!", "They grow up so fast.", "Mine & climb.", "Eat my dust...", "Design your own rollercoaster!", "You're blowing this way out of proportion!", "One of The Horde's fast little rascals.", "Qu1ck 0n my f33t. Try t0 c4tch up.", "I won't let The Horde reach the bunker!", "Make it rain!", "The doctor is in! What shall we brew today?", "Caution: floor slippery when standing near me.", "Retro refreshment.", "They won't stay around long.", "All brains lead back to you...", "Proof that we survived Day 143 of 2025 Season 1.", "", "It's all downhill from here...", "A powerful concoction.", "A sticky situation.", "When it rains, it pours!"];
const collection = ["Elevation", "Trail Mix", "", "Blossom", "Trail Mix", "Baked Bites", "Pop", "Blossom", "", "", "Land Meets The Sky", "", "Trail Mix", "", "Trail Mix", "", "", "Fox Five", "Blastball", "Arctic", "24K", "Blastball", "Gimchester United", "Kitcelona", "Blastball", "Arctic", "Blastball", "", "Blastball", "Blastball", "Blastball", "Gimchester United", "Kitcelona", "Gold Rush", "Storm", "BBQ", "Gold Rush", "Beach", "Gold Rush", "Blossom", "", "Gold Rush", "Beach", "", "BBQ", "Beach", "Beach", "Blossom", "Gold Rush", "Horde", "Magic Gimdom Park", "", "Horde", "", "Horde", "Storm", "Chemical Supreme", "Storm", "", "", "", "", "", "Magic Gimdom Park", "Chemical Supreme", "", "Storm"];
const seasonNames = ["2024 Season 1", "2024 Season 2", "2024 Season 3", "2025 Season 1", "2025 Season 2"];
const buttonContainer = document.getElementById('button-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const modalHeader = document.getElementById('modal-header');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('#close-modal-button');
function createButtons() {
    const sections = {};
    const sectionOrder = [];
    const gradients = ["linear-gradient(to top, blue, teal)", "linear-gradient(to top, teal, lightgreen)", "linear-gradient(to top, red, orange)", "linear-gradient(to top, teal, hotpink)", "linear-gradient(to top, bottomcolor, topcolor)"];
    const bannerImages = ["season_1_2024", "season_2_2024", "season_3_2024", "season_1_2025", "season_2_2025"];
    names.forEach((name, index) => {
        const season = `Season ${seasonNum[index]}`;
        if (!sections[season]) {
            sections[season] = document.createElement('div');
            sections[season].classList.add('section');
            const seasonIndex = seasonNum[index] - 1;
            const banner = document.createElement('div');
            const bannerImg = document.createElement('img');
            const bannerText = document.createElement('div');
            banner.classList.add('section-banner');
            banner.style.background = gradients[seasonIndex % gradients.length];
            bannerImg.src = `https://www.gimkit.com/assets/map/stickers/${bannerImages[seasonIndex % bannerImages.length]}.png`;
            bannerImg.onload = () => {
            const originalWidth = bannerImg.naturalWidth;
            const originalHeight = bannerImg.naturalHeight;
            if (originalHeight > originalWidth) {
                bannerImg.style.height = "15vw";
                bannerImg.style.width = `${(originalWidth / originalHeight) * 15}vw`;
            } else {
                bannerImg.style.width = "15vw";
                bannerImg.style.height = `${(originalHeight / originalWidth) * 15}vw`;
            }
            bannerImg.style.paddingTop = `${7.5 - (parseFloat(bannerImg.style.height) / 2)}vw`;
            bannerImg.style.paddingBottom = `${7.5 - (parseFloat(bannerImg.style.height) / 2)}vw`;
            bannerImg.style.paddingLeft = `${7.5 - (parseFloat(bannerImg.style.width) / 2)}vw`;
            bannerImg.style.paddingRight = `${7.5 - (parseFloat(bannerImg.style.width) / 2)}vw`;
            };
            bannerText.textContent = seasonNames[seasonIndex];
            banner.appendChild(bannerImg);
            banner.appendChild(bannerText);
            sections[season].appendChild(banner);
            sectionOrder.push(season);
            if (bannerImages[seasonIndex % bannerImages.length] === bannerImages[bannerImages.length - 1]) {
                bannerImg.style.marginTop = `5vw`;
            }
        }
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = cosmeticType[index] === "Gim" ? `https://www.gimkit.com/assets/map/characters/spine/preview/${filenames[index]}.png`: cosmeticType[index] === "Sticker" ? `https://www.gimkit.com/assets/map/stickers/${filenames[index]}.png` : cosmeticType[index] === "Trail" ? `https://www.gimkit.com/assets/map/trails/${filenames[index]}/preview.png` : "https://www.gimkit.com/assets/map/devices/item_granter/question-mark-2.png";
        img.onload = () => {
            const originalWidth = img.naturalWidth;
            const originalHeight = img.naturalHeight;
            if (originalHeight > originalWidth) {
                img.style.height = "10vw";
                img.style.width = `${(originalWidth / originalHeight) * 10}vw`;
            } else {
                img.style.width = "10vw";
                img.style.height = `${(originalHeight / originalWidth) * 10}vw`;
            }
            img.style.paddingTop = `${5 - (parseFloat(img.style.height) / 2)}vw`;
            img.style.paddingBottom = `${5 - (parseFloat(img.style.height) / 2)}vw`;
            img.style.paddingLeft = `${5 - (parseFloat(img.style.width) / 2)}vw`;
            img.style.paddingRight = `${5 - (parseFloat(img.style.width) / 2)}vw`;
        };
        button.classList.add('button', rarities[index].toLowerCase());
        button.setAttribute('data-category', rarities[index]);
        button.addEventListener('click', () => showModal(index));
        button.appendChild(img);
        button.appendChild(document.createTextNode(name));
        sections[season].appendChild(button);
    });
    sectionOrder.sort((a, b) => parseInt(b.split(" ")[1]) - parseInt(a.split(" ")[1]));
    sectionOrder.forEach((season) => buttonContainer.appendChild(sections[season]));
}
modalContent.style.width = `70vw`;
const modalRarityColors = {"Uncommon": "#2da100", "Rare": "#007194", "Epic": "#4f02ae", "Legendary": "#b2b400"};
function showModal(index) {
    window.location.hash = filenames[index];
    modal.style.display = "flex";
    modal.classList.add("open");
    modalImage.src = cosmeticType[index] === "Gim" ? `https://www.gimkit.com/assets/map/characters/spine/preview/${filenames[index]}.png` : cosmeticType[index] === "Sticker" ? `https://www.gimkit.com/assets/map/stickers/${filenames[index]}.png` : cosmeticType[index] === "Trail" ? `https://www.gimkit.com/assets/map/trails/${filenames[index]}/preview.png` : "https://www.gimkit.com/assets/map/devices/item_granter/question-mark-2.png";
    modalImage.onload = () => {
            const originalWidth = modalImage.naturalWidth;
            const originalHeight = modalImage.naturalHeight;
            if (originalHeight > originalWidth) {
                modalImage.style.height = "20vw";
                modalImage.style.width = `${(originalWidth / originalHeight) * 20}vw`;
            } else {
                modalImage.style.width = "20vw";
                modalImage.style.height = `${(originalHeight / originalWidth) * 20}vw`;
            }
            modalImage.style.paddingTop = `${10 - (parseFloat(modalImage.style.height) / 2)}vw`;
            modalImage.style.paddingBottom = `${10 - (parseFloat(modalImage.style.height) / 2)}vw`;
            modalImage.style.paddingLeft = `${10 - (parseFloat(modalImage.style.width) / 2)}vw`;
            modalImage.style.paddingRight = `${10 - (parseFloat(modalImage.style.width) / 2)}vw`;
        };
    modalHeader.textContent = `${names[index]}`;
        let collectionMessage = collection[index] === "" ? "not part of any" : `part of the ${collection[index]}`;
        let aan1 = (rarities[index] === "Uncommon" || rarities[index] === "Epic") ? "an" : "a";
        let descMessage = description[index] === "" ? `${names[index]} does not have a description.` : `${names[index]}'s description reads "${description[index]}"`;
        const rarity = rarities[index];
        if (modalRarityColors[rarity]) {
        modalContent.style.backgroundColor = modalRarityColors[rarity];
        } else {
            modalContent.style.backgroundColor = "#00000000"
        }
    switch (seasonNum[index]) {
        case 1:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} ${cosmeticType[index]} which can be obtained by owning the 2024 Season 1 Ticket, which could be purchased for $5 USD. <br>${names[index]} released on August 30th, 2023. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. <br>The 2024 Season 1 Ticket is no longer able to be purchased. <br>${names[index]} is known as "${filenames[index]}" in the files.`;
            break;
        case 2:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} ${cosmeticType[index]} which can be obtained by owning the 2024 Season 2 Ticket, which could be purchased for $5 USD. <br>${names[index]} released on December 6th, 2023. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. <br>The 2024 Season 2 Ticket is no longer able to be purchased. <br>${names[index]} is known as "${filenames[index]}" in the files.`;
            break;
        case 3:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} ${cosmeticType[index]} which can be obtained by owning the 2024 Season 3 Ticket, which could be purchased for $5 USD. <br>${names[index]} released on March 6th, 2024. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. <br>The 2024 Season 3 Ticket is no longer able to be purchased. <br>${names[index]} is known as "${filenames[index]}" in the files.`;
            break;
        case 4:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} ${cosmeticType[index]} which can be obtained by owning the 2025 Season 1 Ticket, which could be purchased for $5 USD. <br>${names[index]} released on August 21st, 2024. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. <br>The 2025 Season 1 Ticket will no longer be able to be purchased on December 4th, 2024. <br>${names[index]} is known as "${filenames[index]}" in the files.`; //<br>The 2025 Season 1 Ticket is no longer able to be purchased.
            break;
        case 5:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} ${cosmeticType[index]} which can be obtained by owning the 2025 Season 2 Ticket, which could be purchased for $5 USD. <br>${names[index]} released on December 4th, 2024. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. <br>The 2025 Season 2 Ticket will no longer be able to be purchased on March 5th, 2025. <br>${names[index]} is known as "${filenames[index]}" in the files.`;
            break;
    }
}
function closeModal() {
    modal.classList.remove("open");
    modal.classList.add("closing");
    setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
    }, 250);
    history.pushState("", document.title, window.location.pathname + window.location.search);
}
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
window.addEventListener("load", () => {
    createButtons();
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    const index = filenames.indexOf(hash);
    if (index !== -1) {
        showModal(index);
    } else {
        closeModal();
    }
});