/*const names = ["Day One", "Echo Agent", "Green Split", "Stache", "Vortex Agent", "Graydient", "Kynami", "Red Sprinkles"];
        */const filenames = ["dayOne", "echoAgent", "stripeDoubleGreen", "mustache", "vortexAgent", "grayGradient", "redNinja", "sprinklesRed"];
        const info = ["Day One is...", "Echo Agent Is...", "Green Split is...", "Stache is...", "Vortex Agent is...", "Graydient is...", "Kynami is...", "Red Sprinkles is..."];
        const categories = ["Epic", "Rare", "Uncommon", "Rare", "Rare", "Uncommon", "Epic", "Uncommon"];
        const buttonContainer = document.getElementById('button-container');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const modalHeader = document.getElementById('modal-header');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.getElementById('close-btn');
        const searchInput = document.getElementById('search-input');
        function createButtons() {
            names.forEach((name, index) => {
                const button = document.createElement('button');
                const img = document.createElement('img');
                img.src = `https://www.gimkit.com/assets/map/characters/spine/preview/${filenames[index]}.png`;
                button.classList.add('button');
                button.setAttribute('data-category', categories[index]);
                button.classList.add(categories[index].toLowerCase());
                button.addEventListener('click', () => showModal(index));
                button.appendChild(img);
                button.appendChild(document.createTextNode(name));
                buttonContainer.appendChild(button);
            });
        }
        function showModal(index) {
            modal.style.display = "flex";
            modalImage.src = `https://www.gimkit.com/assets/map/characters/spine/preview/${filenames[index]}.png`;
            modalHeader.textContent = `About ${names[index]}`;
            modalBody.textContent = info[index];
        }
        function closeModal() {
            modal.style.display = "none";
        }
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        window.addEventListener("load", () => {
            modal.style.display = "none";
            createButtons();
        });
        function filterButtons() {
            const searchText = searchInput.value.toLowerCase();
            const buttons = document.querySelectorAll('#button-container button');
            buttons.forEach(button => {
                const text = button.innerText.toLowerCase();
                if (text.includes(searchText)) {
                    button.style.display = 'flex';
                } else {
                    button.style.display = 'none';
                }
            });
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

/**/


        // URL of the raw text file on GitHub
const fileUrl = 'https://raw.githubusercontent.com/your-username/your-repository/main/names.txt';

// Initialize the names array
let names = [];

// Fetch the text file content
fetch(fileUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load the file');
        }
        return response.text();  // Parse the content of the file as text
    })
    .then(data => {
        // Split the text into an array, assuming each name is on a new line
        names = data.split('\n').map(name => name.trim()); // Trim any extra spaces or line breaks
        console.log(names); // Log the array to the console (optional)

        // Display the names array in the <pre> tag on the webpage
        document.getElementById('namesList').textContent = JSON.stringify(names, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('namesList').textContent = 'Error loading names.';
    });
