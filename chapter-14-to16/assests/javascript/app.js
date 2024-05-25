//question-1
/*Declare an empty array using JS literal notation to store 
student names in future. */

// var emptyArray = [];




//question-2
/*Declare an empty array using JS object notation to store 
student names in future. */

// var emptyArray = new Array();





//question-3
/*Declare and initialize a strings array. */

// var stringArray = ["maryam", "hiba", "aisha", "areeba", "ramsha"];




//question-4
/*Declare and initialize a numbers array.*/

// var numberArray = [10, 20, 30, 40, 50, 60];




//question-5
/*Declare and initialize a boolean array.*/

// var booleanArray = [true, false, true, false] ;




//question-6
/* Declare and initialize a mixed array. */

// var mixedArray = ["maryam", 20, true];




//question-7
/*Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like: */

/*var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD" ];

document.write("<h1>Qualifications</h1>" )
document.write("<h2> 1)" , qualifications[0], "<br> 2)" , qualifications[1], "<br> 3)" , qualifications[2], "<br> 4)" , qualifications[3], "<br> 5)" , qualifications[4], "<br> 6)" , qualifications[5], "<br> 7)" , qualifications[6], "<br> 8)" , qualifications[7]);*/





//question-8
/*Write a program to store 3 student names in an array.Take 
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:  */

/*var students = ["Maryam", "Javeriya", "Mahnoor"];
var score = [320, 230, 480];
var totalScore = 500;

var percentageStudent1 = (score[0] / totalScore) * 100;
var percentageStudent2 = (score[1] / totalScore)* 100;
var percentageStudent3 = (score[2] / totalScore) * 100;

document.write("<h1>Score of " + students[0] + " is " + score[0] + " and Percentage: " + percentageStudent1 + "%" );
document.write("<h1>Score of " + students[1] + " is " + score[1] + " and Percentage: " + percentageStudent2 + "%" );
document.write("<h1>Score of " + students[2] + " is " + score[2] + " and Percentage: " + percentageStudent3 + "%" )*/








//question-9
/*Initialize an array with color names. Display the array 
elements in your browser. 
a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser. 
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser. 
c. Add two more color to the beginning of the array. 
Display the updated array in your browser. 
d. Delete the first color in the array. Display the updated 
array in your browser. 
e. Delete the last color in the array. Display the updated 
array in your browser. 
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser. 
g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your 
browser. */



/*var colorNames = [" Red", " Orange", " Yellow", " Green", " Purple", " Pink "];
document.write("<h1>Array " + colorNames);

var colorInputbegin = prompt("Which color do you want to add to the begining?");
colorNames.unshift(colorInputbegin);
document.write("<h2>first Updated Array " + colorNames);

var colorInputlast = prompt("Which color do you want to add to the end?");
colorNames.push(colorInputlast);
document.write("<h2>Second Updated Array " + colorNames);

colorNames.unshift(" Maroon", " Cyan ");
document.write("<h2>Third Updated Array " + colorNames);

colorNames.shift();
document.write("<h2>Forth Updated Array " + colorNames);


colorNames.pop();
document.write("<h2>Fifth Updated Array " + colorNames);


var colorInputIndex = prompt("Which index do you want to add color?");
var colorInputName = prompt("Which color do you want to add?");

colorNames.splice(colorInputIndex , 0 , colorInputName);
document.write("<h2>Sixth Updated Array " + colorNames.join(", "));


var colorInputIndexDelete = prompt("Which index do you want to delete color?");
var colorInputDelete = prompt("How many colors do you wants to delete?");

colorNames.splice(colorInputIndexDelete , colorInputDelete );
document.write("<h2>Seventh Updated Array " + colorNames);*/









//question-10
/*Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method. */

/*var scores = [320, 120, 650, 450, 100, 280, 750];
document.write("<h2>Scores of Students " + scores);
document.write("<br>Ordered Scores of Students " + scores.sort());*/







//question-11
/*Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.  */


/*var cityNames = ["Karachi", " Lahore", " Islamabad", " Murree", " Quetta", " Peshawar", " KPK"];
document.write("<h2>City Names: " + cityNames);

//copy middle elements
var selectedCities = cityNames.slice(1, 4);
document.write("<br><br>Selected City List: " + selectedCities);

//copy last elements
var selectedCities1 = cityNames.slice(-3);;
document.write("<br><br>Selected Last Cities List: " + selectedCities1);*/









//question-12
/*Write a program to create a single string from the 
below mentioned array: 
var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
(Use array’s join method) */

/*var arr = ["This", " is", " my", " cat"];
document.write("<h1>Array: " + arr);
document.write("<br>String: " + arr.join(" "));
document.write("<br>String: " + arr.join("-"));
document.write("<br>String: " + arr.join("_"));*/






//question-13
/* Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out) */

var newArray = [];

newArray.push("Keyboard");

