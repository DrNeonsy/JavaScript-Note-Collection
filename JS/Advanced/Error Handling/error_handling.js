// Before we get into error handling, you should first know what an error is. An error is an object that is "thrown" when an error occurs.

// Meaning it is an object with a description of what went wrong and a "stack trace" of where the error occurred.

/*
    There are 7 types of errors in JavaScript:
    -   EvalError: Occurs when an error occurs during the evaluation of code using the eval() function.
    -   InternalError: Occurs when an internal error occurs in the JavaScript engine.
    -   RangeError: Occurs when a number is outside the range of acceptable values.
    -   ReferenceError: Occurs when an invalid reference is made to a variable or function that does not exist.
    -   SyntaxError: Occurs when there is a syntax error in the code.
    -   TypeError: Occurs when a value is not of the expected type.
    -   URIError: Occurs when there is an error in the encoding or decoding of a URI (Uniform Resource Identifier).
*/

// The try/catch/finally block is used to handle errors in JavaScript.

// We will focus on the TypeError, ReferenceError, and SyntaxError.

// alart("Hello World"); // This will throw a ReferenceError because alart is not defined.

// The try statement allows you to define a block of code to be tested for errors while it is being executed. Your code won't break if an error occurs.

try {
    alart("Hello World");
} catch (err) {
    // err is the reference to the error object and message is the property of the error object.
    console.log(err.message); // This will print "alart is not defined"
}

// Now, a similar example with a SyntaxError would be to make JS know that we are trying to invoke a function.
// This is not the case with "alart" because we are not using the window prefix, however console.log requires two parts.

// console.l0g("Hello World"); // You can uncomment these lines to see the "classic" error message.

try {
    console.l0g("Hello World"); // This would usually result in an uncaught TypeError.
} catch (err) {
    console.log(err.message);
}

// We can also define our own errors using the throw statement.

try {
    let number = prompt("Enter a number: ");

    if (isNaN(number)) {
        throw "Not a number";
    } else if (number == "") {
        throw "No input";
    }
} catch (err) {
    console.log(err);
}
// At last we have the finally block which will always be executed regardless of the result of the try/catch block.
finally {
    console.log("This will always be executed");
}