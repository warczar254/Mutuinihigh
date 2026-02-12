// Countdown
const countdown = document.getElementById("countdown");
const valentines = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = valentines - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.innerHTML = days + " Days Until Valentine's Day";
}, 1000);

// Typewriter
const text = "Today we celebrate respect, unity, appreciation, and the powerful bond that makes Mutuini High School a true family.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();

// Appreciation categories
function showAppreciation(group) {
    const textBox = document.getElementById("appreciationText");

    const messages = {
        students: "To our students — your ambition and energy drive the future.",
        teachers: "To our teachers — your wisdom and patience create tomorrow's leaders.",
        staff: "To our non-teaching staff — your dedication ensures excellence behind the scenes."
    };

    textBox.innerHTML = messages[group];
}

// Compliments
const compliments = [
    "Your kindness strengthens our school community.",
    "You matter more than you know.",
    "Your effort creates impact every day.",
    "You inspire greatness.",
    "Mutuini High is better because of you."
];

function generateCompliment() {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment").innerText = random;
}

// Message wall with storage
function addMessage() {
    const name = document.getElementById("name").value;
    const note = document.getElementById("note").value;
    if (!name || !note) return;

    const message = { name, note };
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));

    displayMessages();
    document.getElementById("name").value = "";
    document.getElementById("note").value = "";
}

function displayMessages() {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("note");
        div.innerHTML = `<strong>${msg.name}:</strong> ${msg.note}`;
        messagesDiv.appendChild(div);
    });
}
displayMessages();

// Confetti
function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = "hsl(" + Math.random()*360 + ", 100%, 50%)";
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Falling animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);
