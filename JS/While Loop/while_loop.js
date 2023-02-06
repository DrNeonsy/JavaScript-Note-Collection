/*
    A While Loop Is A Loop That Repeats Code Until A Condition Is Met

    The Loop Will Only Be Entered When The Condition Is True Because
    The Condition Is On The Loops "Head" => Head Driven Loop
*/

let input;

while (input == undefined || input === "" || input == null) {
    input = window.prompt("Enter Something");
}

console.log(input);