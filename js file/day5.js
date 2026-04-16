// This file contain the concept of array 

// let marks = [10,20,30,40,50];
// console.log(marks);
// console.log(marks.length);

// let arr = [100,50,"Mohsin"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// arr[1] = 20;
// console.log(typeof arr);
// console.log(arr);

// push method use to add element at the end of the array 
// arr.push(10);
// console.log(arr);

// pop method use to delete element at the end of the array 
// arr.pop(10);
// console.log(arr);

// unshift methods use to add some element start of the array 
// arr.unshift(200);
// console.log(arr); 

//shift methods use to delee some element start of the array 
// arr.shift(200);
// console.log(arr); 

// let arr = [10,20,30,40];

// print the array elements using for loop
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// print the array elements by using for of loop
// for(let value of arr){
//     console.log(value);
// }

// let arr1 = [10,20,30,40];
// let arr2 = arr1.slice(1 , 3);
// console.log(arr2);

// let arr1 = [10,20,30,40];
// arr1.splice(0 , 3);
// console.log(arr1);

// const arr1 = [10,20,30,40,50];
// const arr2 = ["moshin", 11, "Chohan"];
// const arr3 = ["Computer Science", true, 100];

// const arr4= arr.concat(arr2,arr3);
// const arr4 = [arr1,arr2,arr3];
// const arr4 = [...arr1,...arr2,...arr3];
// console.log(arr4);

// const arr = [10,20,30,40,10];
// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(arr.join(" "));  //same work as toString() methods
// console.log(arr.indexOf(10));
// console.log(arr.lastIndexOf(10));
// console.log(arr.includes(10));

// let arr = ["Apple","Daily milk","Caret", "Banana" ];
// // arr.sort();
// arr.reverse();
// console.log(arr);

// const a = [10,50,40,90];
// const arr = [10,"Mohsin", 50,true];
// arr.sort();
// console.log(arr);

// const arr = [10,51,64,71,40];
//ascending order 
// arr.sort((a,b)=> a-b);
// for reverse (deacending order)
// arr.sort((a,b)=> b-a);

// -ve : a phele ayega phir b 
// +ve : b phele ayega phir a
// console.log(arr);

// const arr = [10,20,30,[34,[56,72,46],43],90];
// // const a = arr.flat();
// const a = arr.flat(Infinity);
// console.log(a);

// console.log(arr[3][1][1]);


// ARRAY PRACTICE STATEMENT PORTION

// array creation
// console.log(arr);
// array indexing 
// arr[0] = 100;
// console.log(arr[0]);

// array length
// console.log(arr.length);

// arr.push(50);
// arr.pop();

// arr.unshift(100);
// arr.shift();

// let arr = ["Caret","Orange", "Banana","Mango" ,"Apple"];

// let arr1 = [10,[2,22,[5,55],4]];

// arr2 = arr1.flat(Infinity);
// arr2 = arr1.flat(1);
// console.log(arr2);

// console.log(arr2.reverse());
// arr2.sort((a,b)=>a-b);  // Ascending order 
// arr2.sort((a,b)=>b-a);  // Decending order 


// let arr1 = arr.slice(1,3);
// arr.splice(1,2);
// arr.splice(1,2,100,200,300);
// arr.splice(1,0,100,200,300);
// console.log(arr);
// console.log(arr.toString());
// console.log(typeof arr);
// console.log( arr.length);

// let arr = ["Caret","Orange", "Banana","Mango" ,"Apple"];
// let result = arr.join(" - ");
// let result = arr.join();
// console.log(result);

// Array static methods 
// let arr = [10,20,30,40];
// let string = "Hello";
// console.log(Array.from(string));
// console.log(Array.from({length:5}));
// let arr = Array.of(10,20,30);
// console.log(arr);


