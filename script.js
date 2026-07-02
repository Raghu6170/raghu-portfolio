// =========================
// Custom Cursor
// =========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

// =========================
// Smooth Navigation
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// Scroll Reveal
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.2

});

document.querySelectorAll(".box,.project-card,.skill-grid div,.glass-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =========================
// Floating Animation
// =========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let x=e.offsetX/card.offsetWidth-.5;

let y=e.offsetY/card.offsetHeight-.5;

card.style.transform=

`perspective(800px)
rotateY(${x*15}deg)
rotateX(${-y*15}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// =========================
// Navbar Background
// =========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(15,15,20,.85)";

nav.style.backdropFilter="blur(20px)";

}else{

nav.style.background="rgba(255,255,255,.08)";

}

});

// =========================
// Active Menu
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-200;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =========================
// Scroll Progress Bar
// =========================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.background="#8B5CF6";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const value=(window.pageYOffset/total)*100;

progress.style.width=value+"%";

});

// =========================
// Typing Animation
// =========================

const title=document.querySelector(".hero h1 span");

const words=[

"User Experiences",

"Beautiful Interfaces",

"Creative Products",

"Modern Websites"

];

let i=0;

setInterval(()=>{

i++;

if(i>=words.length)i=0;

title.innerHTML=words[i];

},2500);

// =========================
// Ripple Button Effect
// =========================

document.querySelectorAll("button,.primary,.secondary").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.4)";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// =========================
// Console Message 😎
// =========================

console.log("%cWelcome to Raghu's Portfolio","color:#8B5CF6;font-size:20px;font-weight:bold;");