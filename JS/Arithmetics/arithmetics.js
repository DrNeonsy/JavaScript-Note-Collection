/*
    An Arithmetic Expression Is A Combination Of

    1. Operands => Values, Variables (The "Object" Of A Mathematical Operation)
    2. Operators => + - * / %

    Which Can Be Used To Evaluate A Value

    An Example Would Be ( y = x + 5;  )
*/

let teaBagAmount = 25;

/*
    Note: Writing This To Subtract => teaBagAmount = teaBagAmount - 1; (24)

    Is The Same As => teaBagAmount -= 1;

    Uncomment To See The Result 🔽
*/

// teaBagAmount += 1; // Would Result In 26
// teaBagAmount -= 1; // Would Result In 24
// teaBagAmount *= 2; // Would Result In 50
// teaBagAmount /= 5; // Would Result In 5
// teaBagAmount %= 3; // Gives You The Remainder As A Whole Number ( 25 / 3 = 8 ) ( 8 * 3 = 24 ) ( 25 - 24 = 1 )

/*
    We Also Have Operator Precedence In Order Of

    1. Parenthesis ()
    2. Exponents
    3. Multiply & Divide
    4. Plus & Minus
*/

let e = document.getElementById("output").innerText += " " + teaBagAmount;

console.log(teaBagAmount);