/*  Variables Are Containers That Store Data / Values
    The Name Of The Variable Acts As A Reference To The Data Inside
    So One Might Say The Variable Behaves As If Is The Data It Contains Within

    NOTE: A Variables Max Amount Of Characters Is 254
*/

// There Are Two Steps To This Process

// 1. Declare A Variable With => (var, let, const);

// Var Will Be Discussed With Functions

// 2. Assign A Value

/*
    The Main Types Used Are:
    
    Numerical Types (Numbers, Whole Or Fractal)
    Strings (Sequence Of Characters Like This Sentence)
    Booleans (True || False)
*/

let userName = "Timothy";
let age = 23;
let teaPerson = true;

// Console Output
console.log(userName);
console.log(age);
console.log(teaPerson);

document.getElementById("p1").innerText = "Hello " + userName;
document.getElementById("p2").innerText = "You Are " + age + " Years Old";

teaPerson // Check Ternary Operator Section For The Explanation
    ? (document.getElementById("p3").innerText =
          "And You Like Tea, Which Is Great")
    : (document.getElementById("p3").innerText =
          "And You Don't Like Tea, HOW DARE YOU");

// --------------------------------------------------------------------------

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
