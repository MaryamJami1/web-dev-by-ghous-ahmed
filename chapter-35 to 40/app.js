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
function factorial(){
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
factorial()

// 1 *2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120