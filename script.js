// COUNTDOWN
const countdown = document.getElementById("countdown");
const valentines = new Date("February 14, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = valentines - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `${days} Days Until Valentine’s Day`;
}, 1000);

// TYPEWRITER
const messages = [
    "Mutuini High School — a family built on respect, love, and unity.",
    "Students, teachers, and staff — your efforts make every day special!",
    "Let’s celebrate kindness, gratitude, and togetherness!"
];
let i = 0, j = 0, currentMessage = '', isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
    if (!typewriter) return;
    const fullMessage = messages[i];
    if (isDeleting) {
        currentMessage = fullMessage.substring(0, j--);
    } else {
        currentMessage = fullMessage.substring(0, j++);
    }
    typewriter.innerHTML = currentMessage;

    if (!isDeleting && j === fullMessage.length + 1) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % messages.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 100);
    }
}
type();

// APPRECIATION CARDS
function showAppreciation(group) {
    const textBox = document.getElementById("appreciationText");
    const messages = {
        students: "Dear students — your energy and ambition brighten our school!",
        teachers: "Dear teachers — your guidance shapes our future leaders!",
        staff: "Non-teaching staff — your dedication keeps everything running smoothly!"
    };
    textBox.innerHTML = messages[group];
}

// COMPLIMENT GENERATOR
const compliments = [
    "You make Mutuini High shine brighter!",
    "Your kindness inspires everyone around you!",
    "Every effort you make creates a difference!",
    "You are valued and appreciated today and always!"
];
function generateCompliment() {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment").innerText = random;
}

// MESSAGE WALL
function addMessage() {
    const name = document.getElementById("name").value;
    const note = document.getElementById("note").value;
    if (!name || !note) return;

    const container = document.getElementById("messages");
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `<strong>${name}:</strong> ${note}`;
    container.prepend(div);

    document.getElementById("name").value = '';
    document.getElementById("note").value = '';
}

// FLOATING HEARTS
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.color = `hsl(${Math.random()*360}, 100%, 75%)`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// CONFETTI
function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh); opacity: 0; } }`;
document.head.appendChild(style);
