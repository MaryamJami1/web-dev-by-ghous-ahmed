////////////string method

// question-1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name"); 
// var fullName = `${firstName} ${lastName}`;
// var greet = alert(`Hello ${fullName} How was your day?`);




// question-2
// var mobilePhone = prompt("Enter your favourite mobile phone");

// var favouritePhone = `My favourite phone is: ${mobilePhone}`

// console.log(favouritePhone)

// var mobileLength = favouritePhone.length;
// console.log(`Full length is: ${mobileLength}`)

// var inputLength = mobilePhone.length 
// console.log(`String length is: ${inputLength}`)




//question-3
// var str = "pakistani" 
// var indexN;
// for (var i=0; i<str.length; i++){
//      if (str[i] == "n"){
//           indexN = i;
//           console.log(str);
//           console.log(`index of n: ${indexN}`);
//           break;
//      }
// }






//question-4
// var str = "Hello World" 
// var indexL = str.lastIndexOf("l");
// console.log(str)
// console.log(`last index of l: ${indexL}`);





//question-5
// var str = "pakistani" 
// var indexI = str.charAt(3);
// console.log(str)
// console.log(`character at index 3: ${indexI}`)





//question-6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name"); 
// var fullName = `${firstName} ${lastName}`;
// var greet = alert("Hello ".concat( fullName , " How was your day?"))






//question-7
// var str = "Hyderabad" 
// console.log("City " +str)
// var replaceCity = str.replace("Hyder", "Islam");
// console.log(`Replace City ${replaceCity}`)






//question-8
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// console.log(message)
// var replaceAnd = message.replaceAll("and", "&");
// console.log(`${replaceAnd}`)








//question-9
// var num = "472";
// console.log(`value ${num} `)
// console.log("type " + typeof(num))

// //var chnge = parseInt(num)
// var chnge = Number(num)

// console.log(`value ${num} `)
// console.log("type " + typeof(chnge))







//question-10
// var str = prompt("Tell us of your favourite Dry fruit Name");
// console.log("User Input " + str)
// var capital= str.toUpperCase()
// console.log("Capital case " + capital)





//question-11
// var str = prompt("Tell us of your favourite programming language");
// console.log("User Input: " + str)
// var title = str.slice(0 , 1)
// var upper = title.toUpperCase()
// var remain = str.slice(1)
// var titleCase = upper + remain
// console.log("Title Case: " + titleCase)








//question-12
// var num = 35.36;
// console.log("number " + num + " type: " + typeof(num))
// var chnge = num.toString()
// var remove = chnge.replace(".", "")
// console.log("result " + remove + " type: " + typeof(remove))





//question-13
















//question-14
// var A = ["cake", "apple pie","cookie","chips", "patties"]
// var userInput = prompt("Welcome to ABC bakery! what do you want to order sir/maam?")
// var lower = userInput.toLowerCase()
// var flag = false;
// for(var i=0; i<A.length; i++){
//      if(A[i] == lower) {
//         flag = true }
// }if(flag){
//      alert(`${userInput} is available in our bakery`)}
// else{
//     alert(`${userInput} is not available in our bakery`)
//      }