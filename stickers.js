const names = ["Origin Trophy", "Next Chapter", "Strawberry", "Mug", "Sparko", "Overcast", "Flashlight", "Fifth Wish", "High... Five", "Pointing Up", "Echo Flag", "Vortex Flag", "Thank You!", "Happy Holidays", "Merry Christmas", "Happy Hanukkah", "Happy Kwanzaa", "2023", "Firesky", "Lucky Bucket", "Pirate Plunder", "Red Heart", "Pink Heart", "No Clue", "Round We Go", "Opposites Attract", "Tenebris", "Mortarboard", "Banana Slip", "Pride Flag", "Electric Guitar", "UV Ray", "2024 Season 1 Ticket", "Summit Sunset", "Kite", "Climbing Rope", "Lily Pad", "Climbing Axe", "Ladder", "Boing", "Ace Of Spades", "Time Consuming", "Vertical Puzzle Piece", "Safeguard", "Trick!", "Treat!", "Raveena's Pot", "Libre Tag", "Wish #6", "Half-Dozen Celebration", "Thanksgiving Dinner", "Pumpkin Pie", "2024 Season 2 Ticket", "Red Card", "Yellow Card", "Ref's Whistle", "Gimchester United", "Kitcelona", "Snow Splat", "2024", "Horizontal Puzzle Piece", "#2", "Lovely Timing", "Gim Appreciation Mug", "Tape", "2024 Season 3 Ticket", "What A Slice!", "Flip Flops", "Sunglasses", "Lil' Sprout", "Pickaxe", "Trouble Ahead", "Spring", "Compass", "Chompz On The Run", "Start Game", "Emberwall Shield (Red)", "Emberwall Shield (Blue)", "2025 Season 1 Ticket", "R.I.P", "Top Of The World", "Chemical Supreme", "Web", "'Brella", "We're Back!", "I'm Ready", "Scroll", "Raveena's Broom", "Jack O' Lantern", "Skeletal Sombrero", "Confettius", "Sweet Number Seven", "Seven Up!", "Mashed Potatoes", "I Love Autumn", "Brush", "Cactus", "Candy Cane", "Caramel Apple", "Crown", "I Love Winter", "Knight Helmet", "Let It Bee", "Paint", "Palette", "Treasure"];      
const filenames = ["founder_trophy", "blue_book", "strawberry", "mug", "dolphin", "clouds", "flashlight", "five_candle", "five_balloon", "up_arrow", "echo_flag", "vortex_flag", "thank_you", "happy_holidays", "merry_christmas", "hanukkah", "kwanzaa", "twenty_three", "fireworks", "gimfish_bucket", "treasure_chest", "red_heart", "pink_heart", "magnify_glass", "hamster_wheel", "yin_yang", "lunar", "graduation_hat", "banana_peel", "pride_flag", "guitar", "sun_sunglasses", "season_1_2024", "mountain_sunset", "kite", "rope", "lily_pad", "climbing_axe", "ladder", "metal_spring", "ace_of_spades", "clock", "green_puzzle", "crash_test", "trick", "treat", "witch_pot", "luchador_mask", "six_candle", "six_balloon", "thanksgiving_dinner", "pumpkin_pie", "season_2_2024", "red_card", "yellow_card", "metal_whistle", "gimchester_united", "kitcelona",  "snowball_splat", "twenty_four", "pink_puzzle", "pencil", "heart_clock", "love_mug", "gray_tape", "season_3_2024", "watermelon_slice", "flipflops", "sunglasses", "sprouting_flower", "pickaxe", "danger_sign", "spring", "compass", "red_dino", "retro_controller", "shield_red", "shield_blue", "season_1_2025", "tombstone", "coaster", "chemicals", "spider_web", "umbrella", "back_to_school", "new_school_year", "scroll", "broom", "halloween_pumpkin", "skeleton_sombrero", "birthday_seven_gim", "birthday_seven_cupcake", "birthday_seven_balloon", "smashed_potatoes", "i_love_autumn", "brush", "cactus", "candy_cane", "caramel_apple", "crown", "i_love_winter", "knight_helmet", "bee", "paint", "palette", "treasure"];
const rarities = ["Epic", "Uncommon", "Uncommon", "Uncommon", "Rare", "Uncommon", "Uncommon", "Epic", "Rare", "Uncommon", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Uncommon", "Epic", "Rare", "Uncommon", "Uncommon", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Epic", "Epic", "Epic", "Legendary", "Epic", "Epic", "Rare", "Rare", "Rare", "Uncommon", "Uncommon", "Epic", "Rare", "Uncommon", "Uncommon", "Rare", "Rare", "Rare", "Rare", "Epic", "Rare", "Rare", "Rare", "Legendary", "Epic", "Epic", "Rare", "Rare", "Rare", "Uncommon", "Rare", "Uncommon", "Rare", "Rare", "Rare", "Uncommon", "Legendary", "Epic", "Epic", "Rare", "Uncommon", "Uncommon", "Epic", "Rare", "Rare", "Rare", "Uncommon", "Uncommon", "Uncommon", "Legendary", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Rare", "Uncommon", "Rare", "Epic", "Rare", "Epic", "Epic", "Rare", "Rare", "Epic", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased", "Unreleased"];
const price = [350, 150, 150, 150, 250, 150, 150, 0, 0, 150, 250, 250, 250, 250, 250, 250, 250, 250, 150, 350, 250, 150, 150, 250, 250, 250, 250, 250, 250, 0, 350, 350, "$5", "$5", "$5", "$5", "$5", "$5", "$5", "$5", 350, 250, 150, 150, 250, 250, 250, 250, 0, 0, 250, 250, "$5", "$5", "$5", "$5", "$5", "$5", 150, 250, 150, 250, 250, 250, 150, "$5", "$5", "$5", "$5", "$5", "$5", 350, 250, 250, 250, 150, 150, 150, "$5", "$5", "$5", "$5", "$5", "$5", 250, 250, 150, 250, 350, 250, 0, 0, 0, 250, 350];
const release = ["September 20th, 2022", "September 20th, 2022", "September 27th, 2022", "September 27th, 2022", "October 4th, 2022", "October 18th, 2022", "October 25th, 2022", "November 1st, 2022", "November 1st, 2022", "November 8th, 2022", "November 15th, 2022", "November 15th, 2022", "November 22nd, 2022", "December 13th, 2022", "December 13th, 2022", "December 13th, 2022", "December 13th, 2022", "December 30th, 2022", "December 30th, 2022", "January 10th, 2023", "January 24th, 2023", "February 7th, 2023", "February 7th, 2023", "February 21st, 2023", "March 7th, 2023", "March 21st, 2023", "March 28th, 2023", "May 16th, 2023", "May 23rd, 2023", "May 30th, 2023", "June 6th, 2023", "June 13th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "September 6th, 2023", "September 20th, 2023", "September 20th, 2023", "October 4th, 2023", "October 11th, 2023", "October 11th, 2023", "October 11th, 2023", "November 1st, 2023", "November 8th, 2023", "November 8th, 2023", "November 15th, 2023", "November 15th, 2023", "December 6th, 2023", "December 6th, 2023", "December 6th, 2023", "December 6th, 2023", "December 6th, 2023", "December 6th, 2023", "December 6th, 2023", "December 29th, 2023", "January 17th, 2024", "January 24th, 2024", "February 7th, 2024", "February 21st, 2024", "February 28th, 2024", "March 6th, 2024", "March 6th, 2024", "March 6th, 2024", "March 6th, 2024", "March 6th, 2024", "March 6th, 2024", "March 6th, 2024", "March 20th, 2024", "April 3rd, 2024", "April 17th, 2024", "May 8th, 2024", "May 29th, 2024", "May 29th, 2024", "August 21st, 2024", "August 21st, 2024", "August 21st, 2024", "August 21st, 2024", "August 21st, 2024", "August 21st, 2024", "August 28th, 2024", "August 28th, 2024", "September 18th, 2024", "October 16th, 2024", "October 23rd, 2024", "October 30th, 2024", "November 6th, 2024", "November 6th, 2024", "November 6th, 2024", "November 20th, 2024", "November 27th, 2024"];
const description = ["Number one since day one.", "Can't wait to see what happens next.", "Have a bite!", "Careful, it's hot!", "", "", "I can see you.", "Make it a special one.",  "Only up from here.", "Up, up, and away!", "In this case, a white flag does not mean surrender.", "Agents, gather around.", "Appreciate you.", "", "", "", "", "Happy New Year!", "Is this the finale?", "Must be my lucky day.", "", "", "", "Sorry boss. No leads on this one.", "", "", "One giant leap for gimkind...", "Turn the tassel...", "Caution: slippery...all the time. It's slippery all the time.", "", "", "Shining bright. Maybe a little too bright.", "All aboard! Your ticket for 2024 Season 1.", "Was well worth the climb.", "Wave in the wind.", "Up we go!", "Hop on!", "Claw your way to the top.", "Step by step.", "Spring into action!", "Royal flush.", "Correct twice a day.", "", "Brace for impact.", "", "", "Brewing something...dangerous.", "", "Make it a special one.", "Only up from here.", "", "", "Blast off! Your ticket for 2024 Season 2.", "You're outta here!", "You've been warned!", "Stop the play!", "Represent Gimchester United!", "Represent Kitcelona!", "Result of a snowbrawl.", "Happy New Year!", "", "Lead the way.", "", "", "", "Discover new treasure! Your ticket for 2024 Season 3.", "Refreshing!", "Might want to use these on Sandy Shores.", "Shades on!", "They grow up so fast.", "Mine & climb.", "Might want to stay away.", "Showers bring flowers!", "Point the way.", "Hungry for dinner.", "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️", "", "", "Proof that we survived Day 143 of 2025 Season 1.", "", "It's all downhill from here...", "A powerful concoction.", "A sticky situation.", "When it rains, it pours!", "Time for another great year!", "Ready to take on the new school year!", "Secrets unknown.", "", "", "", "", "", "", "", ""];
const collection = ["Genesis", "", "Berry Delicious", "", "", "Storm", "", "Gimkit's Fifth Birthday", "Gimkit's Fifth Birthday", "", "Recess Rivalery", "Recess Rivalery", "Thanksgiving", "", "", "", "", "", "Fire Works", "Fishtopia", "Arrrrggg!", "Love Squad", "Love Squad", "Every Detail", "Hamster Hideout", "Yin & Yang", "Alphastar", "Graduation", "Peeled", "", "Rock Out", "", "", "Land Meets The Sky", "", "Trail Mix", "", "Trail Mix", "", "", "Sleight Of Hand", "Tick Tock", "Jigsaw", "Crash Test", "Halloween", "Halloween", "Dark Sorcery", "Lucha", "Gimkit's Sixth Birthday", "Gimkit's Sixth Birthday", "Thanksgiving", "Thanksgiving", "", "Blastball", "Blastball", "Blastball", "Gimchester United", "Kitcelona", "Frostbite", "", "Jigsaw", "Ink Gang", "Heart Hour", "", "", "", "BBQ", "Beach", "Beach", "Blossom", "Gold Rush", "", "Blossom", "", "Roar", "Retro Arcade", "Emberwall", "Emberwall", "", "", "Magic Gimdom Park", "Chemical Supreme", "", "Storm", "Back To School", "Back To School", "", "Dark Sorcery", "Halloween", "Día De Muertos", "Gimkit's Seventh Birthday", "Gimkit's Seventh Birthday", "Gimkit's Seventh Birthday", "Thanksgiving", ""];
const loco = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "", "", "", "", "", "", "", "", "", "", "", "", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "obtained by owning the 2024 Season 2 Ticket, which could be purchased", "", "", "", "", "", "", "", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "obtained by owning the 2024 Season 3 Ticket, which could be purchased", "", "", "", "", "", "", "", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "obtained by owning the 2025 Season 1 Ticket, which could be purchased", "", "", "", "", "", "", "", "", "", "", ""];
const extraInfo = [`<br>Origin Trophy was the first purchasable sticker. <br>Origin Trophy is no longer able to be purchased from the Item Shop.`, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 2 Ticket is no longer able to be purchased.`, ``, ``, ``, ``, ``, ``, ``, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 3 Ticket is no longer able to be purchased.`, ``, ``, ``, ``, ``, ``, ``, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, `<br>The 2025 Season 1 Ticket will be unable to purchase on December 4th, 2024.`, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];
const buttonContainer = document.getElementById('button-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const modalHeader = document.getElementById('modal-header');
const modalBody = document.getElementById('modal-body');
const searchInput = document.getElementById('search-input');
const closeBtn = document.querySelector('#close-modal-button');
function createButtons() {
    names.forEach((name, index) => {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = `https://www.gimkit.com/assets/map/stickers/${filenames[index]}.png`;
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
        img.onerror = () => {
            img.src = "https://www.gimkit.com/assets/map/devices/item_granter/question-mark-2.png";
        };
        button.classList.add('button');
        button.setAttribute('data-category', rarities[index]);
        button.classList.add(rarities[index].toLowerCase());
        button.addEventListener('click', () => showModal(index));
        button.appendChild(img);
        button.appendChild(document.createTextNode(name));
        buttonContainer.appendChild(button);
    });
}
modalContent.style.width = `70vw`;
const modalRarityColors = {"Uncommon": "#2da100", "Rare": "#007194", "Epic": "#4f02ae", "Legendary": "#b2b400","Unreleased": "#b80024"};
function showModal(index) {
    window.location.hash = filenames[index];
    modal.style.display = "flex";
    modal.classList.add("open");
    modalImage.src = `https://www.gimkit.com/assets/map/stickers/${filenames[index]}.png`;
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
    img.onerror = () => {
        img.src = "https://www.gimkit.com/assets/map/devices/item_granter/question-mark-2.png";
    };
    modalHeader.textContent = `${names[index]}`;
        let priceMessage = price[index] === 0 ? "for free" : price[index] === "$5" ? " for $5 USD" : `for ${price[index]} GimBucks`;
        let collectionMessage = collection[index] === "" ? "not part of any" : `part of the ${collection[index]}`;
        let locoMessage = loco[index] === "" ? "purchased from the Item Shop" : `${loco[index]}`;
        let aan1 = (rarities[index] === "Uncommon" || rarities[index] === "Epic" || rarities[index] === "Unreleased") ? "an" : "a";
        let descMessage = description[index] === "" ? `${names[index]} does not have a description.` : `${names[index]}'s description reads "${description[index]}"`;
        const rarity = rarities[index];
        if (modalRarityColors[rarity]) {
        modalContent.style.backgroundColor = modalRarityColors[rarity];
        } else {
            modalContent.style.backgroundColor = "#fff"
        }
    switch (rarities[index]) {
        case "Unreleased":
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} Sticker, meaning it is not usable or purchasable by the player. <br>${names[index]} is known as "${filenames[index]}" in the files. ${extraInfo[index]}`;
            break;
        default:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} Sticker which can be ${locoMessage} ${priceMessage}. <br>${names[index]} released on ${release[index]}. <br>${descMessage} <br>${names[index]} is ${collectionMessage} collection. ${extraInfo[index]} <br>${names[index]} is known as "${filenames[index]}" in the files.`;
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
function filterButtons() {            
    const searchText = searchInput.value.toLowerCase();
    const buttons = document.querySelectorAll('#button-container button');
    let resultsFound = false;
    buttons.forEach(button => {
        const text = button.innerText.toLowerCase();
        if (text.includes(searchText)) {
            button.style.display = 'flex';
            resultsFound = true;
        } else {
            button.style.display = 'none';
        }
    });
    noResultsMessage.style.display = resultsFound ? 'none' : 'block';
}
function filterByCategory(category) {
    const buttons = document.querySelectorAll('#button-container button');
    buttons.forEach(button => {
        if (category === 'All' || button.getAttribute('data-category') === category) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    const selectedButton = [...categoryButtons].find(btn => btn.textContent.toLowerCase() === category.toLowerCase());
    if (selectedButton) selectedButton.classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    const index = filenames.indexOf(hash);
    if (index !== -1) {
        showModal(index);
    } else {
        closeModal();
    }
});