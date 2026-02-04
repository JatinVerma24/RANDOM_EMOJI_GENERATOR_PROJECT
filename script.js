const btn = document.getElementById("btn");
const emojiGrid = document.getElementById("emoji-grid");
const toast = document.getElementById("toast");
// {I DIDN'T USE API KEY INSTEAD USED LOCAL ARRAY OF OBJECTS TO STORE EMOJIS}

const emojiList = [
    { char: "😀", name: "Grinning Face" },
    { char: "😎", name: "Sunglasses Face" },
    { char: "🚀", name: "Rocket" },
    { char: "🎉", name: "Party Popper" },
    { char: "🔥", name: "Fire" },
    { char: "💻", name: "Laptop" },
    { char: "🍕", name: "Pizza" },
    { char: "🐱", name: "Cat Face" },
    { char: "🌈", name: "Rainbow" },
    { char: "🦄", name: "Unicorn" },
    { char: "💡", name: "Light Bulb" },
    { char: "🎨", name: "Artist Palette" },
    { char: "🎧", name: "Headphones" },
    { char: "⚡", name: "High Voltage/light" },
    { char: "🌟", name: "Glowing Star" },
    { char: "🥶", name: "Cold Face" },
    { char: "🤯", name: "Exploding Head" },
    { char: "👻", name: "Ghost" },
    { char: "👾", name: "Alien Monster" },
    { char: "🤖", name: "Robot" },
    { char: "🎃", name: "Jack-O-Lantern" },
    { char: "🎄", name: "Christmas Tree" },
    { char: "⚽", name: "Soccer Ball" },
    { char: "🎮", name: "Video Game" },
    { char: "🏆", name: "Trophy" },
    { char: "🌺", name: "Flower" },
    { char: "🍔", name: "burger" },
    { char: "🧁", name: "Cupcake" },
    { char: "🍹", name: "ColdDrink" },
    { char: "✈️", name: "Airplane" },
    { char: "🏖️", name: "Beach with Umbrella" },
    { char: "🏰", name: "Castle" },
    { char: "🎡", name: "Wheel in ferry" },
    { char: "📷", name: "Camera" },
    { char: "💎", name: "Diamond" },
    { char: "🛎️", name: "Bell" },
    { char: "🧬", name: "DNA" },
    { char: "🧸", name: "Teddy Bear" },
    { char: "🎁", name: "Wrapped Gift" },
    { char: "🎈", name: "Balloon" },
    { char: "💦", name: "water" }

];

window.addEventListener('DOMContentLoaded', generateEmoji); 

btn.addEventListener("click", generateEmoji);

function generateEmoji() {
    emojiGrid.innerHTML = ''; 
    
    for (let i = 0; i < 15; i++) {
        const randomNum = Math.floor(Math.random() * emojiList.length);
        const selectedEmoji = emojiList[randomNum];
        
        const emojiCard = document.createElement('div');
        emojiCard.classList.add('emoji-card');
        
        const emojiDisplay = document.createElement('div');
        emojiDisplay.classList.add('emoji-display');
        emojiDisplay.innerText = selectedEmoji.char;
        
        const emojiName = document.createElement('div');
        emojiName.classList.add('emoji-name');
        emojiName.innerText = selectedEmoji.name;
        
        emojiCard.addEventListener('click', () => {
            copyToClipboard(selectedEmoji.char, selectedEmoji.name);
        });
        
        emojiCard.appendChild(emojiDisplay);
        emojiCard.appendChild(emojiName);
        emojiGrid.appendChild(emojiCard);
    }
    
    const btnIcon = btn.querySelector('.btn-icon');
    btnIcon.style.transform = `rotate(${Math.random() * 360}deg)`;
}

function copyToClipboard(emojiChar, emojiName) {
    navigator.clipboard.writeText(emojiChar).then(() => {
        showToast(`Copied ${emojiChar} (${emojiName}) to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy 😢');
    });
}

function showToast(message) {
    toast.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function createParticles() {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;

        document.body.appendChild(particle);
    }
}

createParticles();
