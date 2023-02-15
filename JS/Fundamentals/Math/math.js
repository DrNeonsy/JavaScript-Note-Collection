/*
    This Is A Quick Overview Of The Most Used Math Functions Within JS
*/

let num = 5.7;

// num = Math.round(num); // To Round The Number
// num = Math.floor(num); // Round Down
// num = Math.ceil(num); // Round Up
// num = Math.pow(num, 3); // Exponent
// num = Math.sqrt(num); // Square Root
// num = Math.abs(num); // Get Distance From Zero

let var1 = 3;
let var2 = 7;

let min = Math.min(num, var1, var2);
let max = Math.max(num, var1, var2);

/*
    Random Numbers Are A Bit Confusing At The Beginning (Of Time 😜)

    1. Produce A Seemingly Random Number Between 1 && 0
    2. Multiply That Number By The Number Range You Want
    3. Doing That Times 100 Will Create A 100 Wide Range ( 0 - 99 )
    4. If You Want To Include The Range Number ( 100 ) And Exclude 0 Add 1
    
    x. If You Want To Go From 0 - 100 You Would Need Times 101 ( Always Remember The 0 )
*/

let rdm = Math.floor(Math.random() * 100) + 1;

console.log("Result Of Num Var:", num);
console.log("Math Min:", min);
console.log("Math Max:", max);
console.log("Math Random:", rdm);
