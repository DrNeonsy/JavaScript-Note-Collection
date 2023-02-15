/*
    A Callback Is A Function That Can Be Passed As An Argument
    So You Can Intertwine A Function Into Another Function

    You Can Name The "Callback" Parameter However You Want
*/

let num1 = 5;
let num2 = 7;

addTwoValues(num1, num2, visualOutput);

function addTwoValues(val1, val2, Callback) {
    let result = val1 + val2;
    Callback(result);
}

function visualOutput(output) {
    document.getElementById("outputTag").innerHTML = output;
}
