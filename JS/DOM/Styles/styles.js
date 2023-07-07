// Style manipulation is something you can also do with JavaScript, though you should rather change the class of an element than its style directly

// This is because changing the class will allow you to change multiple styles at once, and it keeps the file clean and easy to read

// Always Remember: Keep your HTML for structure, your CSS for styling, and your JavaScript for functionality

const h1 = document.querySelector("h1");

const prevColor = h1.style.color;

setTimeout(() => {
    h1.style.color = "red";
}, 1500);

setTimeout(() => {
    h1.style.color = prevColor;
}, 3000);

/*
    Note: The style property is an object, so you can access its properties and methods

    The properties you can modify are written in camelCase, so instead of font-size, you would use fontSize

    The value you want to assign is a string, so you need to use quotes
*/

// You can also use the getComputedStyle() method to get the computed style of an element
console.log(getComputedStyle(h1));

// The proper way to use styling with JavaScript is to use classes with addClass, removeClass and toggleClass via the classList property

// As you might've though of already, add and remove class are used to add and remove classes, while toggle does the opposite of the current state

setTimeout(() => {
    setInterval(() => {
        h1.classList.toggle("customClass");
    }, 1500);
}, 3000);
