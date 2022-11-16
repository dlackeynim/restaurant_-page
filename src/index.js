import { menu } from 'menu.js';

document.body.style.backgroundImage = "../img/food_background.jpeg"

const content = document.getElementById("content");
const header = document.createElement("div");
const homeBtn = document.createElement("div");
const menuBtn = document.createElement("div");
const contactBtn = document.createElement("div");

const body = document.createElement("div");
const contentContainer = document.createElement("div");
const greeting = document.createElement("div");
const restDescription = document.createElement("div");
const bookBtn = document.createElement("button");

const footer = document.createElement("div");




// loop to create multiple buttons
// const btnLimit=3;
// for(let i = 1; i <= btnLimit; i++) {
//         header.appendChild(menuBtn);
//      } 
// menuBtn.innerHTML = "btn";
// menuBtn.classList.add("menuBtn");
// let menuBtn = document.createElement("div");

homeBtn.innerHTML = "Home";
menuBtn.innerHTML = "Menu";
contactBtn.innerHTML = "Contact";

greeting.innerHTML = "Welcome to the one and only Trinity";
restDescription.innerHTML = "Come and take part in a wonderful dining experience prepared by the finest chefs from all over the world";
bookBtn.innerHTML = "Book now";

footer.innerHTML = "image from Shutterstock";




header.classList.add("header");
homeBtn.classList.add("homeBtn");
menuBtn.classList.add("menuBtn");
contactBtn.classList.add("contactBtn");

body.classList.add("body");
contentContainer.classList.add("contentContainer");
greeting.classList.add("greeting");
restDescription.classList.add("restDescription");
bookBtn.classList.add("bookBtn");


footer.classList.add("footer");


content.appendChild(header);


header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);

content.appendChild(body);
body.appendChild(contentContainer);
contentContainer.appendChild(greeting);
contentContainer.appendChild(restDescription);
contentContainer.appendChild(bookBtn);

content.appendChild(footer);


let tabSwitchingModule = (function(){
    const menuTab = document.querySelector(".menuBtn");
    menuTab.addEventListener("click, menu")

})