/*
    The Problem: When Accepting User Input E.G. Window Prompt

    It Will Be A String

    We Have 3 Primary Types ( String, Number && Boolean )
*/

let favNumber;

favNumber = window.prompt("What Is Your Favorite Number?");

//favNumber += 1; // This Will Concatenate 1 At The End Of The String

favNumber = Number(favNumber); // Type Cast / Convert To A Number

if (isNaN(favNumber) || favNumber === 0) {
  console.log("You Were Suppose To Enter A Number");
} else {
  console.log(favNumber);
}

// -------------------------------------------------------------------------------

let num = Number("3.14");
let text = String(3.14);
let emptyBool = Boolean(""); // Returns False
let filledBool = Boolean("some rdm text"); // Returns True

console.log("num", num, typeof num);
console.log("text", text, typeof text);
console.log("emptyBool", emptyBool, typeof emptyBool);
console.log("filledBool", filledBool, typeof filledBool);
