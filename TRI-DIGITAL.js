console.log('Numberbers in js')

let number1 = parseInt ( prompt("Enter a number1 ="));
let number2 = parseInt ( prompt("enter number2 = "));
let number3 = parseInt (prompt("Enter number3 = "));

let div =number1/number2/number3;
let add =number1+number2+number3;
let sub =number1-number2-number3;
let mult =number1*number2*number3;
let rem =number1%number2%number3;

document.getElementById(' = div').innerHTML=div
document.getElementById(' = add').innerHTML=add
document.getElementById(' = sub').innerHTML=sub
document.getElementById(' = mult').innerHTML=mult
document.getElementById(' = rem').innerHTML= rem

 alert ("THANKS FOR VISITING MY WEB CALCULATOR")
alert ("PLEASE ENJOY YOUR ANSWERS")
