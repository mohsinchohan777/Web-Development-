// This file contain the concept of object (heart of javascript)

// const user = {
//     name : "Mohsin Chohan",
//     age : 18,
//     Degree: "BSCS",
//     "home address" : "188-B hour number"
// }
// console.log(user["age"])
// console.log(user.age);
// console.log(user["home address"]);
// CRUD Operations
// C - Create
// R - Read
// U - Update
// D - Delete
// console.log(user); // { name: 'Mohsin Chohan', age: 18, Degree: 'BSCS' }

// user.city = "Sahiwal";   // add value 
// user.age = 20;           // update value 
// delete user.Degree;       // delete value

// console.log(user);

// const user = {
//     name : "Mohsin Chohan",
//     age : 18,
//     Degree: "BSCS",
//     "home address" : "188-B hour number"
// }

// const user2 = user; 
// user2.name = "Ali";
// console.log(user);


// Important 
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for in loop 
// for(let key in user){
//     console.log(key,user[key]);
// }

// const user = {
//     name : "Mohsin Chohan",
//     age : 18,
//     Degree: "BSCS",
//     greeting : function(){
//         console.log(`Hello ${this.name}`);
//         return 20;
//     }
// }
//  const result= user.greeting();
//  console.log(result);

// const name = user.name;
// const age = user.age;

// object destructuring
// const {name:userName,age:userAge} = user;

// console.log(userName,userAge);

// let obj = Object.keys(user);
// console.log(obj);
// for(let keys in obj){
//     console.log(keys);
// }
// for(let value in Object.values(user)){
//     console.log(value);
// }
// for(let value in Object.entries(user)){
//     console.log(value);
// }
// for(let [key,values] in Object.entries(user)){
//     console.log(key,values);
// }

// nested object
// const user = {
//     name : "Mohsin Chohan",
//     age : 18,
//     Degree: "BSCS",
//     address : {
//         city : "Sahiwal",
//         country : "Pakistan"
//     }
   
// }
// shallow copy 
// console.log(user.address.city);
// const user2 = {...user};
// user2.address.city = "lahore";
// console.log(user);

// deep copy 
// const user2 = structuredClone(user);
// user2.address.city = "lahore";
// console.log(user);


// const user = {
//     name: "mohsin chohan",
//     age : 18,
//     0 : 100,
//     1  : 200
// }
// console.log(user[0]);


// creating object (3 Methods)
// 01. Methos -----> object Literal(Most Common)
// let car = {
//     brand : "Toyota",
//     model : "Corolla",
//     year  : 2020
// }
// console.log(car);
// 02. Method -----> new Object()
// let car = new Object();
// car.brand = "Toyota";
// car.model = "Corolla";
// car.year = 2020;
// console.log(car);
// 03. Method -----> Constructor Function
// function Person(name,age){
//     this.name = name;
//      this.age = age;
//      this.greeting = function(){
//         console.log(`Hello ${this.name}`);
//      }
// }
// const person1 = new Person("Mohsin",18);
// console.log(person1);

// let user = {
//     name : "Mohsin Chohan",
//     age : 19,
//     city : "Sahiwal",
//     "home address" : "188-B house number",
//     greet : function(){
//         console.log("Hello");
//     }
// }
// user.greet();
// delete user.age;
// console.log(user);
// let key = "name";
// console.log(user[key]);
//  user.counrty = "Pakistan";
// console.log(user["counrty"]);
// console.log(user["home address"]);

// let user = {
//     name : "Mohsin Chohan",
//     age : 19,
//     city : "Sahiwal",
//     "home address" : "188-B house number"
// }
// for(let key in user){
//     console.log(key,user[key]);
// }

// 03 way to  create the object in javascript  
// let user = {
//     name : "Mohsin Chohan",
//     age : 19,
//     city : "Sahiwal"
// }
// console.log(user);

// let obj = new Object();
// obj.name = "Ali Raza";
// obj.age = 20;
// obj.city = "Lahore"
// console.log(obj);

// let user = {
//     name : "Mohsin Chohan",
//     age : 19,
//     city : "Sahiwal",
//     "home address" : "188-B house number"
// }

let user = {
    name : "Mohsin Chohan",
    age : 19,
    city : "Sahiwal",
    country : {
        a : "Pakistan",
        b : "India"
    }
}

// Object Destructuring methods()for object and nested objects 
// let {name , age , city , country : {a , b}} = user;
// console.log(name , age , city , a , b);