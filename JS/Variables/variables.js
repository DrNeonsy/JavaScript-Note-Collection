/*  Variables Are Containers That Store Data / Values
    The Name Of The Variable Acts As A Reference To The Data Inside
    So One Might Say The Variable Behaves As If Is The Data It Contains Within
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

teaPerson
    ? (document.getElementById("p3").innerText =
          "And You Like Tea, Which Is Great")
    : (document.getElementById("p3").innerText =
          "And You Don't Like Tea, HOW DARE YOU");
