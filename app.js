//Question-1
// var date = new Date()
// document.write(date)

//Question-2
// var months = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"]
// var date = new Date();
// var currentMonth = date.getMonth();
// document.write("Current month: "+months[currentMonth]);

//Question-3
// var date = new Date();
// var days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
// var todayDay = date.getDay();
// document.write("Today is "+days[todayDay]);

//Question-4
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var date = new Date();
// var day = date.getDay();
// if (arr[day] === "Sunday" || arr[day] === "Saturday") {
//     document.write("It's Fun day");

// }

//Question-5
// var date = new Date();
// var month = date.getMonth();
// if (month < 16) {
//     document.write("First fifteen days of the month")
// }else {
//     document.write("Last days of the month")
// }

//Question-6
// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes =Math.floor(milliSeconds/(1000 * 60));
// document.write("Current Date: "+date+"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+milliSeconds+"<br>");
// document.write("Elapsed minutes since January 1 , 1970: "+minutes+"<br>");

//Question-7
// var date = new Date();
// var hour = date.getHours();
// if (hour === 00 || hour  <= 12) {
//     document.write("It's AM")
// } else{
//     document.write("It's PM")
// }

//Question-8
// var laterDate = new Date("december 31 , 2020")
// document.write(laterDate)

//Question-9
// var currentDay = new Date();
// var lastRamdanDay = new Date("June 18, 2015");
// var diff = currentDay.getTime() - lastRamdanDay.getTime();
// document.write(Math.floor(diff/(1000*60*60 *24))+" days have passed since 1st Ramadan, 2015")

//Question-10
// var referenceDate = new Date("Dec 05, 2015");
// var First2015Date = new Date(" 2015");
// var diff = referenceDate.getTime() - First2015Date.getTime();
// document.write("On reference date "+referenceDate+","+"<br>"+diff/1000+" seconds had passed since beginning of 2015")

//Question-11
// var date = new Date();
// var resetDate = new Date("july 9, 2022 15:14:00")
// document.write("current date: "+date+"<br>")
// document.write("1 hour ago,it was "+resetDate)

//Question-12
// var date = new Date();
// var resetDate = new Date("july 9, 1922")
// document.write("current date: "+date+"<br>")
// document.write("100 years back,it was "+resetDate)

//Question-13
// var userInput = prompt("Enter your birthday \n Format 1 july 1998")
// var birthdayDate = new Date(userInput);
// var nowDate = new Date();
// var diff = nowDate.getTime() - birthdayDate.getTime();
// var age = Math.round(diff/(1000 * 60 * 60 * 24 * 365))
// document.write("Your age is "+age)
// document.write("<br>")
// var birthdayYear = birthdayDate.getFullYear();
// document.write("Your birth year is " +birthdayYear);

//Question-14
var customerName = prompt("What is your name Sir/Madam");
var currentMonth = prompt("Please enter current month");
var numberOfUnit = +prompt("Enter number of units");
var chargesPerUnit = 16;
var lateSurcharge = 350;
var netAmount = numberOfUnit * chargesPerUnit;
var grossAmount = netAmount + lateSurcharge;
document.write("<h5>"+"K-Electric Bill"+"</h5>"+"<br>")
document.write("Customer Name:"+customerName+"<br>");
document.write("Month:"+currentMonth+"<br>");
document.write("Number of units:"+numberOfUnit+"<br>");
document.write("Charges per unit:"+chargesPerUnit+"<br>");
document.write("<br>");
document.write("<br>");
document.write("Net Amount Payable(within Due Date):"+netAmount+"<br>");
document.write("Late payment surcharge:"+lateSurcharge+"<br>");
document.write("Gross Amount Payable(after Due Date):"+grossAmount+"<br>")
