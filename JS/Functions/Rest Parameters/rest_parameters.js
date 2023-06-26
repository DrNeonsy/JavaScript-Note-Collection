/*
    This Technique Allows You To Store An Unknown Amount Of Arguments As Parameters
    That Is Something I'm Personally Familiar With In C# And The Same Rule Applies Here
    Where You Have To Put The Required Parameters First And The "Rest Collection" At The End
*/

let value1 = 13;
let value2 = 69;
let value3 = 42;
let value4 = 72;
let value5 = 5;
let value6 = 128;
let value7 = 7;

console.log(sum(value1, value2, value3, value4, value5, value6, value7));

function sum(...values) {
    let sum = 0;
    for (const value of values) {
        sum += value;
    }
    return sum;
}
