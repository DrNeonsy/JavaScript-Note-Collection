// setInterval() invokes / calls the function every X milliseconds

// It is an asynchronous function, just like the timeout one, so it won't block / pause / stop the execution of the program as well

// Using what we've learned so far, we can create a function that will be called every X milliseconds

// So first of I'm going to setup a save input, making sure that we get a number that is no larger than 1000

try {
    let success = false;
    do {
        var maxNumber = parseInt(
            // It is important to use var in this case, so we can actually call the variable outside of the do-while loop
            // In this case it will be accessible within the try-catch block
            window.prompt("Enter the maximum number (<= 100): ")
        );

        if (isNaN(maxNumber)) {
            throw new Error("Invalid Input");
        }

        success =
            typeof maxNumber === "number" && maxNumber > 0 && maxNumber <= 100
                ? true
                : false;
    } while (!success);

    /* Calling the function that will declare a variable, set it to 0 and then increment it every 555 milliseconds
    by using the setInterval() function which is just like using a loop, but it is asynchronous, so it won't block the execution of the program
    */

    count(maxNumber);
} catch (error) {
    console.log(error.message);
}

// This is a function that will count until the target number is reached
function count(target) {
    let count = 1;
    const repeat = setInterval(function () {
        // The function that is being executed is anonymous in this case
        console.log(`${count++} / ${target}`);
        if (count > target) {
            clearInterval(repeat);
        }
    }, 180);
}
