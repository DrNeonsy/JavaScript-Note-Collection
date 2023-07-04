// While async helps us shorten our code, it's still a promise

// With the await keyword, we can have the result of the resolve or reject in one variable instead of using then and catch

// Only one condition: the function that uses await must be async

async function asyncFunction() {
    // Let's pretend that this is an asynchronous operation that's loading a file in the background

    if ((Math.floor(Math.random() * 10) + 1) % 2 === 0) {
        var myLoadSuccessfully = true;
    } else {
        var myLoadSuccessfully = false;
    }

    if (myLoadSuccessfully) {
        return "File loaded successfully";
    } else {
        throw "File loaded unsuccessfully";
    }
}

async function startAsyncWork() {
    // Because we can still receive a reject, we need to use try and catch
    try {
        let result = await asyncFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

startAsyncWork();
