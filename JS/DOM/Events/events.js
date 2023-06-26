// In here I will showcase events and event listeners

// An event is an action that can be detected by the browser, like the onclick event attribute attached to a button

function hovering() {
    const button = document.getElementById("eButton");
    button.innerHTML = "Hovering";
}

function notHovering() {
    const button = document.getElementsByTagName("button")[0];
    button.innerHTML = "Don't Leave Me";
}

function tickle() {
    const button = document.querySelector("button");
    button.innerHTML = "Aha, Oho, That Tickles";
}

function unTickle(cb) {
    cb();
}

// An event listener is a function that waits for an event to happen, and then executes a block of code

// Let's listen to every keystroke on the document

document.addEventListener("keydown", function (event) {
    console.log(event.key);

    const btn = document.querySelector("button");

    if (
        btn.innerText !== "Hovering" &&
        btn.innerText !== "Don't Leave Me" &&
        btn.innerText !== "Aha, Oho, That Tickles"
    ) {
        if (event.key !== ' ') {
            btn.innerText = event.key;
        }
    }
});
