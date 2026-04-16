// This file contain the concept of function in deep dive 

// Function Declaration
// Definition: Function Declaration me function ko variable me assign nahi kiya jata hai.

// function greeting(){
//     console.log("Hello World");
// }
// greeting();

// Definition: Function Expression me function ko variable me assign kiya jata hai.

// let greeting = function(){
//     console.log("Hello World");
// }
// greeting();


// function addNumber with parameter and return keywork
// function addNumber(a,b){
//     return(a+b);
// }
// let result = addNumber(10,20);
// console.log(result);

// add two number using function expression
// let result = function addNumber(a,b){
//     console.log(a+b);
// }
//  result(10,20);

// function with default parameters 
// function addNumber(a,b,c=0,d=0){
//     console.log(a+b+c+d);
// }
//  addNumber(10,20);
//  addNumber(10,20,30);
//  addNumber(10,20,30,40);

// funciton with rest parameter 
// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum = sum + n;
//     }
//     console.log(sum);   
// }
//  addNumber(10,20);
//  addNumber(10,20,30);
//  addNumber(10,20,30,40);

// Arrow Function 
// const addNumber = (a,b) => {

//     console.log(a+b);
// }
// addNumber(10,20);


// const addNumber = (a,b) => a+b;
// const squareRoot = a => a*a;

// console.log(addNumber(10,20));
// console.log(squareRoot(5));

// by using arrow function return object methods 01 
// const greeting = ()=> {
//     let user = {
//         name : "Mohsin Chohan",
//         age : 20,
//     }
//     return user;
// }
// console.log(greeting());

// by using arrow function return object methods 02
// const greeting = ()=> {
//     return{
//         name : "Mohsin Chohan",
//         age : 20,
//     }
// }
// console.log(greeting());

// by using arrow function return object methods 03
// const greeting = ()=> ({name : "Mohsin Chohan",age : 20})
// console.log(greeting());

// IIFE (Immediately Invoked Function Expression)
// (function greeting(){
//     console.log("Hello World");
// })();

// arrow of IFFE 
// (()=>{
//     console.log("Hello World");
// })();

// function greet (){
//     console.log("Hello World");
// }
// function dance(){
// console.log("I am dancing");

// }
// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
//     console.log("My meeting had finished");
// }
// meet(greet);
// meet(dance);
// function zomatoOrderedPlaced(){
//     console.log("Order has been placed");
//     payment(1000);
// }
// function payment(amount){
//     console.log(`Rs.${amount} has been paid`);
//     zomatoOrderedPlaced();  
// }
// payment(1000);

// arrow function 
// let sum = (a,b) => {
//     let sum = 0;
//     sum = a+b;
//     return sum;
// };
// console.log(sum(10,20));

// let sum = (...num) => {
//     let sum =0;
//     for(let i of num){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));

// IIFE (Immediately Invoked Function Expression)  

// (function(){
//     console.log("Hello World");
// })();

// IIFE with arrow function
// ((a,b) =>{
//     console.log(a+b);
// })(10,20);

// function scope in javascript 
// There are three types of scope in javascript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// 1. Global Scope
// const globalVar = "I am global variable";
// function globalScope(){
//     console.log(globalVar);
// }

// globalScope();
// console.log(globalVar);

//02. function scope  
// function myfunction() {
//     var functionVar = "I'm in the function";
//     console.log(functionVar);
// };
// myfunction();
// console.log(myfunctionVar);


// if(true){
//    var name =  "Hello World";
//    console.log(name);
// }
// console.log(name);

// 03. Block Scope
// if (true){
//     let blockVar = "I'm in a block";
//     const alsoBlockVar = "Me too";
//     var notBlockScoped = "I'm Different";
//     // console.log(blockVar);
// }
// console.log(blockVar); // ReferenceError: blockVar is not defined
// console.log(alsoBlockVar); // ReferenceError: alsoBlockVar is not defined
// console.log(notBlockScoped); // I'm Different

// Lexical Scope in JavaScript
// const name = "Global";
// function outer(){
//     const name = "Outer";
//     function inner(){
//         const name = "Inner";
//         console.log(name);
//     }
//     inner();
//     console.log(name);
// }
// outer();
// console.log(name);

// function Outer(){
//     function inner(){
//         const secret = "Hidden";
//     }
// }
// inner();
// console.log(secret); // ReferenceError - can't look INTO inner function 