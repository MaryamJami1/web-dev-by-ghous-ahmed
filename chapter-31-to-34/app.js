///////Date Methods


//question-1
// var date = new Date();
// console.log(date)




//question-2
// var date = new Date();
// var arrMon = ["January","February ", "March", "April", "May", "Junr", "July", "August", "September", "October", "November", "December"]
// var mon = date.getMonth()
// console.log(arrMon[mon])





//question-3
// var date = new Date();
// var arrDay = ["Sun","Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
// var day = date.getDay()
// console.log("Today is: " + arrDay[day])







//question-4
// var date = new Date();
// var arrDay = ["Sun","Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
// var day = date.getDay()
// if(day == 0 || day == 6){
//      console.log("Today is fun day")
// }else{
//      console.log("Today is working day")
// }








//question-5
// var date = new Date();
// var getDate = date.getDate()

// if(getDate<16){
//      alert("First Fifteen days of the month")
// }else{
//      alert("Last days of the month")
// }









//question-6
// var date = new Date();
// var getSec = Date.now()
// var getMin = Math.floor(getSec / 1000 / 60)
// console.log("current date: "+ date)
// console.log("elapsed milliseconds since jan 1 1970: "+ getSec)
// console.log("elapsed minutes since jan 1 1970: " + getMin)










//question-7
// var date = new Date();
// var getTime = date.getHours()

// if(getTime < 12){
//      alert("it's AM")
// }else{
//      alert("it's PM")
// }











//question-8
// var laterDate = new Date("Dec 31,2020");
// console.log(laterDate)





//question-9
// var ramdanDate = new Date("June 18,2015");
// var todayDate = new Date();

// var diff = todayDate - ramdanDate
// var final = Math.floor(diff / (1000*60*60*24))

// console.log(final + " days past since 1st ramzan 2015" )





//question-10
// var referenceDate = new Date("Dec 5,2015");
// var beginDate = new Date("jan 1, 2015");

// var milliSec = referenceDate-beginDate

// var final = milliSec / 1000
// console.log("on refrence date " + referenceDate);
// console.log(final  + " has passed since beginning of 2015")







//question-11
// var currentDate = new Date();
// console.log("current date and time is: " + currentDate);

// var getHour = currentDate.getHours();

// var sub = getHour - 1;

// currentDate.setHours(sub);
// console.log("1 hour before time is: " + currentDate);





//question-12
// var currentDate = new Date();
// console.log("current date and time is: " + currentDate.toDateString());

// var getYear = currentDate.getFullYear();

// var sub = getYear-100

// currentDate.setFullYear(sub)

// console.log("100 years back it was: " + currentDate.toDateString())








//question-13

// var userAge = Number(prompt("Enter your age"));
// var current = new Date();
// var CurrentYear = current.getFullYear();
// var calculate = CurrentYear-userAge
// console.log(`Your birth year is: ${calculate}`);



//question-4

// document.write("<h2>K-Electric Bill</h2>");
// var custumor = "Maryam";
// var month = "February";
// var unit = 410;
// var perUnit = 16;
// var netAmount = unit*perUnit;
// var lateAmount = 350;
// var grossAmount = netAmount + lateAmount;


// document.write(`Customer Name: <b>${custumor}</b> <br>`)
// document.write(`Month: <b>${month}</b> <br>`)
// document.write(`Number of units: <b>${unit}</b> <br>`)
// document.write(`Charges per unit: <b>${perUnit}</b> <br>`)
// document.write(`Net Amount payable (Within Due Date): <b>${netAmount}</b> <br>`)
// document.write(`Late payment surcharge: <b>${lateAmount}</b> <br>`)
// document.write(`Gross Amount payable (After Due Date): <b>${grossAmount}</b> <br>`)




