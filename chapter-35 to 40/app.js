// functions
// question-1

/*function myDate(){
    console.log(new Date())
       }
//   myDate()*/





// question-2

/*function greet(firstName, LastName) {

    console.log(firstName + " " + LastName + " how are you")
}
greet("maryam", "jamil")*/







// question-3

/*function sum() {
    let num1 = Number(prompt("Enter first number"));
    let num2 = Number(prompt("Enter second number"));
    return num1 + num2
}
console.log(sum())*/







// question-4

/*function calculator() {
    let num1 = Number(prompt("Enter first number"))
    let num2 = Number(prompt("Enter second number"))
    let operator = prompt("Enter operator", "+ - * /")
    let result;


    if (operator === "+") {
        result= num1 + num2
    }

    else if (operator === "-") {
        result= num1 - num2
    }

    else if (operator === "*") {
        result= num1 * num2
    }

    else if (operator === "-") {
        result= num1 - num2
    }
    else if (operator === "/") {
        if (num2 == 0) {
            result= "0 is not divisible by 0"
        }
        result= num1 / num2
    } else {
        result= "please enter a valid operator"
    }

    return num1 + operator + num2 + " = "+ result
}
alert(calculator())*/









//question-5
// using prompt
/*function square() {
    let userInput = Number(prompt("enter a number for its square"))
    let squareValue = userInput * userInput
    return `the square of ${userInput} is ${squareValue}`
}

alert(square());*/



// pass arguments
/*function square(x) {
    let squareValue = x * x
    return `the square of ${x} and ${x} is ${squareValue}`
}

alert(square(8))*/








//qusetion-6
/*function factorial(){
let userInput = Number(prompt("enter a number"))
if(userInput<0){
alert(`Error: Factorial is not defined for negative numbers`)
}else{
    let result = 1;
    for(let i = 2; i<=userInput; i++){
        result*=i
    }
alert("The factorial of "+ userInput + " is "+result)
    
}
}
factorial()*/

// 1 *2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120












//question-7
// function counting(){
// let start = Number(prompt("enter number a number where you want to start counting"));
// let end = Number(prompt("enter number a number where you want to end counting"));
// let count;

// for(let i=start; i<=end; i++){
// count=i;
// console.log(count);
// }
// }
// counting();









//question-8
// function calculateHypotenuse(){
//   function calculateSquare(x){
//     return x * x
//   }

//   let base = Number(prompt("Enter the base of a right angle triangle"))
//   let perpendicular = Number(prompt("Enter the perpendicular of a right angle triangle"))
//   let sqr = calculateSquare(base) + calculateSquare(perpendicular);
//   let hypoteneuse = Math.sqrt(sqr);
//   alert(`hypotenuse 0f base:${base} and perpendicular:${perpendicular} is ${hypoteneuse}`)
//   return hypoteneuse;
// }
// console.log(calculateHypotenuse());









//question-9
// function rectangle(width, height){
//     let areaarectangle = width*height
//     return `Area of rectangle is ${areaarectangle}`
// }
// console.log(rectangle(30, 60));


// let recWidth= 6;
// let recHeight = 12;
// function rectangle(width, height){
// return width*height
// }
// console.log(rectangle(recWidth,recHeight));







//question-10
// function palindrome(){
// let userInput = prompt("Enter a word and checks it's palindrome or not")
// let arr = userInput.split("");
// let arrReverse = arr.reverse();
// let arrJoin = arrReverse.join("")
// if(userInput == arrJoin){
// return `${userInput} is a palindrome word`
// }else{
//     return `${userInput} is not a palindrome word`
// }
// }
// alert(palindrome())










//question-11

function upperCase(){
    let word = "the quick brown fox"
    let strSplit = word.split(" ")
    for(let i=0; i<strSplit.length; i++){
        let firstChr = strSplit[i].charAt(0);
        let upperChr = firstChr.toUpperCase();
        let slc = strSplit[i].slice(1);
        let final = upperChr + slc
        strSplit[i]=final;
    }
   
console.log(strSplit.join(" "));
}

upperCase()

