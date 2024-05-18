//question-1

/*Write a program to take a number in a variable, do the 
required arithmetic to display the following result in your 
browser:  */

/*var a = 10;
document.write("<h2>RESULT</h2>")
document.write("The value of a is " + a);
document.write("<br>...................................................... <br>")
document.write("<br> The value of ++a is: " +  ++a + "<br>Now the value of a is: " + a );
document.write("<br><br><br> The value of a++ is: " + a++ + "<br>Now the value of a is: " + a);
document.write("<br><br><br> The value of --a is: " +  --a + "<br>Now the value of a is: " + a );
document.write("<br><br><br> The value of a-- is: " +  a-- + "<br>Now the value of a is: " + a );*/




//question-2
/*What will be the output in variables a, b & result after 
execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; */


/*var a = 2; //1
var b = 1; // 0 , 1 , 0
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  + 1
//               1     +    2
//                     3

document.write("a = " + a);
document.write("<br>b = " + b);
document.write("<br>result = " + result);*/




//question-3
/*Write a program that takes input a name from user & 
greet the user. */

/*var name = prompt("Enter your name");
var greet = alert(`Hello ${name} Have a Good Day!`);*/



//question-4
/*Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default. */

var table = prompt("Enter a table number");
document.write("<h2> TABLE OF " + table + "</h2>");
document.write("<h3>" + table + " x " + " 1 " + " = " + table * 1);
document.write("<br>" + table + " x " + " 2 " + " = " + table * 2);
document.write("<br>" + table + " x " + " 3 " + " = " + table * 3);
document.write("<br>" + table + " x " + " 4 " + " = " + table * 4);
document.write("<br>" + table + " x " + " 5 " + " = " + table * 5);
document.write("<br>" + table + " x " + " 6 " + " = " + table * 6);
document.write("<br>" + table + " x " + " 7 " + " = " + table * 7);
document.write("<br>" + table + " x " + " 8 " + " = " + table * 8);
document.write("<br>" + table + " x " + " 9 " + " = " + table * 9);
document.write("<br>" + table + " x " + " 10 " + " = " + table * 10);











//question-5
/*a) Take three subjects name from user and store them in 3 
different variables. 
b) Total marks for each subject is 100, store it in another 
variable. 
c) Take obtained marks for first subject from user and 
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables. 
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table) */