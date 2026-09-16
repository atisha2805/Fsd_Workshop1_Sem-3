
/*let x=100;
let y=100.5;
document.write("<br>The sum is:"+(x+y));

var m="<br>Hello";
var n="World";
document.write(m+n);

let a=prompt("Enter first number:");
let b=prompt("Enter second number:");
if(a>b){
    alert("A is greater than B");
}else {
    alert("B is greater than A");
}

if(a<b){
    confirm("Do you want to continue?");
}else{
    confirm("Do you want to exit?");
}
document.write("<br>The type of a is:"+ typeof(a));
document.write("<br>The type of b is:"+ typeof(b));
document.write("<br>The type of name is:"+ typeof(name));

function userDetails(){
    let name=prompt("Enter your name:");
    let age=prompt("Enter your age:");
    let gender=prompt("Enter your gender:");
    document.write("<br>Your name is:"+name);
    document.write("<br>Your age is:"+age);
    document.write("<br>Your gender is:"+gender);
}
userDetails();*/

function multiply(a,b){
    return a*b;
}
/*let result = multiply(3,4);
document.write("<br>The multiplication result is:"+result);*/

let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");
num1=Number(num1);
num2=Number(num2);
let result = multiply(num1,num2);
document.write("<br>The multiplication result is:"+result); 