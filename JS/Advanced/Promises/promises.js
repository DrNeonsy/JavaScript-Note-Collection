// A promise in an important concept in JavaScript that allows us to write asynchronous code and let it return values like synchronous code

// It is an object that represents the eventual completion or failure of an asynchronous operation

// It takes a callback function with two parameters, resolve and reject and while you can name them anything you want, these are the most common names

/*
    The first parameter which is usually resolve, will get the content when you call the then method on the promise
    The second parameter which is usually reject, will get the content when you call the catch method on the promise
*/

const myPromiseObject = new Promise((resolveWorked, rejectError) => {
    // Let's pretend that this is an asynchronous operation that's loading a file in the background

    if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
        var myLoadSuccessfully = true; // If you remember from functionBasics this var declaration is function scoped so we have access inside the entire function
    } else {
        var myLoadSuccessfully = false; // If you remember from functionBasics this var declaration is function scoped so we have access inside the entire function
    }

    if (myLoadSuccessfully) {
        resolveWorked("File loaded successfully");
    } else {
        rejectError("File loaded unsuccessfully");
    }
});

// We can call the then method on the promise object to get the content of the resolve (or first) parameter / when the promise has worked as intended

myPromiseObject
    .then((content) => {
        console.log(content);
    }) // We can call the "catch" method on the promise object to get the content of the reject (or second) parameter / when the promise has not worked as intended
    .catch((content) => {
        console.log(content);
    });

// I "added" the "catch" method to the promise "then" call, so that if the promise fails, it will not crash the program

/* Calling the "catch" on it's own would still work, but the "then" call would give you:
    Uncaught (in promise) File loaded unsuccessfully
        promise.then (async)
*/
