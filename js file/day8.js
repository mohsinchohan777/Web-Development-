// This file contain the concept of function scop ,closure and HOF 

function createCounter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}
const counter = createCounter();
console.log(counter());
// console.log(counter());
// console.log(counter());


// function addSum(a,b){
//     return a+b;
// }
// console.log(addSum(10,20));

