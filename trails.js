const names = ["Origin Tokens", "Burning Beats", "Slip Up", "Prism Path", "Fizz", "Sprout", "Coil", "Dusty", "Sweet Tooth", "Cráneo", "Falling Behind", "Cob", "Speech Blast", "Iceprints", "Ball Blast", "Trailtilla", "Puzzle Pieces", "Heartbeat", "Cupid's Arrow", "Tweeters", "Dug Up", "Beachfall", "Luck Of The Irish", "Easter Eggs", "Fossil Footprints", "Confetti", "Downpour", "Fruit By The Bit", "Boo!", "Zombie Treats", "Workbench", "Match Point", "Jack Rotten", "Crawlers", "Marigold", "Ruffle", "pumpgim Slice"];
const filenames = ["origin_token", "fire_notes", "banana_peel", "rainbow_dots", "bubble", "flowers", "metal_spring", "dust_particles"];
const rarities = ["Epic", "Rare", "Rare", "Rare", "Epic", "Rare", "Rare", "Epic"];
const price = [1000, 750, 750, 750, "$5", "$5", "$5", 1000];
const release = ["April 18th, 2023", "May 9th, 2023", "May 23rd, 2023", "May 30th, 2023", "August 30th, 2023", "August 30th, 2023", "August 30th, 2023", "September 13th, 2023"];
const description = ["Being an early bird just makes...cents.", "Leave behind a fire song....", "A little overkill for a non-kart-racing game.", "Spread the rainbow.", "Float away.", "Growing wisely.", "A springy good time.", "Leave everybody else in the dust"];
const collection = ["Genesis", "Rock Out", "Slip Up", "", "Pop", "Blossom", "", ""];
const loco = ["", "", "", "", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", "obtained by owning the 2024 Season 1 Ticket, which could be purchased", ""];
const extraInfo = [`<br>Origin Token was the first purchasable trail. <br>Origin Token is no longer able to be purchased from the Item Shop.`, ``, ``, ``, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, `<br>The 2024 Season 1 Ticket is no longer able to be purchased.`, ``];
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
        img.src = `https://www.gimkit.com/assets/map/trails/${filenames[index]}/preview.png`;
        button.classList.add('button');
        button.setAttribute('data-category', rarities[index]);
        button.classList.add(rarities[index].toLowerCase());
        button.addEventListener('click', () => showModal(index));
        button.appendChild(img);
        button.appendChild(document.createTextNode(name));
        buttonContainer.appendChild(button);
    });
}
function updateRightProperty() {
    modalContent.style.width = `70vw`;
    const modalWidth = modalContent.offsetWidth;
    const viewportWidth = window.innerWidth;
    const rightValue = (viewportWidth - modalWidth) / 2;
    closeBtn.style.right = `${rightValue}px`;
}
window.addEventListener('load', updateRightProperty);
window.addEventListener('resize', updateRightProperty);
const modalRarityColors = {"Uncommon": "#2da100", "Rare": "#007194", "Epic": "#4f02ae", "Legendary": "#b2b400", "Unreleased": "#b80024"};
function showModal(index) {
    window.location.hash = filenames[index];
    modal.style.display = "flex";
    modal.classList.add("open");
    modalImage.src = `https://www.gimkit.com/assets/map/trails/${filenames[index]}/preview.png`;
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
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} Trail, meaning it is not usable or purchasable by the player. <br>${names[index]} is known as "${filenames[index]}" in the files. ${extraInfo[index]}`;
            break;
        default:
            modalBody.innerHTML = `${names[index]} is ${aan1} ${rarities[index]} Trail which can be ${locoMessage} ${priceMessage}. <br>${names[index]} released on ${release[index]}. <br>${names[index]}'s description reads "${description[index]}" <br>${names[index]} is ${collectionMessage} collection. ${extraInfo[index]} <br>${names[index]} is known as "${filenames[index]}" in the files.`;
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