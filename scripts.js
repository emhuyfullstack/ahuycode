// scripts.js
const message = `
🎈🎉 Happy Birthday Truc Van! 🎉🎈

May this day bring you endless joy and laughter. As you step into another wonderful year, may your dreams take flight and your happiness soar high. Celebrate with those you love, and enjoy the little surprises life has to offer. 🎂💖

Remember, the best is yet to come. Enjoy every moment of today, as you unwrap the blessings that await you. 🌟

Wishing you a magical birthday filled with all your heart desires. 🎊🥳
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

    // Start typing animation and play sounds on load
    typeWriter();

    // Play typing sound after a delay
    setTimeout(() => {
        typingSound.muted = false;
        typingSound.play();
    }, delayBeforeTyping);

    // Enable sounds when user interacts with the button
    giftButton.addEventListener('click', () => {
        birthdaySong.muted = false;
        birthdaySong.play();

        // Reveal ticket image when gift button is clicked
        ticketImage.classList.toggle('hidden');
        if (!ticketImage.classList.contains('hidden')) {
            ticketImage.style.display = 'block';
        } else {
            ticketImage.style.display = 'none';
        }
    });

    // Unmute audio by clicking on the body (if necessary)
    document.body.addEventListener('click', () => {
        typingSound.muted = false;
        birthdaySong.muted = false;
    });
};
