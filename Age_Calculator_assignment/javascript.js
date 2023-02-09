const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submit = document.querySelector(".submit");
const notFilled =  document.querySelector(".notFilled");
// if(!date.value || !month.value || !year.value){
//     submit.disabled = true;
// }
// else{

//     submit.disabled = false;
// }
// function calculationHandle(value){
    
// }
// function dateHandle(value){
// date.value = value
// // console.log(date.value)
// }
function calculateAge(){
 let dates = date.value;
 let months = month.value;
 let years = year.value;
if(!date.value || !month.value || !year.value){
   return notFilled.innerHTML= "Please enter all fields";
}
// if(!(typeof(parseInt(dates))=="number") || !(typeof(parseInt(months))==="number") || !(typeof(parseInt(years))==="number")){
//    return notFilled.innerHTML= "Please input valid data for Month Field, Year Field";
// }
notFilled.innerHTML = "";
let reg = /[a-zA-Z]/;
let flag = false;
let x = reg.test(dates);
if(x){flag=true}
console.log(x,"x");
let y = reg.test(months);
// console.log(y,"y");
if(y){flag = true}
let z = reg.test(years)
// console.log(z,"z");
if(z){flag=true}
if(dates>31 || months > 12 || years>2023 || years<1000){flag = true}
if(flag){
    return notFilled.innerHTML= "Please input valid data for Month Field, Year Field";
}
let num = parseInt(dates)+parseInt(months*30)+parseInt(years*365)+parseInt(years/4);
let todayDateNum = 10 + 2*30 + 2023*365+ parseInt(2023/4) 
let sol = todayDateNum - num;
let solyear = parseInt(sol/365); 
let temp =  sol%365;
let solmonth = parseInt(temp/30);
temp = parseInt(temp%30);
return notFilled.innerHTML = `Your Age is ${solyear} Years ${solmonth} Months ${temp} Days`; 
// console.log(new Date())
// console.log(parseInt("r")==NaN)
// console.log(typeof(parseInt(dates))==="number")
//  console.log(dates,months,years)
}