/*
    Const Is A Variable Where The Content Cannot Be Changed
    It Adds A Bit Of Security (More Or Less) And Can Be Useful
*/

// The Naming Convention For Constant Variables Is UPPERCASE

const PI = 3.14159;
let radius;
let circumference;

radius = Number(window.prompt("Enter A Radius Of A Circle"));
circumference = 2 * PI * radius;

console.log("The Circumference Is: " + circumference);
