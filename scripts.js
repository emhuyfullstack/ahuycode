// scripts.js
const message = `

Sister Truc Zan ngusi xaugai sinh nhat vui ve nhe 🌟

Wishing every day brings you closer to your dreams and that you continue to grow more beautiful and confident with each passing year. May everything go smoothly and be just as you wish. 🎊🥳
`;

let index = 0;
const typingSpeed = 100; // milliseconds
let typingInterval = null;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        index++;
    } else {
        clearInterval(typingInterval); // Stop typing when done
    }
}

window.onload = () => {
    const typingSound = document.getElementById("typingSound");
    const birthdaySong = document.getElementById("birthdaySong");
    const giftButton = document.getElementById("giftButton");
    const ticketImage = document.getElementById("ticketImage");
    const messageElement = document.getElementById("message");

    giftButton.addEventListener('click', () => {
        if (typingInterval) {
            // If typing is active, reset everything
            clearInterval(typingInterval); // Stop typing animation
            typingSound.pause();
            birthdaySong.pause();
            typingSound.currentTime = 0;
            birthdaySong.currentTime = 0;
            index = 0;
            messageElement.innerHTML = '🎈 Happy Birthday! 🎉';
            ticketImage.classList.add('hidden');
            ticketImage.style.display = 'none';
            typingInterval = null; // Reset interval
        } else {
            // Start typing animation and play sounds
            typingSound.muted = false;
            birthdaySong.muted = false;
            typingSound.play();
            birthdaySong.play();
            typingInterval = setInterval(typeWriter, typingSpeed);
            ticketImage.classList.remove('hidden');
            ticketImage.style.display = 'block';
        }
    });

    // Unmute audio on body click to handle autoplay restrictions if needed
    document.body.addEventListener('click', () => {
        if (typingSound.paused || birthdaySong.paused) {
            typingSound.muted = false;
            birthdaySong.muted = false;
        }
    });
};
