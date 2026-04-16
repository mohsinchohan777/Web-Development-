// const { useLayoutEffect } = require("react");

// const newElement = document.createElement("h2");
// newElement.textContent = "This is a new heading"; // Set the text content of the new element
// newElement.id = "second";

// // select element 
// const element = document.getElementById("first");
// element.after(newElement);
// // element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "This is h3 heading";
// newElement2.id = "third";
// // newElement2.className = "class";
// // newElement2.className += " 03";
// newElement2.classList.add("class1");
// newElement2.classList.add("class2");
// // newElement2.classList.remove("class2");

// newElement2.style.backgroundColor = "red";
// newElement2.style.color = "white";
// newElement2.setAttribute("class", "class3");

// element.after(newElement2);

// console.log(newElement2.getAttribute("class"));

// const  list1 = document.createElement("li")
// list1.textContent = "Milk";

// const  list2 = document.createElement("li")
// list2.textContent = "Bread";

// const  list3 = document.createElement("li")
// list3.textContent = "peef";

// const  list4 = document.createElement("li")
// list4.textContent = "paneer";

// const unorderElement = document.getElementById("listing");

// unorderElement.append(list1);
// unorderElement.append(list2);
// unorderElement.prepend(list3);
// unorderElement.children[1].after(list4);
// list1.after(list4);

// const arr = ["Milk","peef","butter","paneer"];
// const unorderElement = document.getElementById("listing");
// const fragment = document.createDocumentFragment();
// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     fragment.append(list);
// }
// unorderElement.append(list);

// const s1 = document.getElementById("first");
// s1.remove();



// const list = document.getElementById("ul");
// // console.log(list.children);
// console.log(list.childNodes);





// document.body.appendChild(newElement); // Append the new element to the body of the document

// // Select the element with the ID "myElement"
// const element = document.getElementById("myElement");

// // Change the text content of the element
// element.textContent = "New Text Content";

// // Change the style of the element
// element.style.color = "blue";
// element.style.fontSize = "20px";

// // Add a new class to the element
// element.classList.add("new-class");

// // Remove a class from the element
// element.classList.remove("old-class");

// // Toggle a class on the element
// element.classList.toggle("active");

// // Add an event listener to the element
// element.addEventListener("click", function() {
//   console.log("Element clicked!");
// });