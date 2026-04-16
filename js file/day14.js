// This file contain the concept of promises 

// console.log("Hello World start");



// const p1 = fetch("https://api.github.com/users")
// console.log(p1);


//  const p2 = p1.then((response) => {
//     return (response.json());
// })

// p2.then((data)=>{
//     console.log(data);
// })

// const p1 = new Promise((resolve, reject) => {
//     reject("Hello World");
// });
// p1.then((response)=>{
// console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


// fetch("https://api.github.com/usrs")
//     .then((response) => {
//         console.log(response);
//         if(!response.ok){
//             throw new Error("Network response was not ok");
//         }
//         return (response.json());
//     })
//     .then((data) => {

//         const parent = document.getElementById("parent")
//         for (let i = 0; i < data.length; i++) {
//             const image = document.createElement("img");
//             image.src = data[0].avatar_url;
//             image.style.width = "100px";
//             image.style.height = "100px";
//             parent.appendChild(image);
//         }
        
//     })
//     .catch((error) => {
//     const parent = document.getElementById("parent");
//     parent.textContent = error.message;
    
// })

// const p1 = {
//     name : "Mohsin Chohan",
//     age: 19
// }
// const p2 = JSON.stringify(p1);
// console.log(p2);



// const jsonFormat = `{
// "name":"Mohsin Chohan",
// "age":19
// }`;

// const jsObject = JSON.parse(jsonFormat);
// console.log(jsObject);