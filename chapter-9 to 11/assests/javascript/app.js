//question-1
/**
 * Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights” 
 */

/*var city = prompt("Enter City Name");

if(city === "karachi"){
alert(" “Welcome to city of lights” ");
}*/





//question-2
/*Write a program to take “gender” as input from user. If the 
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am.  */

/*var gender = prompt("Enter your Gender");
var female = "female";
var male = "male";

if(gender === female){
alert("Good Morning Ma'am")
}
else if(gender=== male){
alert("Good Morning Sir")
}*/






//question-3
/*Write a program to take input color of road traffic signal 
from the user & show the message according to this table: */

/*var color = prompt("Enter a color of road traffic signal");
var red = "red";
var green = "green";
var yellow = "yellow";

if (color === red) {
    alert("Must Stop")
}
else if (color === green) {
    alert("Move Now")
}
else if (color===yellow) {
    alert("Ready to move")
}
*/






//question-4
/*Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car” */

/*var litre = +prompt("Enter your remaining fuel");

if(litre < 0.25){
alert(" “Please refill the fuel in your car” ")
};*/







//question-5
// Run this script, & check whether alert message would be 
// displayed or not. Record the outputs. 



/*var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}
show a messaage that given condition for variable a is true because condition is true*/



/*var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
not showing a message because condition is false*/



/*var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
show a messsage that condition 2 is true and condition 4 is true*/



/*var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
show a message the cost equals because if condition is true*/



/*if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}
show a true message because if only execute when its value is true*/




 /*if("car" < "cat"){ 
alert("car is smaller than cat"); 
} 
The first characters of both strings are the same ('c').
The comparison then moves to the second character of each string ('a' in both cases).
The comparison then moves to the third character ('r' in "car" and 't' in "cat").
Since the Unicode value of 'r' (114) is less than the Unicode value of 't' (116), "car" is considered smaller than "cat" lexicographically.
 */








//question-6
/*Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table:  */

/*var marksObtained1 = +prompt("Enter your fisrt subject marks obtained");
var marksObtained2 = +prompt("Enter your second subject marks obtained");
var marksObtained3 = +prompt("Enter your third subject marks obtained");
var totalObtained = marksObtained1 + marksObtained2 + marksObtained3;
var totalMarks = +prompt("Enter a Total Marks");
var percentage = ((marksObtained1 + marksObtained2 + marksObtained3) / totalMarks) * 100;

if(percentage >= 80){
var grade = "A-one"
var remarks = "Excellent"
}
else if(percentage >= 70){
var grade = "A"
var remarks = "Good"
}
else if(percentage >= 60){
    var grade = "B"
    var remarks = "You need to improve"
}
else if(percentage < 60){
    var grade = "Fail"
    var remarks = "Need to hard work"
}

document.write("<h1>Marks Sheet</h1>")
document.write("<h2>Total Marks: " + totalMarks);
document.write("<br>" + "Obtained Marks: " + totalObtained);
document.write("<br>Percentage: " + percentage.toFixed(2)+ "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);*/






//question-7
/*Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer”.*/

/*var number = 6;
var guessNumber = +prompt("Guess a number (ranging from 1 to 10)");

if(guessNumber === number){
alert(" “Bingo! Correct answer” ")
}
else if(guessNumber === ++number){
alert("“Close enough to the correct answer”")
}
else{
    alert("Ooops! Try another number")
}*/






//question-8
/*Write a program to check whether the given number is 
divisible by 3. Show the message to the user if the number 
is divisible by 3. */

/*var givenNumber = +prompt("Give a number and check your given number is divisible by 3 or not");
if(givenNumber % 3 === 0){
alert(givenNumber + " is divisible by 3")
}
else{
    alert(givenNumber + " is not divisible bt 3")
}*/






//question-9
/*Write a program that checks whether the given input is an 
even number or an odd number. */

/*var givenNumber = prompt("Check a number that is an even or odd");

if(givenNumber % 2 === 0){
alert(givenNumber + " is an even number")
}
else{
    alert(givenNumber + " is an odd number")
}*/



