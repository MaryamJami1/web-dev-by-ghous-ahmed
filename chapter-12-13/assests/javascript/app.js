//question-1
/*Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122). */


/*var character = prompt("check that your given character is a number, \nupper case letter or a lower case letter");

if (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57) {
    alert("Your given character is a number!")
}
else if (character.charCodeAt(0) >= 60 && character.charCodeAt(0) <= 90) {
    alert("Your given character is a Upper Case Letter!")
}
else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
    alert("Your given character is a lower case letter!")
}
else {
    alert("your given character is not a number, Upper Case Letter or a Lower Case letter!")
};*/




// 2nd way to write a same program

/*var character = prompt("check that your given character is a number, \nupper case letter or a lower case letter");
var ascii = character.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("Your given character is a number!")
}
else if (ascii >= 60 && ascii <= 90) {
    alert("Your given character is a Upper Case Letter!")
}
else if (ascii >= 97 && ascii <= 122) {
    alert("Your given character is a lower case letter!")
}
else {
    alert("your given character is not a number, Upper Case Letter or a Lower Case letter!")
};*/









//question-2
// Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

/*var firstInteger = +prompt("Enter the first integar");
var secondInteger = +prompt("Enter the second integar");


if (firstInteger > secondInteger) {
    alert(`${firstInteger} is greater than ${secondInteger}`)
}
else if(secondInteger > firstInteger){
    alert(`${secondInteger} is greater than ${firstInteger}`)
}
else if(firstInteger===secondInteger){
alert("Both Integars are equal")
}
else{
    alert("Please enter only integers")
}*/









//question-3
/*Write a program that takes input a number from user & 
state whether the number is positive, negative or zero. */

/*var num = +prompt("Enter a number");


if (num > 0) {
    alert("Number is positive")
}
else if (num < 0) {
    alert("Number is negative")
} 
else if(num == 0){
alert("Number is Zero")
}
else{
    alert("Please enter only integers!")
}*/









//question-4
/* Write a program that takes a character (i.e. string of 
Length 1) and returns true if it is a vowel, false otherwise */


/*var character = prompt("Enter a character (a single letter):");

if (character.length === 1) {
    character = character.toLowerCase()
    if (character==="a" || character==="e" || character==="i" || character==="o" || character==="u" ) {
        alert(character + " is a vowel letter")
    }else{
        alert(character + " is not a vowel letter")
    }

}else{
alert("Please enter only one letter")
}*/









//question-5
/*Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
i. Check if user has entered password. If not, then 
give message “ Please enter your password” 
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise. */

/*var password = "maryamjamil098";
var userInput = prompt("Enter a password");


if (userInput == "") {
    alert("please enter your a password!")
} else if (userInput === password) {
    alert("password is correct")
} else {
    alert("password is incorrect")
}*/









//question-6
/*This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
} */


/*var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"}
else {greeting = "Good evening"}; */










//question-7
/*Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements  */

/*var userInput = +prompt("Enter the time in 24 hours clock format");

if (userInput >= 0 && userInput <=1200) {
    alert("Good Morning, Have a Good Day!")
}
else if(userInput >= 1200 && userInput <= 1700){
    alert("Good Afternoon! Can you go with me for a lunch?")
}
else if(userInput >=1700 && userInput <= 2000){
    alert("Good Evening, You Should Take Tea!")
}
else if(userInput >= 2000 && userInput <= 2400){
    alert("Good Night, Have a sweet Dreams!")
}
else{
    alert("please enter a 24 hours clock format!")
}*/