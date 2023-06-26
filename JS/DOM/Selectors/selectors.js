// In this section, I'm going to provide an overview of the different ways we can select elements in the DOM

// Let's start with the most basic way of selecting elements in the DOM, which is by using an ID

// You can save the result of a selection inside variables to save time and make your code more readable (and write less code)

function idExample() {
    // ID's are unique, so you can only have one element with a specific ID
    // They are also suppose to be used for JS only, so you shouldn't use them for styling 😄
    const element = document.getElementById("customID"); // This will return the element with the ID "customID" (single element)

    setTimeout(() => {
        element.style.color = "red";
    }, 0);

    setTimeout(() => {
        element.style.color = "whitesmoke";
    }, 1000);
}

// There is also the querySelector method, which is more flexible than getElementById

// It works pretty much the same way as CSS selectors, so you can use any CSS selector to select elements

function querySelectorExample() {
    const element = document.querySelector("body > div > h2");
    // This will return the first element that matches the selector (single element)
    // document.querySelectorALl will return all the elements that match the selector (node list which can be used with forEach)
    
    // A querySelectorAll returns a node list, which natively supports forEach

    element.innerHTML = "Hello World!";

    setTimeout(() => {
        element.innerHTML = "Change ME";
    }, 1000);
}

// Another way of selecting elements is by using the getElementsByClassName method

function classExample() {
    const elements = document.getElementsByClassName("change");
    // This will return all the elements that have the class "change" (HTMLCollection)

    // IMPORTANT: To iterate over a HTMLCollection you need forOf loop

    // In this case we only have one element but this is about seeing how to access an element in a collection

    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].innerHTML = "Hello World!";
    // }

    // If you want to use an forEach loop, you need to convert the HTMLCollection into an array

    Array.from(elements).forEach((element) => {
        element.innerHTML = "Got My Class";
    });

    setTimeout(() => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Change ME";
        }
    }, 1000);
}

// Last example I will showcase is selecting elements by using the name attribute

const teas = document.getElementsByName("teas");

// This will return all the elements that have the name "teas" (collection of elements)

// Now I want to react when a radio button has been checked, so I will add an event listener to each radio button

// If you don't know what an event listener is, don't worry, I will explain it in the corresponding section

Array.from(teas).forEach((tea) => {
    tea.addEventListener("change", (event) => {
        alert(event.target.value); // This will make an alert with the content of the value attribute depending on the radio button that has been checked
    });
});
