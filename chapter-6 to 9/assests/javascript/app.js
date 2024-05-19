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
does not enter a new number, multiplication Input of 5 
should be displayed by default. */

/*var Input = prompt("Enter a Input number");
var number = Input; 
document.write("<h2> TABLE OF " + Input + "</h2>");
document.write("<h3>" + Input + " x " + " 1 " + " = " + Input * 1);
document.write("<br>" + Input + " x " + " 2 " + " = " + Input * 2);
document.write("<br>" + Input + " x " + " 3 " + " = " + Input * 3);
document.write("<br>" + Input + " x " + " 4 " + " = " + Input * 4);
document.write("<br>" + Input + " x " + " 5 " + " = " + Input * 5);
document.write("<br>" + Input + " x " + " 6 " + " = " + Input * 6);
document.write("<br>" + Input + " x " + " 7 " + " = " + Input * 7);
document.write("<br>" + Input + " x " + " 8 " + " = " + Input * 8);
document.write("<br>" + Input + " x " + " 9 " + " = " + Input * 9);
document.write("<br>" + Input + " x " + " 10 " + " = " + Input * 10);*/




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
result in browser like this.(Hint: user Input) */

/*var subject1 = prompt("Enetr your first subject name", "English");
var subject2 = prompt("Enetr your second subject name", "Maths");
var subject3 = prompt("Enetr your third subject name", "Urdu");

var totalMarksEachSubject = 100;
var subject1ObtainedMarks = +prompt("Enter your " + subject1 + " Obtained Marks");
var subject2ObtainedMarks = +prompt("Enter your " + subject2 + " Obtained Marks");
var subject3ObtainedMarks = +prompt("Enter your " + subject3 + " Obtained Marks");

var totalMarks = 300;
totalMarksObtained = subject1ObtainedMarks + subject2ObtainedMarks + subject3ObtainedMarks;
var eachsubjectPercentage1 = (subject1ObtainedMarks / totalMarksEachSubject) * 100;
var eachsubjectPercentage2 = (subject2ObtainedMarks / totalMarksEachSubject) * 100;
var eachsubjectPercentage3 = (subject3ObtainedMarks / totalMarksEachSubject) * 100;
var allSubjectPercentage = (totalMarksObtained / totalMarks) * 100;


//////table

document.write(`
  <Input border="1" style="width: 50%; margin: 0 auto; text-align: center;">
    <tr>
      <th>Subject</th>
      <th>Obtained Marks</th>
      <th>Total Marks</th>
      <th>% Each Subject</th>
    </tr>
    <tr>
      <td>${subject1}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subject1ObtainedMarks}</td>
      <td>${eachsubjectPercentage1}%</td>
    </tr>
    <tr>
      <td>${subject2}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subject2ObtainedMarks}</td>
      <td>${eachsubjectPercentage2}%</td>
    </tr>
    <tr>
      <td>${subject3}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subject3ObtainedMarks}</td>
      <td>${eachsubjectPercentage3}%</td>
    </tr>

    
    <tr>
      <th colspan="2">Total Marks Obtained</th>
      <td>${totalMarksObtained}</td>
    </tr>
    <tr>
    
      <th colspan="2">Overall Total Marks</th>
      <td>${totalMarks}</td>
    </tr>

    <tr>
      <th colspan="3">Percentage</th>
      <td>${allSubjectPercentage.toFixed(2)}%</td>
    </tr>
  </Input>
`);*/