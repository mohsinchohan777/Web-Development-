// This file contain the project of javascript 

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const quotes = [
//     {
//         text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },

//     { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },

//     { text: "Dream big and dare to fail.", author: "Norman Vaughan" },

//     { text: "Hard work beats talent when talent doesnt work hard.", author: "Tim Notke" },

//     { text: "Dont watch the clock; do what it does. Keep going.", author: "Sam Levenson" },

//     { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },

//     { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },

//     { text: "Great things never come from comfort zones.", author: "Unknown" },

//     { text: "Success doesnt just find you. You have to go out and get it.", author: "Unknown" },

//     { text: "The harder you work for something, the greater youll feel when you achieve it.", author: "Unknown" },

//     { text: "Dont stop when youre tired. Stop when youre done.", author: "Unknown" },

//     { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },

//     { text: "Little things make big days.", author: "Unknown" },

//     { text: "It always seems impossible until its done.", author: "Nelson Mandela" },

//     { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },

//     { text: "Your limitation—its only your imagination.", author: "Unknown" },

//     { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },

//     { text: "Dont wait for opportunity. Create it.", author: "Unknown" },

//     { text: "Sometimes were tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },

//     { text: "Success is what comes after you stop making excuses.", author: "Luis Galarza" }
// ];
// button.addEventListener("click", () => {
//     const index = Math.floor(Math.random() * quotes.length);
//     h1.textContent = quotes[index].text;
// });

// const button1  = document.getElementById("button1");
// const body1 = document.body;
// button1.addEventListener("click", () => {
//     body1.style.backgroundColor = "red";
// });
// const button2  = document.getElementById("button2");
// const body2 = document.body;
// button2.addEventListener("click", () => {
//     body2.style.backgroundColor = "green";
// });
// const button3  = document.getElementById("button3");
// const body3 = document.body;
// button3.addEventListener("click", () => {
//     body3.style.backgroundColor = "blue";
// });
// const button4  = document.getElementById("button4");
// const body4 = document.body;
// button4.addEventListener("click", () => {
//     body4.style.backgroundColor = "pink";
// });
// const button5  = document.getElementById("button5");
// const body5 = document.body;
// button5.addEventListener("click", () => {
//     body5.style.backgroundColor = "yellow";
// });

//  const parent =  document.getElementById("parent");
// parent.addEventListener("click", (event) => {
//     // console.log(event.target);
//     const body = document.body;
//     body.style.backgroundColor = event.target.id;
// });


// const form = document.querySelector("form");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const Boy = document.getElementById("Boy").value;
//     const Girl = document.getElementById("Girl").value;

//     const l1 = Boy.length;
//     const l2 = Girl.length;

//     const result  = Math.pow(l1+l2,3)%101;

//     const h2 = document.querySelector("h2");
//     h2.textContent = `The love percentage between ${Boy} and ${Girl} is ${result}%`;
//     form.reset();
// })


// const form = document.querySelector("form");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const income = document.querySelector("#income");
//     const amount = parseInt(income.value);

//     const result = document.querySelector("h2");
//     let TotalTax = 0;
//     if(amount<=1200000){
//         TotalTax = 0;
//     }else if (amount>1200000 && amount<=1600000){
//         TotalTax = (amount-1200000)*0.15;
//     }else if (amount>1600000 && amount<=2000000){
//         TotalTax = (amount-1600000)*0.20 + 60000;
//     }else if (amount>2000000 && amount<=2400000){
//         TotalTax = (amount-2000000)*0.25 + 140000;
//     }else{
//         TotalTax = (amount-2400000)*0.30 + 240000;
//     }
//     result .textContent = `The total tax for an income of ${amount} is ${TotalTax}`;
//     form.reset();
// });