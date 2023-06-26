// There are two things I want to do with this file

/*
    1. Changing the content of an HTML element

    2. Creating a new HTML element and then decide it's position in the DOM
*/

// IMPORTANT: While you can use .innerHTML to change the content of an element, it is not recommended because it is a security risk. Instead, use .textContent

const h2 = document.getElementById("targetID");

console.log(h2.textContent); // This will return the text content of the h2 element

const oldText = h2.textContent;

setInterval(() => {
    h2.textContent = "New Content";
}, 2000);

setInterval(() => {
    h2.textContent = oldText;
}, 4000);

// Creating a new HTML element and then decide it's position in the DOM

const uList = document.querySelector("ul");

// First of we need to create an element

const newLi = document.createElement("li");

// Now we need to add some content to the element

newLi.textContent = "Custom Item";

// To add an element at the beginning of the list, we can use .prepend() and to add an element at the end of the list, we can use .append()

// uList.append(newLi); // This will add the newLi element at the end of the list

// uList.prepend(newLi); // This will add the newLi element at the beginning of the list

// To add an element before another element, we can use .insertBefore()

uList.insertBefore(newLi, document.querySelector("li:nth-child(2)")); // This will add the newLi element before the second li element
