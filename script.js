// TYPEWRITER
const messages = ["💖 Happy Valentine’s Day 2026 💖","Spread Love & Kindness ❤️","Mutuini High School Celebrates You! 🌸"];
let i=0, j=0;
function typeWriter(){
    const el = document.getElementById("typewriter");
    if(i<messages[j].length){
        el.innerHTML+=messages[j].charAt(i);
        i++;
        setTimeout(typeWriter,80);
    }else{
        setTimeout(()=>{
            el.innerHTML="";
            i=0;
            j=(j+1)%messages.length;
            typeWriter();
        },2000);
    }
}
typeWriter();

// APPRECIATION MESSAGES
const appreciation = {
    students:"<span>Dear Students,</span><span>Your energy and curiosity light up the school...</span>",
    teachers:"<span>Dear Teachers,</span><span>Your guidance inspires hope...</span>",
    staff:"<span>Dear Staff,</span><span>Your dedication makes everything brighter...</span>"
};

function showAppreciation(type){
    document.getElementById(type+"Msg").innerHTML=appreciation[type];
}

// COMPLIMENTS
const compliments = ["You brighten the day! 🌟","Keep spreading love! 💖","You are amazing! 💌"];
function generateCompliment(){
    const rand=compliments[Math.floor(Math.random()*compliments.length)];
    const el=document.getElementById("compliment");
    el.innerText=rand;
    launchConfetti();
}

// MESSAGE WALL
function addMessage(){
    const name=document.getElementById("name").value||"Anonymous";
    const note=document.getElementById("note").value;
    if(note.trim()==="") return;
    const div=document.createElement("div");
    div.className="note";
    div.innerHTML=`<strong>${name}:</strong> ${note}`;
    document.getElementById("messages").appendChild(div);
    document.getElementById("name").value="";
    document.getElementById("note").value="";
    launchConfetti();
}

// CONFETTI
function launchConfetti(){
    for(let i=0;i<30;i++){
        const c=document.createElement("span");
        c.innerText="🎉";
        c.style.position="absolute";
        c.style.left=Math.random()*window.innerWidth+"px";
        c.style.top=Math.random()*window.innerHeight+"px";
        c.style.fontSize=(10+Math.random()*20)+"px";
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),2000);
    }
}

// FLOATING PARTICLES ON CLICK
document.body.addEventListener("click",e=>{
    const heart=document.createElement("span");
    heart.innerText="💖";
    heart.style.position="absolute";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.fontSize="20px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),1000);
});
