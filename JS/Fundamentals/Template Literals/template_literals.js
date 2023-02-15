/*
    String Interpolation Or As It Is Called In JavaScript
    Template Literals Allows You To Directly Embed Variables
    Into A String Instead Of Concatenating It
*/

let uName = "Neonsy";
let visit = 5;
let customer = true;

// console.log(
//   "Hello",
//   uName,
//   "This Is Your",
//   visit,
//   "TH Visit. Customer Status:",
//   customer
// );

console.log(
    `Hello ${uName}, This Is Your ${visit}TH Visit. Customer Status: ${customer}`
);
