/*
    A Do While Loop Is Almost Exactly Like A While Loop

    However This Time It Is More Like A => Foot Driven Loop
    Because The Condition Is At The Bottom Which Means
    The Code Within The Scope Of {} Will Be Executed Once
*/

let input;

do {
    input = window.prompt("Enter Something");
} while (input == undefined || input === "" || input == null);

console.log(input);
