// scripts.js
const message = `
🎈🎉 Happy Birthday Truc Van! 🎉🎈

May this day bring you endless joy and laughter. As you step into another wonderful year, may your dreams take flight and your happiness soar high. Celebrate with those you love, and enjoy the little surprises life has to offer. 🎂💖

Remember, the best is yet to come. Enjoy every moment of today, as you unwrap the blessings that await you. 🌟

Wishing you a magical birthday filled with all your heart desires. 🎊🥳
`;

let index = 0;
const typingDuration = 18000; // Total typing duration in milliseconds (18 seconds)
const typingSpeed = typingDuration / message.length; // Calculate typing speed

function typeWriter() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Show the button after typing animation is complete
        document.getElementById("nextButton").classList.remove('hidden');
    }
}

function showSlide(currentSlide, nextSlide) {
    currentSlide.classList.remove('active');
    currentSlide.classList.add('hidden');
    nextSlide.classList.remove('hidden');
    nextSlide.classList.add('active');
}

window.onload = () => {
    const typingSound = document.getElementById("typingSound");
    const birthdaySong = document.getElementById("birthdaySong");
    const startButton = document.getElementById("startButton");
    const nextButton = document.getElementById("nextButton");
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");

    // Start music and show slide 2 on start button click
    startButton.addEventListener('click', () => {
        birthdaySong.muted = false;
        typingSound.muted = false;
        birthdaySong.play();
        typingSound.play();

        showSlide(slide1, slide2);

        // Start typing animation
        typeWriter();
    });

    // Show slide 3 on next button click
    nextButton.addEventListener('click', () => {
        showSlide(slide2, slide3);
    });

    // Initialize slide 1 as active
    slide1.classList.add('active');
};
