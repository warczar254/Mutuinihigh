// 🔥 FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// TYPEWRITER
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

// POST MESSAGE TO FIRESTORE
function postNote(){
    const name=document.getElementById("name").value||"Anonymous";
    const note=document.getElementById("note").value;
    if(note.trim()==="") return;

    db.collection("messages").add({
        name:name,
        message:note,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    document.getElementById("note").value="";
}

// DISPLAY MESSAGES IN REAL TIME
db.collection("messages")
.orderBy("timestamp")
.onSnapshot(snapshot=>{
    const notesContainer=document.getElementById("notes");
    notesContainer.innerHTML="";
    snapshot.forEach(doc=>{
        const data=doc.data();
        const div=document.createElement("div");
        div.className="note";
        div.innerHTML=`<strong>${data.name}:</strong> ${data.message}`;
        notesContainer.appendChild(div);
    });
});
