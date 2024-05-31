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



//counting
/*document.write("<h2>Counting:</h2>");
var counting= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for(i=0; i<counting.length; i++){
     document.write(counting[i] + ", ");
};*/





//reverse counting
/*document.write("<h2>Reverse Counting:</h2>");
for(i=10; i >= 1; i--){
document.write([i] + ", ")
};*/





//even numbers
/*document.write("<h2>Even:</h2>");
var even= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for(i=0; i<even.length; i++){
document.write(even[i] + ", ");
}*/





//odd numbers
//without using array
/*document.write("<h2>Odd:</h2>");

for(i=1; i<=19; i+=2){
document.write(i + ", ")
};*/

//using array
/*document.write("<h2>Odd:</h2>");
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for(i=0; i<odd.length; i++){
document.write(odd[i] + ", ")
};*/





//Series
/*document.write("<h2>Series:</h2>");
var series =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for(i=0; i<series.length; i++){
document.write(series[i] + "k, ")
}*/

















//question-7
/*You have an array 
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. 
After searching, prompt the user whether the given item is 
found in the list or not. Example:
 */

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var customerInput = prompt("Welcome to our bakery! What do you want to order, sir/ma'am?");

// if(bakery.includes(customerInput)){
//     var index = bakery.indexOf(customerInput);
//     alert(`Your ${customerInput} is available at index ${index} in our bakery`);
// } else {
//     alert(`We are sorry, ${customerInput} is not available in our bakery`);
// };















//question-8
/*Write a program to identify the largest number in the 
given array. 
A = [24, 53, 78, 91, 12]. */

/*var A = [24, 53, 78, 91, 12];
document.write("Array items: "+ A);
document.write("<br> The largest number is: "+ Math.max(...A));*/














//question--9
/*Write a program to identify the smallest number in the 
given array. 
A = [24, 53, 78, 91, 12]
 */


/*var A = [24, 53, 78, 91, 12];

document.write("Array Items "+A);
document.write("<br>Smallest number is: "+ Math.min(...A));*/


















//question-10
/**
 * Write a program to print multiples of 5 ranging 1 to 
100.
 */

for(i= 5; i<=100; i+=5){
console.log(i);
};