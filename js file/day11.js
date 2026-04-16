// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "This is a Events Listner";
// }

// element.onclick = function handleClick(){
//     element.textContent = "This is a Events Listner";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "This is also Events Listner";
// }

// const element = document.getElementById("first");

// element.addEventListener("mouseleave", ()=> {
//     element.textContent = "This is a Events Listner";
// });

// document.getElementById("child1").addEventListener("click", () => {
//     document.getElementById("child1").textContent = "I'm clicked";
//     document.getElementById("child1").style.backgroundColor = "blue";
//     document.getElementById("child1").style.height = "300px";
//     document.getElementById("child1").style.width = "300px";
//     document.getElementById("child1").style.borderRadius = "50%";
//     document.getElementById("child1").style.transition = "all 2s";
// });

// document.getElementById("child2").addEventListener("click", () => {
//     document.getElementById("child2").textContent = "I'm clicked";
//     document.getElementById("child2").style.backgroundColor = "blue";
//     document.getElementById("child2").style.height = "300px";
//     document.getElementById("child2").style.width = "300px";
//     document.getElementById("child2").style.borderRadius = "50%";
//     document.getElementById("child2").style.transition = "all 2s";
// });

// document.getElementById("child3").addEventListener("click", () => {
//     document.getElementById("child3").textContent = "I'm clicked";
//     document.getElementById("child3").style.backgroundColor = "blue";
//     document.getElementById("child3").style.height = "300px";
//     document.getElementById("child3").style.width = "300px";
//     document.getElementById("child3").style.borderRadius = "50%";
//     document.getElementById("child3").style.transition = "all 2s";
// });

// document.getElementById("child4").addEventListener("click", () => {
//     document.getElementById("child4").textContent = "I'm clicked";
//     document.getElementById("child4").style.backgroundColor = "blue";
//     document.getElementById("child4").style.height = "300px";
//     document.getElementById("child4").style.width = "300px";
//     document.getElementById("child4").style.borderRadius = "50%";
//     document.getElementById("child4").style.transition = "all 2s";
// });

// document.getElementById("child5").addEventListener("click", () => {
//     document.getElementById("child5").textContent = "I'm clicked";
//     document.getElementById("child5").style.backgroundColor = "blue";
//     document.getElementById("child5").style.height = "300px";
//     document.getElementById("child5").style.width = "300px";
//     document.getElementById("child5").style.borderRadius = "50%";
//     document.getElementById("child5").style.transition = "all 2s";
// });

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener("click", () => {
//         child.textContent = "I'm clicked";
//         child.style.backgroundColor = "blue";
//         child.style.height = "300px";
//         child.style.width = "300px";
//         child.style.borderRadius = "50%";
//         child.style.transition = "all 2s";
//     });
// }

// const grandparent  = document.getElementById("grandparent");
// grandparent.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.stopPropagation();
//     console.log("Grandparent clicked")
// })
// const parent  = document.getElementById("parent");
// parent.addEventListener("click", (event) => {
//     // event.stopPropagation();
//     console.log(event);
//     console.log("parent clicked")
// })
// const child  = document.getElementById("child");
// child.addEventListener("click", (event) => {
//     console.log(event);
//     // event.stopPropagation();
//     console.log("child clicked")
// })
