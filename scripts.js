// scripts.js
const message = `

Sister Truc Zan ngusi xaugai sinh nhat vui ve nhe 🌟

Wishing every day brings you closer to your dreams and that you continue to grow more beautiful and confident with each passing year. May everything go smoothly and be just as you wish. 🎊🥳
`;

let index = 0;
const typingSpeed = 100; // milliseconds
const delayBeforeTyping = 3000; // 3 seconds delay before typing starts

function typeWriter() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = () => {
    const typingSound = document.getElementById("typingSound");
    const birthdaySong = document.getElementById("birthdaySong");
    const giftButton = document.getElementById("giftButton");
    const ticketImage = document.getElementById("ticketImage");

    // Start typing animation
    typeWriter();

    // Unmute and play both sounds after a delay for the typing effect
    setTimeout(() => {
        typingSound.muted = false;
        birthdaySong.muted = false;
        typingSound.play();
        birthdaySong.play();
    }, delayBeforeTyping);

    // Reveal ticket on button click
    giftButton.addEventListener('click', () => {
        // Toggle the visibility of the ticket image
        ticketImage.classList.toggle('hidden');
        ticketImage.style.display = ticketImage.classList.contains('hidden') ? 'none' : 'block';
    });

    // Unmute audio on body click to handle autoplay restrictions
    document.body.addEventListener('click', () => {
        if (typingSound.paused || birthdaySong.paused) {
            typingSound.muted = false;
            birthdaySong.muted = false;
            typingSound.play();
            birthdaySong.play();
        }
    });
};
