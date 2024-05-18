//question-1
/*Write a program that take two numbers & add them in a 
new variable. Show the result in your browser. */

/*var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your second number");
var result = num1 + num2*/

/*string concatination
document.write("sum of " + num1 + " and " + num2 + " = " + result)*/

/*template literals
document.write(`Sum of ${num1} and ${num2} = ${result}`);*/

 



///question-2
/* Repeat task1 for subtraction, multiplication, division & 
modulus. */

//multiplication
/*var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var result = num1 * num2;
document.write("Multiplication of " + num1 + " * " + num2 + " = " + result );*/


//subtraction
/*var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var result = num1 - num2;
document.write("Subtraction of " + num1 + " - " + num2 + " = " + result);*/


//division 
/*var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var result = num1 / num2;
document.write("Division of " + num1 + " / " + num2 + " = " + result);*/


//modulus
/*var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var result = num1 % num2
document.write("Modulus of " + num1 + " % " + num2 + " = " + result);*/




//question-3
/*Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial 
value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value after addition is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value 
after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”. */


/*var a;
document.write(" Value after variable declaration is: " + a);

a = 5;
document.write("<br> Initial value: " + a);

++a;
document.write("<br> Value after increment is: " + a);

a = a + 7;
document.write("<br> Value after addition is: " + a);

--a;
document.write("<br> Value after decrement is: " + a);

a = a % 3;
document.write("<br> The remainder is : " + a);*/





//question-4
/*Cost of one movie ticket is 600 PKR. Write a script to 
store 
ticket price in a variable & calculate the cost of buying 5 
tickets 
to a movie. Example output: */

/*var ticketPrice = 600;
var totalPrice = ticketPrice * 5;

document.write("Total cost of buying 5 tickets to a movie is "+ totalPrice + " PKR ");*/





//question-5
/*Write a script to display multiplication table of any 
number in your browser.  */

/*document.write("<h1> <q> Table of 4 </q> </h1> ");
document.write(" <h2> 4 x 1 = " + 4 * 1 + "<br> " + " 4 x 2 = " + 4 * 2+ "<br> " + " 4 x 3 = " + 4 * 3+ "<br> " + " 4 x 4 = " + 4 * 4+ "<br> " + " 4 x 5 = " + 4 * 5+ "<br> " + " 4 x 6 = " + 4 * 6+ "<br> " + " 4 x 7 = " + 4 * 7+ "<br> " + " 4 x 8 = " + 4 * 8+ "<br> "  + " 4 x 9 = " + 4 * 9+ "<br> " + " 4 x 10 = " + 4 * 10+ " </h2>")*/





//question-6
/*The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
c. Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output “NNoF is NNoC”. */

/*var Celsius = 25;
var Fahrenheit = (Celsius * 9/5) + 32;
document.write("<h3>" + Celsius + "oC " + " is " + Fahrenheit + "oF ")

var Fahrenheit = 70;
var Celsius = (Fahrenheit - 32) * 5/9;
document.write("<br>" + Fahrenheit + "oF " + " is " + Celsius + "oC ")*/





//question-7
/*Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables 

a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 
Compute the total cost & show the receipt in your browser.*/

/*var priceItem_1 = 650;
var priceItem_2 = 100;
var quantity_1 = 3;
var quantity_2 = 7;
var shippingCharges = 100;

var total = (priceItem_1 * 3) + (priceItem_2 * 7) + shippingCharges

document.write("<h1> Shopping Cart </h1>")
document.write(" Price of item 1 is " + priceItem_1 );
document.write("<br> Quantity of item 1 is " + quantity_1);
document.write("<br> Price of item 2 is " + priceItem_2);
document.write("<br> Quantity of item 2 is " + quantity_2);
document.write("<br> Shipping Charges " + shippingCharges);
document.write("<br> Total Cost of your order is " + total);*/




//question-8
/*Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser*/

/*var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Marks Sheet </h1>")
document.write("Total Marks: " + totalMarks);
document.write("<br> Obtained Marks: " + obtainedMarks);
document.write("<br> Percentage: " + percentage + " % " )*/





//question-9
/* Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */


/*var usDollar_1 = 104.80;
var saudiRiyal_1 = 28;
var exchangeRate = (usDollar_1 * 10) + (saudiRiyal_1 * 25);

document.write(" We have 10 Dollars and 25 Riyals.")
document.write("<br> 1 US Dollar in PKR is: 104.80");
document.write("<br> 1 Saudi Riyal in PKR is: 28");
document.write("<br> Total Currency in PKR: " + exchangeRate);*/





//question-10
/*Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression*/

/*var num = 5;
num = (num + 5) * 10 / 2
console.log(num);*/





//question-11

/*The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. 
Output them to the screen like so: “They are either NN or NN 
years old */

/*var currentYear = 2024;
var birthYear = 1990;
var age = (currentYear - birthYear)

document.write("Current Year: " + currentYear);
document.write("<br>Birth Year: " + birthYear);
document.write("<br>Your Age: " + age);*/


//second way 
/*var currentYear = +prompt("Enter Current Year " , "2024");
var birthYear = +prompt("Enter Bith Year " , "19");
var age = currentYear - birthYear ;
document.write("Your age is " + age);*/




//question-12
/*The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable.
Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */

/*var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius is: " + radius);
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);*/





//question-13
/*The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life. 
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”. */

/*var favoriteSnack = "Lays";
var currentAge = 21;
var maximumAge = 65;
var estimatedAmount = 3;
var total = (maximumAge-currentAge) * estimatedAmount

document.write("Favourite Snack: " + favoriteSnack);
document.write("<br>Current Age: " + currentAge);
document.write("<br>Maximun Age: " + maximumAge);
document.write("<br>Estimated Amount: " + estimatedAmount);
document.write("<br>You will need " + total + " to last you until the ripe old age of " + maximumAge);*/


//second way using alet and prompt

/*alert("WELCOME TO THE LIFE TIME SUPPLY CALCULATOR");
var favoriteSnack = prompt("Enter your Favourite Snack" , "Lays");
var currentAge = +prompt("Enter your current age");
var maximumAge = +prompt("Enter your maximum age");
var estimatedAmount = +prompt("Enter your estimated amount per day (as a number) ");
var total = (maximumAge-currentAge) * estimatedAmount;
alert("You will need " + total + " to last you until the ripe old age of " + maximumAge);*/
 