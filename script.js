// TYPEWRITER GREETING
const typewriterText = "💖 Happy Valentine’s Day 2026 💖";
let i = 0;
function typeWriter() {
    if(i < typewriterText.length){
        document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// APPRECIATION MESSAGES
const appreciationMessages = {
    students: `
        <span class="color-pink">Dear Students,</span>
        <span class="color-blue">Your energy, curiosity, and laughter light up Mutuini High School.</span>
        <span class="color-purple">Keep chasing your dreams and spreading kindness wherever you go.</span>
        <span class="color-red">You make every day brighter and fill our halls with joy!</span>
    `,
    teachers: `
        <span class="color-maroon">Dear Teachers,</span>
        <span class="color-green">Your dedication and patience shape the hearts and minds of our students.</span>
        <span class="color-pink">Your guidance inspires hope, ambition, and courage in everyone around you.</span>
        <span class="color-blue">Thank you for being our pillars and mentors, always lighting the way with love and wisdom.</span>
    `,
    staff: `
        <span class="color-purple">Dear Non-Teaching Staff,</span>
        <span class="color-red">Your hard work, care, and dedication make Mutuini High School a safe and welcoming home for everyone.</span>
        <span class="color-white">From the library to the kitchen, every corner feels brighter because of your effort and heart.</span>
        <span class="color-green">We appreciate you today and always!</span>
    `
};

function showAppreciation(type){
    document.getElementById("appreciationText").innerHTML = `<div class="appreciation-text">${appreciationMessages[type]}</div>`;
}

// COMPLIMENT GENERATOR
const compliments = [
    "You brighten the day of everyone around you! 🌟",
    "Your smile can light up the whole school! 😄",
    "Keep spreading love and kindness! 💖",
    "You are amazing just the way you are! 💌",
    "Your presence makes everything better! 🌸"
];

function generateCompliment(){
    const rand = compliments[Math.floor(Math.random()*compliments.length)];
    document.getElementById("compliment").innerText = rand;
    launchConfetti();
}

// MESSAGE WALL
function addMessage(){
    const name = document.getElementById("name").value || "Anonymous";
    const note = document.getElementById("note").value;
    if(note.trim() === "") return;
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `<strong>${name}:</strong> ${note}`;
    document.getElementById("messages").appendChild(div);
    document.getElementById("name").value = "";
    document.getElementById("note").value = "";
    launchConfetti();
}

// FLOATING HEARTS
function createHeart(){
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.fontSize = (15 + Math.random()*20)+"px";
    document.querySelector(".floating-hearts").appendChild(heart);
    setTimeout(()=>heart.remove(), 10000);
}
setInterval(createHeart, 800);

// CONFETTI (simple)
function launchConfetti(){
    for(let i=0;i<30;i++){
        const c = document.createElement("span");
        c.innerText = "🎉";
        c.style.position="absolute";
        c.style.left=Math.random()*window.innerWidth+"px";
        c.style.top=Math.random()*window.innerHeight+"px";
        c.style.fontSize=(10+Math.random()*20)+"px";
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),2000);
    }
}
