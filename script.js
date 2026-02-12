// Typewriter
const texts=[
"Happy Valentine’s Day Mutuini High School 💖",
"Celebrating Leadership & Excellence 🌟",
"Spreading Love & Appreciation ❤️"
];

let t=0,c=0;
const el=document.getElementById("typewriter");

function type(){
    if(c<texts[t].length){
        el.textContent+=texts[t][c];
        c++;
        setTimeout(type,60);
    }else{
        setTimeout(()=>{
            el.textContent="";
            c=0;
            t=(t+1)%texts.length;
            type();
        },2000);
    }
}
type();

// Toggle appreciation
function toggle(card){
    const p=card.querySelector(".hidden");
    p.style.display=p.style.display==="block"?"none":"block";
}

// Compliment generator
const sweet=[
"You make Mutuini brighter 🌸",
"Your kindness matters 💖",
"You are appreciated today and always 🌟",
"Keep inspiring greatness ❤️"
];

function generate(){
    const random=sweet[Math.floor(Math.random()*sweet.length)];
    document.getElementById("messageDisplay").textContent=random;
    launchHearts();
}

// Message wall
function postNote(){
    const name=document.getElementById("name").value||"Anonymous";
    const note=document.getElementById("note").value;
    if(note.trim()==="") return;

    const div=document.createElement("div");
    div.className="note";
    div.innerHTML=`<strong>${name}:</strong> ${note}`;
    document.getElementById("notes").appendChild(div);
    document.getElementById("note").value="";
}

// Floating hearts background
const container=document.querySelector(".floating-hearts");

setInterval(()=>{
    const heart=document.createElement("span");
    heart.textContent="💖";
    heart.style.left=Math.random()*100+"vw";
    container.appendChild(heart);
    setTimeout(()=>heart.remove(),8000);
},800);

// Button hearts
function launchHearts(){
    for(let i=0;i<15;i++){
        const heart=document.createElement("span");
        heart.textContent="💗";
        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*100+"vh";
        heart.style.fontSize="20px";
        heart.style.animation="floatUp 2s linear forwards";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),2000);
    }
}
