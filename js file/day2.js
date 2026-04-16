// This file contain the concept of operator , loop , conditional statement 

// operator
// 1. Arithmetic Operators
// let a = 10;
// let b = 5;

// console.log(a + b); // Addition: 15
// console.log(a - b); // Subtraction: 5
// console.log(a * b); // Multiplication: 50
// console.log(a / b); // Division: 2
// console.log(a % b); // Modulus: 0
// console.log(a ** b); // Exponentiation: 100000

// 2. Assignment Operators
// let x = 10;
// x += 5; // Equivalent to x = x + 5
// console.log(x); // Output: 15

// 3. Comparison Operators
// let num1 = 10;
// let num2 = 5;

// console.log(num1 == num2); // Equal to: false
// console.log(num1 != num2); // Not equal to: true
// console.log(num1 > num2); // Greater than: true
// console.log(num1 < num2); // Less than: false
// console.log(num1 >= num2); // Greater than or equal to: true
// console.log(num1 <= num2); // Less than or equal to: false

// let a = "10";
// let b = Number(a);
// let b = Boolean(a);
// console.log(b);

// number ---> String
// let a = 10;
// let b = String(a);
// console.log( b, typeof b);

// string ---> number
// let str = "123";
// let str = "123abc";
// let num = Number(str);
// console.log(num, typeof num);

// Boolean conversion
// let a = -0;
// let a = 0;
// let a = 10;
// let a = "";
// let a = " ";
// let a = "abc";
// let a = "abc";
// let b = Boolean(null);
// let b = Boolean(undefined);
// console.log(b);

// null is loosely equal to undefined 
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null === 0); // false
// console.log(null == ""); // false
// console.log(null ===false); // false
// console.log(undefined == false); // false
// console.log(undefined === true); // false

// > , < , >= , <= operators null aur undefined ke sath comparison mein false return karte hain (except null >= 0 and null <= 0) kyunki ye operators unko number mein convert karne ki koshish karte hain, aur null ko 0 mein convert karte hain, jabki undefined ko NaN mein convert karte hain.
// (null ---> number , undefined ---> NaN)

// ek koi bi type hai , aur mujay is ko compare karna hai kisi dosri me 
// dono ko number mein convert karne ki koshish karte hein

// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true

// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false

// console.log(undefined == 0); // false
// console.log(null==undefined); // true
// console.log(null <= ""); // true
// console.log(null >= ""); // true

// console.log(NaN==NaN); // false
// console.log(NaN===NaN); // false

// 3. Assignment Operators
// let x = 10;
// x += 5; // x = x + 5
// console.log(x); // 15

// 4. Logical Operators
// let x = true;
// let y = false;
// console.log(x && y); // Logical AND: false
// console.log(x || y); // Logical OR: true
// console.log(!x); // Logical NOT: false

// 5. Bitwise Operators
// let x = 5; // Binary: 0101
// let y = 3; // Binary: 0011
// console.log(x & y); // Bitwise AND: 0001 (1)
// console.log(x | y); // Bitwise OR: 0111 (7)
// console.log(x ^ y); // Bitwise XOR: 0110 (6)
// console.log(~x); // Bitwise NOT: 1010 (-6)
// console.log(x << 1); // Left Shift: 1010 (10)
// console.log(x >> 1); // Right Shift: 0010 (2)

// loop 

// post increament 
// post decreament
// pre increament
// pre decreament

// for(let i = 0; i < 5; i++) {

//     console.log(i);
//  }

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do{
//     console.log(i);
//     i++;        
    
// }while(i<10)

//conditions in javascript

// let a = 16;
// if(a>=18){
//     console.log("you are eligible for voting");
// }else{
//     console.log("you are not eligible for voting");
// }

// let a = 29;
// if(a<18){
//     console.log("kid");
// }else if(a>=60){
//     console.log("old");
// }else{
//     console.log("young");
// }

// let arr = [1,2,3,4];
// for (let value of arr) {
//     console.log(value);
// }

// 1️⃣ Basic Array Iteration
// Statement:
// Array [10, 20, 30, 40, 50] ki saari values console me print karo.

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }


// 2️⃣ Sum of Array
// Statement:
// Array [1, 2, 3, 4, 5] me se total sum calculate karo using for...of.
// Output example: Total: 15
// let arr = [1,2,3,4,5];
// let sum  = 0;
// for(let value of arr){
//     sum = sum + value;
// }
// console.log(sum);

// 3️⃣ Find Maximum
// Statement:
// Array [12, 45, 7, 89, 34] me maximum value find karo using for...of.
// Output example: Maximum: 89

// let arr = [12,45,7,89,34];
// let max = arr[0];
// for(let value of arr){
//     if(value>max){
//         max = value;
//     }
// }
// console.log(max);

// 4️⃣ String Characters
// Statement:
// String "JavaScript" ke har character ko uppercase me print karo using for...of.
// Output example:
// J
// A
// V
// A
// S
// C
// R
// I
// P
// T

// let string = "JavaScript";
// for(let value of string){
//     console.log(value.toUpperCase());
// }

// 5️⃣ Filtering Array
// Statement:
// Array [5, 12, 8, 20, 7] me se even numbers print karo using for...of.
// Output example: 12 8 20

// let arr  = [5,12,8,20,7];
// for(let value of arr){
//     if(value%2==0){
//         console.log(value);
//     }
// }