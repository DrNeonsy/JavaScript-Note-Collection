// The async keyword is added to functions to tell them to return a promise rather than directly returning the value

// If you know what a promise is, the "then" method will have a value and the "catch" method will have an error, so you need to throw an error

// So instead of having a promise object, we will turn the code into an async function

async function asyncFunction() {
    // Let's pretend that this is an asynchronous operation that's loading a file in the background

    if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
        var myLoadSuccessfully = true; // If you remember from functionBasics this var declaration is function scoped so we have access inside the entire function
    } else {
        var myLoadSuccessfully = false; // If you remember from functionBasics this var declaration is function scoped so we have access inside the entire function
    }

    if (myLoadSuccessfully) { // In the comments you can see how you could also do it if the function weren't async but it's more typing and more confusing
        return "File loaded successfully"; // return Promise.resolve("File loaded successfully");
    } else {
        throw "File loaded unsuccessfully"; // return Promise.reject("File loaded successfully");
    }
}

// So instead of using the promise object, we use the async function

asyncFunction()
    .then((content) => {
        console.log(content);
    }) // We can call the "catch" method on the promise object to get the content of the reject (or second) parameter / when the promise has not worked as intended
    .catch((content) => {
        console.log(content);
    });