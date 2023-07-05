// The DOM is a (hierarchal) tree of nodes/elements created by the browser

// The DOM is a web API (Application Programming Interface) that allows us to interact with the browser

// It can be used to interact with our HTML or in other cases with XML documents

// So when we say we are using the DOM, we are using a set of objects that are provided to us by the browser

// So, seeing that the DOM is a tree of elements, the first element is the document object

// The document object is the entry point into the DOM | That means that the first child of the document object is the <html> element

// And you may have already guessed it, the two children of the <html> element are the <head> and <body> elements, just like how you structure a basic HTML document

console.log(document); // This will log the entire HTML document

/*
    You can also use console.dir() to log the entire HTML document, but it will log it in a different way

    The MDN docs say that console.dir() is the way to see all the properties of a specified JavaScript object in console
    By which the developer can easily get the properties of the object
*/

console.dir(document);

// To get hold of for example the title which is being held in the document object, we can do the following

console.log(document.title); // This will log the title of the HTML document

// I'm actually using JS to dynamically change the title of the HTML document, based on the file name

// You can also use the document object to redirect the user to another page

// document.location.href = 'https://www.google.com'; // This will redirect the user to the specified URL

// You can also target styling of elements using the document object

console.log(document.querySelector("body").style.backgroundColor);

setInterval(() => {
    document.body.style.backgroundColor = "#113878"; // This will change the background color of the body to a color
}, 3000);

setInterval(() => {
    document.body.style.backgroundColor = "#0b1637"; // This will change the background color of the body to a color
}, 6000);

// Check the other files for more detailed examples of the DOM
