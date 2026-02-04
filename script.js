const btn = document.getElementById("btn");
const emoji = document.getElementById("emoji");
const emojiName = document.getElementById("emoji-name");
const emojiCard = document.querySelector(".emoji-card");
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

emojiCard.addEventListener("click", copyToClipboard);

function generateEmoji() {
    const randomNum = Math.floor(Math.random() * emojiList.length);
    const selectedEmoji = emojiList[randomNum];

    emoji.innerText = selectedEmoji.char;
    emojiName.innerText = selectedEmoji.name;

    emoji.style.animation = 'none';
    emoji.offsetHeight; 
    emoji.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    const btnIcon = btn.querySelector('.btn-icon');
    btnIcon.style.transform = `rotate(${Math.random() * 360}deg)`;
}

function copyToClipboard() {
    const textToCopy = emoji.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied ${textToCopy} to clipboard!`);
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
