addNumbers(5, 7, displayResult); // This calls the addNumbers() the normal way

function addNumbers(num1, num2, callbackFunctionHolder) {
    let result = num1 + num2; // Normal addition of two numbers
    // As you can see when you log a function it'll print the entire function and that's how passing a function as a parameter works
    console.log(`Console Log the function provided via parameter\n\n${callbackFunctionHolder}\n\n`);
    console.log("callback call: ");
    callbackFunctionHolder(result); // We call the function and like all parameters the name can be anything
}

function displayResult(output) {
    console.log(output);
}

// You can still use the displayResult() function normally

console.log("normal call: ");
displayResult(5);

// So when do we use callbacks?
// When we want to do something after something else is done

/*
    Asynchronous operations: When we want to do something after something else is done

    Event handling: When a user clicks a button, we want to respond to that action by displaying an alert box or something else

    Modularity and reusability: Creates the possibility for more modular and reusable code

    Iteration and recursion: Like with forEach()
*/