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
length 1) and returns true if it is a vowel, false otherwise */


// Prompt the user to enter a character
var character = prompt("Enter a character (a single letter):");

// Check if the input is exactly one character
if (character.length === 1) {
    // Convert the character to lowercase
    character = character.toLowerCase();

    // Check if the character is a vowel
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        alert("The entered character is a vowel.");
    } else {
        alert("The entered character is not a vowel.");
    }
} else {
    alert("Please enter only a single character.");
}
