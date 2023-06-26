// The timeout function is used to delay the execution of a function for a specified amount of time in ms

// You could also say that the setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds

// It is an asynchronous function that means it will not block / pause / stop the execution of the program

// alert("Hello"); // This would be executed immediately

/*
    setTimeout(function () {
        alert("Hello, world!");
    }, 9000);

    // This would be executed after 9 seconds but I'll but it into a var to demonstrate the clearTimeout() function
*/

let timeout = setTimeout(function () {
    alert("Hello, world!");
}, 9000);

setTimeout(firstMessage, 1000); // This will happen first

function firstMessage() {
    alert("Close this to see another message in 8 seconds!");
}

document.getElementById("clearTimeout").onclick = function () {
    clearTimeout(timeout);
    alert(`The timeout for the "Hello, world!" message has been cleared!`);
};
