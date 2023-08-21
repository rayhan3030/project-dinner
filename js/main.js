const countdown = document.querySelector(".countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const startTime = new Date("2023-08-29T12:00:00");

const countdownTimer = setInterval(() => {
  const now = new Date();
  const remainingTime = startTime - now;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(remainingTime / (1000 * 60 * 60)) - days * 24;
  const minutes = Math.floor(remainingTime / (1000 * 60)) - days * 24 * 60 - hours * 60;
  const seconds = Math.floor(remainingTime / 1000) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  if (remainingTime <= 0) {
    clearInterval(countdownTimer);
  }
}, 1000);


// typewritter effect portfolio 
const text = "Portfolio"; // The text to display with typewriter effect
const speed = 500; // Typing speed in milliseconds
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Typing is complete, reset and start again
        i = 0;
        typewriterElement.innerHTML = '';
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;



// faltu form starts 
const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('mousemove', function(event) {
    const buttonRect = moveButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(
        Math.pow(event.clientX - buttonCenterX, 2) +
        Math.pow(event.clientY - buttonCenterY, 2)
    );

    if (distance < buttonRect.width) {
        const xOffset = (Math.random() * 200 - 100).toFixed(2);
        const yOffset = (Math.random() * 200 - 100).toFixed(2);
        moveButton.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
});


// buttin 
const scrollToTopButton = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 200px from the top
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

