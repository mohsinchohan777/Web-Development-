// This file contain the concept of variables, data type , type conversion and coercion

// console.log("Hello, World!");

// let name = "Mohsin Chohan";
// console.log("My name is "  , name + ".");

// let age = 25;
// age = 20;
// console.log("I am " + age + " years old.");

// const a = 10;
// a = 20; // This will cause an error because 'a' is a constant variable.
// console.log("The value of a is " + a + ".");

// var b = 10;
// var b = 20; // This is allowed because 'b' is declared with 'var'.
// console.log("The value of b is " + b + ".");

// let isStudent = false;
// console.log("Am I a student? " + isStudent + ".");



// data types
// there two type of data types in Javascript 
// 1. Primitive data types
// number, string, boolean, null, undefined, symbol, bigint
// 2. Non-primitive data types
// object, array, function

// number
// let num = 10; 
// console.log("The value of num is " + num + ".");
// console.log("The data type of num is :" + typeof num);

// string
// let str = "Hello, World!";
// let strr = 'Mohsin Chohan';
// console.log("The value of str is " + str + ".");
// console.log("The value of strr is " + strr + ".");
// console.log("The data type of strr is :" + typeof strr);

// boolean
// let isTrue = true;
// let isFalse = false;
// console.log("The value of isTrue is " + isTrue + ".");
// console.log("The value of isFalse is " + isFalse + ".");
// console.log("The data type of isTrue is :" + typeof isTrue);
// console.log("The data type of isFalse is :" + typeof isFalse);

// // null
// let nullValue = null;
// console.log("The value of nullValue is " + nullValue + ".");
// console.log("The data type of nullValue is :" + typeof nullValue);

// undefined
// let undefinedValue;
// // const p=10;
// console.log("The value of undefinedValue is " + undefinedValue);
// console.log("The data type of undefinedValue is :" + typeof undefinedValue);


// // symbol
// let sym = Symbol("id");
// console.log("The value of sym is " + sym.toString() + ".");
// console.log("The data type of sym is :" + typeof sym);

// bigint
// let bigNum = 123456789012345678901234567890n;
// console.log("The value of bigNum is " + bigNum + ".");
// console.log("The data type of bigNum is :" + typeof bigNum);

//array in javascript
// let arr = [1,2,3,"Mohsin ","Chohan"];
// console.log("The data type of arr is :" + typeof arr);
// console.log("The value of arr is " + arr + ".");

// object in javascript 

// let obj = {
//     name : "Mohsin Chohan",
//     age : 19,
//     isStudent : true
// };
// console.log("The data type of obj is :" + typeof obj);

// console.log("The value of obj is " + JSON.stringify(obj) + ".");

// function in javascript

// function greeting(){
//     console.log("Hello, World!");
// }
// greeting();

      // function are store in single variables 

// let s = function greeting(){
//     console.log("Hello, World!");
// }
// console.log(s);
// console.log(typeof s);
// s();

// primitive data type is immutabe and non-primitive data type is mutable

// let strr = "Mohsin";
// strr[0] = "A";
// console.log(strr);   

// non-primtive data type is mutable

// let arr = [1,2,3];
// arr[0] = 10;
// console.log(arr);

// let obj = {
//     name : "Mohsin Chohan",
//     age : 19,
//     isStudent : true
// };

// let obj2 = obj; // obj2 is a reference to the same object in memory as obj
// obj.name = "Ali";
// console.log(obj);
// console.log(obj2);

// 🟢 LEVEL 1: Warm-up (Basics)

// Practice 1: Variables declare karo
// name, age, isStudent variables banao
// typeof se unka type print karo
// expected output example
// string
// number
// boolean

// let name = "Mohsin Chohan";
// let age = 19;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// Practice 2: undefined vs null
// 👉 Question:
// a undefined kyun hai?
// b null kyun hai?

// let a;
// let b = null;

// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);

// 🟡 LEVEL 2: Data Types Practice
// Practice 3: Primitive vs Non-Primitive
// 👉 Tasks:
// Har variable ka typeof check karo
// Batao kaun primitive hai aur kaun reference type

// let city = "Lahore";
// let population = 11000000;
// let isCapital = false;

// let user = {
//   name: "Mohsin",
//   age: 20
// };
// let obj;
// let skills = ["HTML", "CSS", "JS"];

// city[0] = "C";
// console.log(city);
// console.log(typeof city);

// user.name = "Elon Musk";
// obj = user;
// obj.name = "Chohan";
// console.log(obj);
// console.log(user);
// console.log(typeof user);

// console.log(typeof skills);


// Practice 4: const + object
// 1. marks ko 90 karo
// 2. name change karo
// 3. poora object dubara assign karne ki koshish karo

// const student = {

//   name: "Ali",
//   marks: 85
// };
// student.name = "Mohsin Chohan";
// student.marks = 90;
// console.log(student);
// 🔑 Short Answer
// const variable ko reassign nahi karne deta,
// lekin uske andar ka data modify karne deta hai (agar wo object/array ho).
// ✅ Reason:
// JavaScript mein const value ko nahi, reference ko protect karta hai.

// type conversion and type coercion

// let num = 10;
// num.toString();
// console.log(typeof num , num);

// let num = String(10);
// let str = parseInt("2034px34");
// let str = parseFloat("203.14");
// console.log(typeof str , str);

// let bool = Boolean(1);
// console.log(typeof bool);


// 🔵 LEVEL 3: Type Conversion Practice
// Practice 5: Explicit Conversion
// Try these too:
// Number("abc");
// Boolean("");
// Boolean("hello");
// String(true);

// 👉 Question:
// "abc" number kyun nahi bana?
// Empty string false kyun bani?

// let strAge = "25";
// let numAge = Number(strAge);
// let number = Number("abc");    // it's wrong Number() convert on numeric string 
// let bool = Boolean("");   // it's wrong Boolean() convert on empty string
// let bool = Boolean("hello");
// let str = String(true);   
// console.log(str);
// console.log(numAge);
// console.log(typeof numAge);

// ❓ Question 1: "abc" number kyun nahi bana?
// Number("abc"); // NaN
// 🧠 Reason (IMPORTANT)
// Number() sirf un strings ko number banata hai
// jo completely numeric hoti hain
// ❓ Question 2: Empty string false kyun bani?
// Boolean("");
// 🧠 Rule (yaad rakhna)
// JavaScript mein kuch fixed values hoti hain jo falsy hoti hain
// false, 0, -0, "", null, undefined, NaN
    

// Practice 6: Implicit Coercion
// Predict output pehle likho, phir run karo:
// console.log("10" + 5);
// console.log("10" - 5);
// console.log(true + 1);
// console.log(false + "5");
// console.log(null + 1);     // null = 0;
// console.log(undefined + 1);  // undefined = NaN;

// 👉 Rule yaad rakho:
// + string ke saath → string
// - * / → number banane ki koshish


// Practice 8: == vs ===
// 👉 Golden rule:
// 💎 Always use === in real projects
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);
