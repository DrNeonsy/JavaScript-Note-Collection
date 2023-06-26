/*
    The Ternary Operator Is A Way To Write A Simple If Else Statement

    I Did This At Least Once ( Chronologically ) In The Variables Section

    You Can View This In Three Parts
*/

// 1. The Condition Marked With An ?

// 2. Afterwards Comes The Code When The Condition Is True

// 3. Separated By A : Follows The Code To Be Executed If False

let value = 3;

// So I'm Packing A String Into The Result Variable Depending On The Condition
let result = value > 3 ? "Condition True" : "Condition False";

console.log(result); // False Because It Is 3 Not Bigger Than 3

result = value >= 3 ? "Condition True" : "Condition False";

console.log(result); // Now It's True

// A Better Example With A Function For Reusability

let legalAdult = legalAge(25);

function legalAge(age) {
    // if (age >= 18) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    return age >= 18 ? true : false;
}

console.log("Legal Adult:", legalAdult);
