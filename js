function switchPanel(panelId){

document.querySelectorAll(".panel").forEach(p=>{

p.classList.remove("active")

})

document.getElementById(panelId).classList.add("active")

}


function login(){

const user=document.getElementById("username").value.trim()
const pass=document.getElementById("password").value.trim()

if(user==="admin" && pass==="1234"){

switchPanel("homePanel")

document.getElementById("logoutBtn").style.display="block"

}

else{

document.getElementById("loginError").innerText="Invalid credentials"

}

}


function showChat(){

switchPanel("chatPanel")

}

function showTracker(){

switchPanel("trackerPanel")

}

function goHome(){

switchPanel("homePanel")

}


function sendMessage(){

const input=document.getElementById("userInput")

const chatBox=document.getElementById("chatBox")

if(input.value==="") return

chatBox.innerHTML+=`<p><b>You:</b> ${input.value}</p>`

input.value=""

}


function saveActivity(){

let mood=document.getElementById("mood").value

let sleep=parseFloat(document.getElementById("sleep").value) || 0

let water=parseFloat(document.getElementById("water").value) || 0

let workout=parseFloat(document.getElementById("workout").value) || 0

let screen=parseFloat(document.getElementById("screen").value) || 0



let score=0


// Sleep score
if(sleep>=7) score+=2
else if(sleep>=5) score+=1


// Water intake score
if(water>=8) score+=2
else if(water>=5) score+=1


// Workout score
if(workout>=60) score+=2
else if(workout>=30) score+=1


// Screen time score
if(screen<=4) score+=2
else if(screen<=6) score+=1


// Mood score
if(mood==="Happy" || mood==="Calm") score+=2
else if(mood==="Neutral") score+=1






if(score>10) score=10


document.getElementById("saveStatus").innerText="Saved Successfully!"


document.getElementById("scoreDisplay").innerHTML=
"<h3>Your Wellness Score Today: "+score.toFixed(1)+" / 10</h3>"

}
function logout(){

document.getElementById("username").value=""
document.getElementById("password").value=""

document.getElementById("logoutBtn").style.display="none"

switchPanel("loginPanel")

}
