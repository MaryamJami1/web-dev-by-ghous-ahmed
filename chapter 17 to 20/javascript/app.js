//question-1
/*Declare and initialize an empty multidimensional array. 
(Array of arrays) */

// var emptyArr = [[], []];







//question-2
/*. Declare and initialize a multidimensional array 
representing the following matrix:*/


/*var outerArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write(outerArray[0] ,"<br>" , outerArray[1],"<br>", outerArray[2]);*/









//question-3
/*Write a program to print numeric counting from 1 to 10. */

/*for (let i=1; i<= 10; i++) {
console.log(i);
};*/











//question-4
/*Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.   */

/*var table = +prompt("Enter a number to shpw its multiplication table");
var tableLength = +prompt("Enter length multiplication table");

console.log("Multiplication table of " + table);
console.log("Length " + tableLength);

for(i = 1; i <= tableLength; i++){
console.log(table + " x " + i + " = " + table * i);
};*/














//question-5
/*Write a program to print items of the following array 
using for loop: 
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”]*/

// var fruitsArr = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for(i=0; i<fruitsArr.length; i++){
// console.log(fruitsArr[i])
// };






















//question-6
/**
 * Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 */


document.write("<h2>Counting:</h2>")
var counting= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for(i=0; i<counting.length; i++){
     document.write(counting[i] + ", ");
}